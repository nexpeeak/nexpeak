import ClientPage from './ClientPage';

export const metadata = {
  title: 'Data Protection & Technology Law Services in India',
  description:
    'Expert legal services in data protection, GDPR compliance, cybersecurity law, SaaS contracts, and technology regulations for modern businesses.',
  alternates: {
    canonical: 'https://www.nexpeaklegal.com/data-protection',
  },
  openGraph: {
    title: 'Data Protection & Technology Law Services | Nexpeak',
    description:
      'Legal advisory for GDPR compliance, cybersecurity, SaaS contracts, fintech regulation, and technology law.',
    url: 'https://www.nexpeaklegal.com/data-protection',
    images: [
      {
        url: '/images/services/data-protection.jpg',
        width: 1200,
        height: 630,
        alt: 'Data Protection and Technology Law Services',
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
            "name": "Data Protection & Technology Law",
            "description":
              "Legal services covering GDPR compliance, data privacy, cybersecurity law, SaaS contracts, and technology regulation.",
            "provider": {
              "@type": "Organization",
              "name": "Nexpeak Legal Services",
              "url": "https://www.nexpeaklegal.com"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "serviceType": "Data Protection & Technology Law Services"
          })
        }}
      />

      <ClientPage />
    </>
  );
}
