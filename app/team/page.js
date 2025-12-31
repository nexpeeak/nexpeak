import ClientPage from './ClientPage';

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
    images: [
      {
        url: '/images/team/shivangi.jpeg',
        width: 1200,
        height: 630,
        alt: 'Nexpeak Legal Founder and Managing Partner',
      },
    ],
    type: 'website',
  },
};

export default function Page() {
  return (
    <>
      {/* Team/Employee Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Our Team",
            "description": "Meet our professional legal attorneys and consultants.",
            "publisher": {
              "@type": "Organization",
              "name": "Nexpeak Legal Services"
            }
          })
        }}
      />

      <ClientPage />
    </>
  );
}