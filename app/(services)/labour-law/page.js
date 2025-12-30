import ClientPage from './ClientPage';

export const metadata = {
  title: 'Employment & Labour Law Advisory Services in India | Nexpeak',
  description:
    'Expert legal advisory on HR policies, employee contracts, labour audits, POSH compliance, and workplace regulations for businesses in India.',
  alternates: {
    canonical: 'https://www.nexpeaklegal.com/labour-law',
  },
  openGraph: {
    title: 'Employment & Labour Law Advisory | Nexpeak Legal',
    description:
      'Strategic legal support for workplace compliance, POSH implementation, and robust employer-employee relations.',
    url: 'https://www.nexpeaklegal.com/labour-law',
    images: [
      {
        url: '/images/services/labour.jpg',
        width: 1200,
        height: 630,
        alt: 'Employment and Labour Law Advisory Services',
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
            "name": "Employment & Labour Law Advisory",
            "description":
              "Legal advisory for HR policies, labour law compliance audits, POSH regulations, and employee contract drafting.",
            "provider": {
              "@type": "Organization",
              "name": "Nexpeak Legal Services",
              "url": "https://www.nexpeaklegal.com"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "serviceType": "Labour & Employment Law Services"
          })
        }}
      />

      <ClientPage />
    </>
  );
}