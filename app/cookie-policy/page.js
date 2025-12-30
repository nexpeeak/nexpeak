import ClientPage from './ClientPage';

export const metadata = {
  title: 'Cookie Policy | Nexpeak Legal Services',
  description:
    'Read the Nexpeak Legal Partners Cookie Policy to understand how we use cookies and similar technologies to enhance your experience on our website.',
  alternates: {
    canonical: 'https://www.nexpeaklegal.com/cookie-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      {/* Policy Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Cookie Policy",
            "description": "Information on how Nexpeak Legal uses cookies to improve user experience.",
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