import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/cdn-cgi/'],
      },
    ],
    sitemap: 'https://kaliprlabs.in/sitemap.xml',
    host: 'https://kaliprlabs.in',
  }
}

