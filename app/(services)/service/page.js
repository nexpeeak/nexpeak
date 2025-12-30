import ClientPage from './ClientPage';
import Script from 'next/script';

export const metadata = {
  title: 'Our Expert Attorneys | Nexpeak Legal Services Team',
  description:
    'Meet the expert legal minds at Nexpeak. Our team consists of specialized corporate lawyers, litigation experts, patent agents, and tax consultants dedicated to your success.',
  alternates: {
    canonical: 'https://www.nexpeaklegal.com/team',
  },
  openGraph: {
    title: 'Meet Our Legal Team | Nexpeak Legal',
    description:
      'A dedicated team of attorneys specializing in Corporate Law, IPR Strategy, and Commercial Litigation.',
    url: 'https://www.nexpeaklegal.com/team',
    siteName: 'Nexpeak Legal Services',
    images: [
      {
        url: 'https://www.nexpeaklegal.com/images/team/shivangi.jpeg',
        width: 1200,
        height: 630,
        alt: 'Nexpeak Legal Services Team',
      },
    ],
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meet Our Legal Team | Nexpeak Legal',
    description:
      'Expert attorneys and legal consultants at Nexpeak Legal Services.',
    images: [
      'https://www.nexpeaklegal.com/images/team/shivangi.jpeg',
    ],
  },
};

export default function Page() {
  return (
    <>
      <Script
        id="team-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Nexpeak Legal Services',
            url: 'https://www.nexpeaklegal.com',
            logo: 'https://www.nexpeaklegal.com/images/logo.png',
            employee: [
              {
                '@type': 'Person',
                name: 'Shivangi',
                jobTitle: 'Founder & Managing Partner',
                image:
                  'https://www.nexpeaklegal.com/images/team/shivangi.jpeg',
                worksFor: {
                  '@type': 'Organization',
                  name: 'Nexpeak Legal Services',
                },
              },
              {
                '@type': 'Person',
                name: 'Adv. Tushar Mistra',
                jobTitle: 'Corporate & Commercial Litigation',
                image:
                  'https://www.nexpeaklegal.com/images/team/tushar-mistra.jpg',
              },
              {
                '@type': 'Person',
                name: 'Anu Gupta',
                jobTitle: 'Patent Agent & IPR Strategist',
                image:
                  'https://www.nexpeaklegal.com/images/team/anu-gupta.jpeg',
              },
            ],
          }),
        }}
      />

      <ClientPage />
    </>
  );
}
