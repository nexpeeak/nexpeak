import ClientPage from './ClientPage';
import Script from 'next/script';

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
        url: 'https://www.nexpeaklegal.com/images/about/growth.jpg',
        width: 1200,
        height: 630,
        alt: 'About Nexpeak Legal',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Nexpeak Legal Services',
    description:
      'Trusted legal advisors delivering clarity, compliance, and confidence.',
    images: [
      'https://www.nexpeaklegal.com/images/about/growth.jpg',
    ],
  },
};

export default function Page() {
  return (
    <>
      <Script
        id="about-page-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About Nexpeak Legal',
            description:
              'Nexpeak is a modern legal firm providing expert guidance in corporate, compliance, and technology law.',
            publisher: {
              '@type': 'Organization',
              name: 'Nexpeak Legal Services',
              url: 'https://www.nexpeaklegal.com',
            },
          }),
        }}
      />

      <ClientPage />
    </>
  );
}
