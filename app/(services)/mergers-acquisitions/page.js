import ClientPage from './ClientPage';

export const metadata = {
  title: 'Mergers & Acquisitions (M&A) Legal Services in India | Nexpeak',
  description:
    'Expert legal counsel for M&A, due diligence, corporate restructuring, joint ventures, and share purchase agreements for businesses in India.',
  alternates: {
    canonical: 'https://www.nexpeaklegal.com/mergers-acquisitions',
  },
  openGraph: {
    title: 'Mergers & Acquisitions (M&A) Legal Services | Nexpeak',
    description:
      'Strategic legal guidance for seamless M&A transactions, meticulous due diligence, and regulatory approvals.',
    url: 'https://www.nexpeaklegal.com/mergers-acquisitions',
    images: [
      {
        url: '/images/services/mergers.jpg',
        width: 1200,
        height: 630,
        alt: 'Mergers and Acquisitions Legal Services',
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
            "name": "Mergers & Acquisitions (M&A)",
            "description":
              "Comprehensive legal support for M&A transactions, including due diligence, share purchase agreements, and regulatory filings.",
            "provider": {
              "@type": "Organization",
              "name": "Nexpeak Legal Services",
              "url": "https://www.nexpeaklegal.com"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "serviceType": "Corporate M&A Legal Advisory"
          })
        }}
      />

      <ClientPage />
    </>
  );
}