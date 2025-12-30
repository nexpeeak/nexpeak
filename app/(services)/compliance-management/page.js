import ClientPage from './ClientPage';

export const metadata = {
  title: 'Secretarial Compliance Management Services in India',
  description:
    'Expert secretarial compliance and corporate governance services. ROC filings, statutory registers, board compliance, and regulatory management for companies.',
  alternates: {
    canonical: 'https://www.nexpeaklegal.com/compliance-management',
  },
  openGraph: {
    title: 'Secretarial Compliance Management Services | Nexpeak',
    description:
      'Comprehensive secretarial compliance services including ROC filings, corporate governance, SEBI and FEMA compliance.',
    url: 'https://www.nexpeaklegal.com/compliance-management',
    images: [
      {
        url: '/images/services/compliance-management.jpg',
        width: 1200,
        height: 630,
        alt: 'Secretarial Compliance Management Services',
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
            "name": "Secretarial Compliance Management",
            "description":
              "Professional secretarial compliance and corporate governance services including ROC filings, statutory records, and regulatory advisory.",
            "provider": {
              "@type": "Organization",
              "name": "Nexpeak Legal Services",
              "url": "https://www.nexpeaklegal.com"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "serviceType": "Corporate Secretarial & Compliance Services"
          })
        }}
      />

      <ClientPage />
    </>
  );
}
