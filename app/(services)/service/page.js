import ClientPage from './ClientPage';

export const metadata = {
  title: 'Legal Services for Startups & Corporations in India | Nexpeak',
  description:
    'Explore our comprehensive legal services including Startup Advisory, IP Protection, M&A, Taxation, and Technology Law compliance for modern businesses.',
  alternates: {
    canonical: 'https://www.nexpeaklegal.com/service',
  },
  openGraph: {
    title: 'Expert Legal & Compliance Services | Nexpeak Legal',
    description:
      'From incorporation to emerging tech compliance, Nexpeak provides end-to-end legal solutions for global businesses.',
    url: 'https://www.nexpeaklegal.com/service',
    images: [
      {
        url: '/images/home/services.jpg',
        width: 1200,
        height: 630,
        alt: 'Nexpeak Legal Services Overview',
      },
    ],
    type: 'website',
  },
};

export default function Page() {
  return (
    <>
      {/* Collection Page Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Nexpeak Legal Services",
            "description": "A full suite of legal and compliance services for startups and established corporations.",
            "url": "https://www.nexpeaklegal.com/service",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Startup Advisory & Incorporation"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Intellectual Property & Brand Protection"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Data Protection & Technology Law"
              }
            ]
          })
        }}
      />

      <ClientPage />
    </>
  );
}