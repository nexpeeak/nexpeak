export default function sitemap() {
  const baseUrl = 'https://www.nexpeaklegal.com';
  const lastModified = new Date().toISOString();

  // Core Static Pages
  const pages = [
    { url: '', priority: 1.0, changeFrequency: 'monthly' },
    { url: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/pricing', priority: 0.85, changeFrequency: 'monthly' },
    { url: '/contact', priority: 0.95, changeFrequency: 'monthly' },
    { url: '/team', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/service', priority: 0.85, changeFrequency: 'monthly' },
    { url: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
    { url: '/terms-condition', priority: 0.3, changeFrequency: 'yearly' },
    { url: '/cookie-policy', priority: 0.3, changeFrequency: 'yearly' },
  ];

  // Professional Legal Service Pages
  const services = [
    'ai-compliance',
    'compliance-management',
    'contract-drafting',
    'data-protection',
    'dispute-resolution',
    'ecommerce-law',
    'esg-csr',
    'intellectual-property',
    'labour-law',
    'mergers-acquisitions',
    'startup-advisory',
    'taxation-compliance',
  ];

  return [
    ...pages.map((p) => ({
      url: `${baseUrl}${p.url}`,
      lastModified,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...services.map((s) => ({
      url: `${baseUrl}/${s}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    })),
  ];
}
