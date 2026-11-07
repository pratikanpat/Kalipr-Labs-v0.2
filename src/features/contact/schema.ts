import { z } from 'zod'

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  company: z
    .string()
    .max(100, 'Company name is too long')
    .optional(),
  projectType: z.enum(
    [
      'Software Product Development',
      'Custom Web Application',
      'AI & Workflow Automation',
      'Website Development',
      'Not sure yet',
    ],
    { required_error: 'Please select a project type' },
  ),
  budget: z.string().optional(),
  phone: z
    .string()
    .regex(/^[+\d\s\-()]{7,20}$/, 'Please enter a valid phone number')
    .optional()
    .or(z.literal('')),
  description: z
    .string()
    .max(2000, 'Description is too long')
    .optional()
    .or(z.literal('')),
  honeypot: z.string().optional(),
  submittedAt: z.number().optional(),
})

export type ContactFormData = z.infer<typeof contactSchema>

