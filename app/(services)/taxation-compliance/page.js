import ClientPage from './ClientPage';

export const metadata = {
  title: 'Taxation & Financial Compliance Services in India | Nexpeak',
  description:
    'Expert legal support for GST, TDS, corporate tax, payroll compliance, transfer pricing, and ESIC/EPF services for businesses in India.',
  alternates: {
    canonical: 'https://www.nexpeaklegal.com/taxation-compliance',
  },
  openGraph: {
    title: 'Taxation & Financial Compliance Services | Nexpeak Legal',
    description:
      'Ensuring financial integrity through strategic tax planning, meticulous compliance, and expert regulatory advisory.',
    url: 'https://www.nexpeaklegal.com/taxation-compliance',
    images: [
      {
        url: '/images/services/taxation.jpg',
        width: 1200,
        height: 630,
        alt: 'Taxation and Financial Compliance Services',
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
            "name": "Taxation & Financial Compliance",
            "description":
              "Legal and financial compliance services covering GST, TDS, corporate tax, and payroll management.",
            "provider": {
              "@type": "Organization",
              "name": "Nexpeak Legal Services",
              "url": "https://www.nexpeaklegal.com"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "serviceType": "Taxation and Financial Legal Advisory"
          })
        }}
      />

      <ClientPage />
    </>
  );
}