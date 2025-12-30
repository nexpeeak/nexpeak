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
    images: [
      {
        url: '/images/home/hero1.jpg',
        width: 1200,
        height: 630,
        alt: 'Nexpeak Pricing Plans',
      },
    ],
    type: 'website',
  },
};

export default function Page() {
  return (
    <>
      {/* Pricing Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Pricing Plans",
            "mainEntity": {
              "@type": "OfferCatalog",
              "name": "Legal Subscription Plans",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Foundation Plan",
                    "description": "Basic startup registration and compliance."
                  },
                  "price": "2999",
                  "priceCurrency": "INR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Professional Plan",
                    "description": "Standard startup legal support with dedicated lawyer."
                  },
                  "price": "3999",
                  "priceCurrency": "INR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Executive Plan",
                    "description": "Full-scale in-house legal team support."
                  },
                  "price": "4999",
                  "priceCurrency": "INR"
                }
              ]
            }
          })
        }}
      />

      <ClientPage />
    </>
  );
}