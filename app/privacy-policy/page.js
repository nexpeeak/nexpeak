import ClientPage from './ClientPage';

export const metadata = {
  title: 'Privacy Policy | Nexpeak Legal Partners',
  description:
    'Read the Nexpeak Legal Partners Data Privacy Policy. We are committed to safeguarding user privacy and personal data in compliance with the IT Act 2000.',
  alternates: {
    canonical: 'https://www.nexpeaklegal.com/privacy-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      {/* Organization and Privacy Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy",
            "description": "Nexpeak Legal Partners' data privacy practices and user rights under the IT Act 2000.",
            "publisher": {
              "@type": "Organization",
              "name": "Nexpeak Legal Services",
              "url": "https://www.nexpeaklegal.com"
            },
            "datePublished": "2025-04-12",
            "dateModified": "2025-04-12"
          })
        }}
      />

      <ClientPage />
    </>
  );
}