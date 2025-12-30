import ClientPage from './ClientPage';

export const metadata = {
  title: 'Startup Advisory & Incorporation Services in India | Nexpeak',
  description:
    'Expert legal support for startups: Company registration, business structuring, founders agreements, and ongoing compliance to build a solid legal foundation.',
  alternates: {
    canonical: 'https://www.nexpeaklegal.com/startup-advisory',
  },
  openGraph: {
    title: 'Startup Advisory & Incorporation Services | Nexpeak Legal',
    description:
      'From idea to incorporated reality. We provide strategic legal frameworks and compliance support for new ventures.',
    url: 'https://www.nexpeaklegal.com/startup-advisory',
    images: [
      {
        url: '/images/services/startup.jpg',
        width: 1200,
        height: 630,
        alt: 'Startup Advisory and Incorporation Services',
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
            "name": "Startup Advisory & Incorporation",
            "description":
              "Legal services for company registration, business structuring, and founders' agreements for new ventures.",
            "provider": {
              "@type": "Organization",
              "name": "Nexpeak Legal Services",
              "url": "https://www.nexpeaklegal.com"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "serviceType": "Startup Legal Consulting"
          })
        }}
      />

      <ClientPage />
    </>
  );
}