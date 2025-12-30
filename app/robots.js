
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://www.nexpeaklegal.com/sitemap.xml',
    host: 'https://www.nexpeaklegal.com',
  };
}
