import ClientPage from './ClientPage';

export const metadata = {
  title: 'AI Compliance & Emerging Technology Legal Services in India',
  description:
    'Expert legal advisory for AI, blockchain, and emerging technologies. Ensure compliance with AI regulations, data protection laws, and ethical AI frameworks.',
  alternates: {
    canonical: 'https://www.nexpeaklegal.com/ai-compliance',
  },
  openGraph: {
    title: 'AI Compliance & Emerging Technology Legal Services | Nexpeak',
    description:
      'Legal compliance for AI, blockchain, and emerging technologies. Trusted advisors for ethical, secure, and lawful innovation.',
    url: 'https://www.nexpeaklegal.com/ai-compliance',
    images: [
      {
        url: '/images/services/ai-compliance.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Compliance Legal Services',
      },
    ],
    type: 'website',
  },
};

export default function Page() {
  return (
    <>
      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI & Emerging Technology Compliance",
            "description":
              "Legal advisory for AI compliance, ethical AI governance, blockchain law, and emerging technology regulations.",
            "provider": {
              "@type": "Organization",
              "name": "Nexpeak Legal Services",
              "url": "https://www.nexpeaklegal.com"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "serviceType": "AI & Technology Law"
          })
        }}
      />

      <ClientPage />
    </>
  );
}
