'use client';

import ServiceDetails from '@/components/common/ServiceDetails';
import Layout from '@/components/layout/Layout';

export default function ClientPage() {
  const serviceDetails = {
    serviceListTitle: 'Service List',
    serviceList: [
      { name: 'Startup Advisory & Incorporation', link: '/startup-advisory', isActive: false },
      { name: 'Contract Drafting & Negotiation', link: '/contract-drafting', isActive: false },
      { name: 'Intellectual Property & Brand Protection', link: '/intellectual-property', isActive: false },
      { name: 'Secretarial Compliance Management', link: '/compliance-management', isActive: false },
      { name: 'Taxation & Financial Compliance', link: '/taxation-compliance', isActive: false },
      { name: 'Data Protection & Technology Law', link: '/data-protection', isActive: true },
      { name: 'AI & Emerging Technology Compliance', link: '/ai-compliance', isActive: false },
    ],
    contactPattern: 'assets/img/pattern/sidebar-contact-pattern.png',
    contactIcon: '/assets/img/icon/about-v2-icon1.png',
    contactTitle: 'Get in Touch',
    contactSubtitle: 'Legal Justice for You',
    contactLink: '/contact',
    contactButtonText: 'Contact Us',
    downloadTitle: 'Download File',
    downloads: [
      { text: 'GDPR Compliance Guide', link: '/gdpr-guide' },
      { text: 'Cybersecurity & Privacy Whitepaper', link: '/privacy-whitepaper' },
    ],
    mainImage: '/images/services/hero.jpg',
    serviceTitle: 'Data Protection & Technology Law',
    serviceDescription1:
      'We advise businesses on GDPR, data privacy, cybersecurity, and technology law, helping them design legally compliant and secure digital operations.',
    serviceDescription2:
      'From SaaS contracts to fintech advisory, we provide proactive legal guidance to protect data assets and ensure compliance with evolving regulations.',
    benefitTitle: 'Benefits of our services',
    benefitDescription:
      'Our services help businesses avoid regulatory penalties, build customer trust, and strengthen digital resilience through legally sound frameworks.',
    benefits: [
      { icon: 'icon-icon-9', title: 'Robust privacy frameworks' },
      { icon: 'icon-icon-10', title: 'Cyber risk mitigation' },
      { icon: 'icon-icon-11', title: 'SaaS contract expertise' },
      { icon: 'icon-icon-12', title: 'Strategic fintech advisory' },
    ],
    videoThumbnail: '/images/services/herodown.jpg',
    videoId: 'dQw4w9WgXcQ',
    justiceTitle: 'Protecting Your Digital Frontier',
    justiceText1:
      'We safeguard your data and technology with comprehensive legal strategies that enable secure innovation and sustainable growth.',
    justiceList: [
      'Fortifying Your Digital Assets',
      'Compliance in a Connected World',
      'Legal Expertise for Tech-Driven Businesses',
    ],
    contentImgs3: [
      '/images/services/services-1.jpg',
      '/images/services/services-2.jpg',
    ],
    faqTitle: 'Frequently Asked Questions',
    faqIntro:
      'Common questions about data protection, GDPR, cybersecurity, and technology law.',
    faqs: [
      {
        question: 'What is GDPR and why is it important?',
        answer:
          'GDPR sets global standards for personal data protection and imposes strict compliance obligations and penalties.',
      },
      {
        question: 'How do you assist with cybersecurity legal issues?',
        answer:
          'We advise on breach response, compliance obligations, liability allocation, and cybersecurity-related contracts.',
      },
      {
        question: 'What does a SaaS contract legal review include?',
        answer:
          'It covers SLAs, data privacy clauses, IP rights, security obligations, and termination terms to protect your business.',
      },
    ],
  };

  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle="Data Protection & Technology Law"
    >
      <ServiceDetails serviceDetails={serviceDetails} />
    </Layout>
  );
}
