import ClientPage from './ClientPage';

export const metadata = {
  title: 'About Nexpeak | Our History & Legal Expertise',
  description:
    'Learn about Nexpeak Legal Services. With over 5 years of experience, we provide modern legal solutions in corporate law, compliance, and intellectual property.',
  alternates: {
    canonical: 'https://www.nexpeaklegal.com/about',
  },
  openGraph: {
    title: 'About Nexpeak Legal Services',
    description:
      'Empowering businesses with legal clarity and confidence for over 5 years.',
    url: 'https://www.nexpeaklegal.com/about',
    images: [
      {
        url: '/images/about/growth.jpg',
        width: 1200,
        height: 630,
        alt: 'About Nexpeak Legal',
      },
    ],
    type: 'website',
  },
};

export default function Page() {
  return (
    <>
      {/* About Page Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Nexpeak Legal",
            "description": "Nexpeak is a legal firm providing expert guidance in corporate, compliance, and technology law.",
            "publisher": {
              "@type": "Organization",
              "name": "Nexpeak Legal Services",
              "url": "https://www.nexpeaklegal.com"
            }
          })
        }}
      />

      <ClientPage />
    </>
  );
}