import ClientPage from './ClientPage';

export const metadata = {
  title: 'Dispute Resolution & Litigation Services in India | Nexpeak',
  description:
    'Professional legal representation for commercial disputes, civil litigation, arbitration, and alternative dispute resolution (ADR) in India.',
  alternates: {
    canonical: 'https://www.nexpeaklegal.com/dispute-resolution',
  },
  openGraph: {
    title: 'Dispute Resolution & Litigation Services | Nexpeak',
    description:
      'Expert handling of commercial litigation, arbitration, and mediation to resolve complex legal disputes effectively.',
    url: 'https://www.nexpeaklegal.com/dispute-resolution',
    images: [
      {
        url: '/images/services/dispute.jpg',
        width: 1200,
        height: 630,
        alt: 'Dispute Resolution and Litigation Services',
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
            "name": "Dispute Resolution & Litigation",
            "description":
              "Comprehensive legal support for commercial disputes, domestic and international arbitration, and civil litigation.",
            "provider": {
              "@type": "Organization",
              "name": "Nexpeak Legal Services",
              "url": "https://www.nexpeaklegal.com"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "serviceType": "Legal Dispute Resolution"
          })
        }}
      />

      <ClientPage />
    </>
  );
}