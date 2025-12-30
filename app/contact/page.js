import ClientPage from './ClientPage';

export const metadata = {
  title: 'Contact Us | Nexpeak Legal Services - Gurugram, India',
  description:
    'Get in touch with Nexpeak Legal for expert legal advisory. Visit our office in Gurugram, call us at +91 9027667840, or send us a message online.',
  alternates: {
    canonical: 'https://www.nexpeaklegal.com/contact',
  },
  openGraph: {
    title: 'Contact Nexpeak Legal Services',
    description:
      'Have a legal query? Contact our expert legal team in Gurugram for consultations on corporate law, IP, and compliance.',
    url: 'https://www.nexpeaklegal.com/contact',
    images: [
      {
        url: '/images/contact.jpeg',
        width: 1200,
        height: 630,
        alt: 'Contact Nexpeak Legal',
      },
    ],
    type: 'website',
  },
};

export default function Page() {
  return (
    <>
      {/* Contact Point Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Nexpeak Legal Services",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Two Horizon",
                "addressLocality": "Gurugram",
                "postalCode": "122002",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9027667840",
                "contactType": "customer support",
                "email": "nexpeaklawfirm@gmail.com"
              }
            }
          })
        }}
      />

      <ClientPage />
    </>
  );
}