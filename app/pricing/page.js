import ClientPage from './ClientPage';

export const metadata = {
  title: 'Pricing Plans | Affordable Legal Subscriptions for Startups',
  description:
    'Choose from our Foundation, Professional, or Executive plans. Affordable annual subscription legal services for startups, students, and women entrepreneurs in India.',

  alternates: {
    canonical: 'https://www.nexpeaklegal.com/pricing',
  },

  openGraph: {
    title: 'Startup Legal Pricing & Subscription Plans | Nexpeak',
    description:
      'Fixed-fee legal subscription plans including incorporation, compliance, trademark filing, and dedicated legal advisory.',
    url: 'https://www.nexpeaklegal.com/pricing',
    siteName: 'Nexpeak Legal Services',
    images: [
      {
        url: 'https://www.nexpeaklegal.com/images/home/hero.png',
        width: 1200,
        height: 630,
        alt: 'Nexpeak Legal Pricing Plans',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Legal Subscription Pricing | Nexpeak',
    description:
      'Affordable startup legal subscription plans with complete compliance support.',
    images: ['https://www.nexpeaklegal.com/images/home/hero.png'],
  },
};

export default function Page() {
  return (
    <>
      {/* Pricing / Offer Catalog Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "OfferCatalog",
            "name": "Nexpeak Legal Subscription Plans",
            "url": "https://www.nexpeaklegal.com/pricing",
            "provider": {
              "@type": "Organization",
              "name": "Nexpeak Legal Services",
              "url": "https://www.nexpeaklegal.com",
              "logo": "https://www.nexpeaklegal.com/images/logo.png"
            },
            "itemListElement": [
              {
                "@type": "Offer",
                "price": "2999",
                "priceCurrency": "INR",
                "url": "https://www.nexpeaklegal.com/pricing",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Foundation Plan",
                  "description": "Startup registration, basic compliance, trademark filing, and essential legal documentation."
                }
              },
              {
                "@type": "Offer",
                "price": "3999",
                "priceCurrency": "INR",
                "url": "https://www.nexpeaklegal.com/pricing",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Professional Plan",
                  "description": "Advanced compliance, trademark monitoring, dedicated lawyer, and extended legal services."
                }
              },
              {
                "@type": "Offer",
                "price": "4999",
                "priceCurrency": "INR",
                "url": "https://www.nexpeaklegal.com/pricing",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Executive Plan",
                  "description": "Full compliance, in-house legal team support, premium IP protection, and strategic advisory."
                }
              }
            ]
          })
        }}
      />

      <ClientPage />
    </>
  );
}
