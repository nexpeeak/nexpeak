import ClientPage from './ClientPage';

export const metadata = {
  title: 'Contract Drafting & Negotiation Legal Services in India',
  description:
    'Expert contract drafting, review, and negotiation services. Secure legally sound, enforceable agreements and reduce business risks.',
  alternates: {
    canonical: 'https://www.nexpeaklegal.com/contract-drafting',
  },
  openGraph: {
    title: 'Contract Drafting & Negotiation Services | Nexpeak',
    description:
      'Professional contract drafting and negotiation services for startups and enterprises.',
    url: 'https://www.nexpeaklegal.com/contract-drafting',
    images: [
      {
        url: '/images/services/contract-drafting.jpg',
        width: 1200,
        height: 630,
        alt: 'Contract Drafting and Negotiation Services',
      },
    ],
    type: 'website',
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Contract Drafting & Negotiation",
            "description":
              "Professional contract drafting, review, and negotiation services ensuring legally sound and enforceable agreements.",
            "provider": {
              "@type": "Organization",
              "name": "Nexpeak Legal Services",
              "url": "https://www.nexpeaklegal.com"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "serviceType": "Contract Law & Negotiation Services"
          })
        }}
      />

      <ClientPage />
    </>
  );
}
