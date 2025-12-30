import ClientPage from './ClientPage';

export const metadata = {
  title: 'Terms of Use | Nexpeak Legal Partners',
  description:
    'Read the terms and conditions for using the Nexpeak Legal Partners website. Understand our proprietary rights, legal compliance, and jurisdictional policies.',
  alternates: {
    canonical: 'https://www.nexpeaklegal.com/terms-condition',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      {/* Terms of Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms of Use",
            "description": "Governing terms and conditions for the Nexpeak Legal Partners website.",
            "publisher": {
              "@type": "Organization",
              "name": "Nexpeak Legal Services"
            },
            "dateModified": "2025-04-12"
          })
        }}
      />

      <ClientPage />
    </>
  );
}