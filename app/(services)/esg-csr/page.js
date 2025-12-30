import ClientPage from './ClientPage';

export const metadata = {
  title: 'ESG & CSR Compliance Law Services in India | Nexpeak',
  description:
    'Expert legal guidance on ESG reporting, CSR planning, sustainability strategies, and corporate responsibility compliance for businesses in India.',
  alternates: {
    canonical: 'https://www.nexpeaklegal.com/esg-csr',
  },
  openGraph: {
    title: 'ESG & CSR Compliance Law Services | Nexpeak',
    description:
      'Navigate the complex landscape of ESG reporting and CSR regulations with strategic legal advisory and risk management.',
    url: 'https://www.nexpeaklegal.com/esg-csr',
    images: [
      {
        url: '/images/services/esg-csr.jpg',
        width: 1200,
        height: 630,
        alt: 'ESG and CSR Compliance Law Services',
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
            "name": "ESG & CSR Compliance Law",
            "description":
              "Legal services for Corporate Social Responsibility (CSR) planning and Environmental, Social, and Governance (ESG) regulatory reporting.",
            "provider": {
              "@type": "Organization",
              "name": "Nexpeak Legal Services",
              "url": "https://www.nexpeaklegal.com"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "serviceType": "ESG and CSR Legal Advisory"
          })
        }}
      />

      <ClientPage />
    </>
  );
}