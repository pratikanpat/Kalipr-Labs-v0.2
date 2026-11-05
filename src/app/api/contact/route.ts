import { NextRequest, NextResponse } from 'next/server'
import { contactSchema } from '@/features/contact/schema'

// ── POST handler ─────────────────────────────────────────────
// Note: Runs on Vercel Edge/Node.js runtime.
// In-memory rate limiting is intentionally omitted — stateless per-request env.
// Use Vercel Firewall or middleware-based rate limiting for production.

export async function POST(req: NextRequest) {
  // Parse body
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  // Server-side Zod validation
  const result = contactSchema.safeParse(body)
  if (!result.success) {
    return NextResponse.json(
      { error: 'Validation failed.', issues: result.error.flatten() },
      { status: 422 },
    )
  }

  const data = result.data

  // Honeypot — silently succeed to not reveal detection
  if (data.honeypot && data.honeypot.length > 0) {
    return NextResponse.json({ success: true })
  }

  // Time check — bot submitted too fast (< 3 seconds)
  if (data.submittedAt && Date.now() - data.submittedAt < 3000) {
    return NextResponse.json({ success: true })
  }

  // ── Send email via Resend ────────────────────────────────
  const apiKey = process.env.RESEND_API_KEY

  if (apiKey) {
    try {
      const { Resend } = await import('resend')
      const resend = new Resend(apiKey)

      const emailBody = `
New project inquiry from Kalipr Labs contact form.

Name: ${data.name}
Email: ${data.email}
Company: ${data.company ?? '—'}
Project Type: ${data.projectType}
Budget: ${data.budget ?? '—'}

Description:
${data.description}
      `.trim()

      await resend.emails.send({
        from: 'Kalipr Labs Contact <noreply@kaliprlabs.in>',
        to: 'contact@kaliprlabs.in',
        replyTo: data.email,
        subject: `New inquiry: ${data.projectType} — ${data.name}`,
        text: emailBody,
      })
    } catch (err) {
      console.error('[contact/route] Resend error:', err)
      return NextResponse.json(
        { error: 'Failed to send message. Please email us directly at contact@kaliprlabs.in' },
        { status: 500 },
      )
    }
  } else {
    // Dev / no API key — log to console
    console.log('[contact/route] No RESEND_API_KEY set. Would have sent:', {
      name: data.name,
      email: data.email,
      projectType: data.projectType,
      description: data.description.slice(0, 80) + '...',
    })
  }

  return NextResponse.json({ success: true })
}
