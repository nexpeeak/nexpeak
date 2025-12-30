import ClientPage from './ClientPage';

export const metadata = {
  title: 'Intellectual Property & Brand Protection Services in India | Nexpeak',
  description:
    'Expert legal services for trademark, patent, and copyright registration, IP due diligence, and infringement protection to secure your business assets.',
  alternates: {
    canonical: 'https://www.nexpeaklegal.com/intellectual-property',
  },
  openGraph: {
    title: 'Intellectual Property & Brand Protection | Nexpeak Legal',
    description:
      'Protect your innovations and brand with comprehensive IP registration, monitoring, and legal enforcement services.',
    url: 'https://www.nexpeaklegal.com/intellectual-property',
    images: [
      {
        url: '/images/services/brand-protection.jpg',
        width: 1200,
        height: 630,
        alt: 'Intellectual Property and Brand Protection Services',
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
            "name": "Intellectual Property & Brand Protection",
            "description":
              "Legal services for trademark, patent, and copyright registration, IP enforcement, and strategic brand protection.",
            "provider": {
              "@type": "Organization",
              "name": "Nexpeak Legal Services",
              "url": "https://www.nexpeaklegal.com"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "serviceType": "Intellectual Property Law Services"
          })
        }}
      />

      <ClientPage />
    </>
  );
}