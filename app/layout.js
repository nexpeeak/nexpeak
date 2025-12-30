import '@/node_modules/react-modal-video/css/modal-video.css';
import './globals.css';
import '../public/assets/css/style.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { DM_Sans, Marcellus } from '@/lib/font';

export const metadata = {
  metadataBase: new URL('https://www.nexpeaklegal.com/'),
  title: {
    default: 'Nexpeak | Expert Legal & Compliance Services for Modern Businesses',
    template: '%s | Nexpeak Legal Services'
  },
  description: 'Leading legal firm specializing in AI compliance, data protection, IPR, and startup advisory. Expert legal counsel in Gurugram and Delhi for modern enterprises.',
  keywords: [
    'Startup Advisory', 'Company Incorporation India', 'Contract Drafting', 
    'Intellectual Property Protection', 'Brand Protection', 'Secretarial Compliance', 
    'Taxation Compliance', 'GST TDS Services India', 'Labour Law Advisory', 
    'POSH Compliance', 'Dispute Resolution', 'Commercial Litigation India', 
    'ESG CSR Law', 'Data Protection Lawyer', 'GDPR Compliance India', 
    'Digital Business Law', 'E-Commerce Regulations', 'AI Compliance Governance', 
    'Mergers and Acquisitions M&A', 'Legal Firm Gurugram', 'Nexpeak Legal'
  ],
  authors: [{ name: 'Nexpeak Legal Team' }],
  creator: 'Nexpeak',
  publisher: 'Nexpeak',
  robots: 'index, follow',

  openGraph: {
    title: 'Nexpeak | Expert Legal & Compliance Services',
    description: 'Specialized legal counsel for Startups, AI, Data Protection, and Corporate Compliance. Trusted advisors in India.',
    url: 'https://www.nexpeaklegal.com/',
    siteName: 'Nexpeak Legal Services',
    images: [
      {
        url: '/images/logo-card.png',
        width: 1200,
        height: 630,
        alt: 'Nexpeak Legal Services - Your Trusted Legal Partners'
      }
    ],
    locale: 'en_IN',
    type: 'website'
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Nexpeak | Expert Legal & Compliance Services',
    description: 'Expert legal firm for AI compliance, data protection, IP law, and comprehensive business legal services.',
    images: ['/images/logo-card.png']
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  },

  manifest: '/site.webmanifest',

  alternates: {
    canonical: 'https://www.nexpeaklegal.com/'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${DM_Sans.variable} ${Marcellus.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Nexpeak Legal Services",
              "url": "https://www.nexpeaklegal.com",
              "logo": "https://www.nexpeaklegal.com/images/logo.png",
              "description": "Expert legal and compliance services for startups and modern businesses, specializing in Tech Law, IP, and Corporate Governance.",
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Two Horizon",
                  "addressLocality": "Gurugram",
                  "postalCode": "122002",
                  "addressCountry": "IN"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Vivekanand Puri",
                  "addressLocality": "New Delhi",
                  "postalCode": "110052",
                  "addressCountry": "IN"
                }
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9027667840",
                "contactType": "customer service",
                "availableLanguage": "English, Hindi"
              },
              "sameAs": [
                "https://www.linkedin.com/company/nexpeaklawfirm/",
                "https://www.facebook.com/nexpeaklawfirm",
                "https://www.instagram.com/nexpeaklawfirm/"
              ]
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}