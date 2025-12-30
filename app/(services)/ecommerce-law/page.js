import ClientPage from './ClientPage';

export const metadata = {
  title: 'Digital Business & E-Commerce Law Services in India | Nexpeak',
  description:
    'Comprehensive legal support for e-commerce platforms, digital business structuring, consumer law compliance, and online liability policies.',
  alternates: {
    canonical: 'https://www.nexpeaklegal.com/ecommerce-law',
  },
  openGraph: {
    title: 'Digital Business & E-Commerce Law Services | Nexpeak',
    description:
      'Legal advisory for e-commerce regulations, platform terms, privacy policies, and digital marketplace compliance.',
    url: 'https://www.nexpeaklegal.com/ecommerce-law',
    images: [
      {
        url: '/images/services/ecommerce.jpg',
        width: 1200,
        height: 630,
        alt: 'Digital Business and E-Commerce Law Services',
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
            "name": "Digital Business & E-Commerce Law",
            "description":
              "Legal services for e-commerce platform structuring, consumer compliance, and liability risk management.",
            "provider": {
              "@type": "Organization",
              "name": "Nexpeak Legal Services",
              "url": "https://www.nexpeaklegal.com"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "serviceType": "E-Commerce Legal Services"
          })
        }}
      />

      <ClientPage />
    </>
  );
}