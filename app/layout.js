import '@/node_modules/react-modal-video/css/modal-video.css';
import './globals.css';
import '../public/assets/css/style.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { DM_Sans, Marcellus } from '@/lib/font';

export const metadata = {
  title: 'Nexpeak | Legal Strength of Business',
  description:
    'Expert legal and compliance services for modern businesses. From AI compliance to mergers & acquisitions, we provide tailored solutions.',
  keywords: [
    'legal services',
    'compliance',
    'business law',
    'AI compliance',
    'data protection',
    'intellectual property',
    'labour law',
    'taxation',
    'mergers acquisitions',
    'startup advisory'
  ],
  authors: [{ name: 'Nexpeak Team' }],
  creator: 'Nexpeak',
  publisher: 'Nexpeak',
  robots: 'index, follow',

  openGraph: {
    title: 'Nexpeak | Legal Strength of Business',
    description:
      'Expert legal and compliance services for modern businesses.',
    url: 'https://www.nexpeaklegal.com/',
    siteName: 'Nexpeak',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Nexpeak - Legal Strength of Business'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Nexpeak | Legal Strength of Business',
    description:
      'Expert legal and compliance services for modern businesses.',
    images: ['/images/logo.png']
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
      <body>{children}</body>
    </html>
  );
}
