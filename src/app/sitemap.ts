import { MetadataRoute } from 'next'

const BASE = 'https://kaliprlabs.in'

// Pinned to actual last-meaningful-update date per route.
// Update lastModified here whenever a page gets a content change.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: new Date('2026-11-08'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE}/products`,
      lastModified: new Date('2026-11-08'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE}/services`,
      lastModified: new Date('2026-11-08'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE}/work`,
      lastModified: new Date('2026-11-08'),
      changeFrequency: 'monthly',
      priority: 0.80,
    },
    {
      url: `${BASE}/about`,
      lastModified: new Date('2026-11-08'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${BASE}/contact`,
      lastModified: new Date('2026-11-08'),
      changeFrequency: 'yearly',
      priority: 0.65,
    },
    {
      url: `${BASE}/privacy`,
      lastModified: new Date('2026-11-01'),
      changeFrequency: 'yearly',
      priority: 0.30,
    },
    {
      url: `${BASE}/terms`,
      lastModified: new Date('2026-11-01'),
      changeFrequency: 'yearly',
      priority: 0.30,
    },
  ]
}

