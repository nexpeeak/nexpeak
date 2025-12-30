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
      { name: 'Employment & Labour Law Advisory', link: '/labour-law', isActive: false },
      { name: 'AI & Emerging Technology Compliance', link: '/ai-compliance', isActive: true },
    ],
    contactPattern: 'assets/img/pattern/sidebar-contact-pattern.png',
    contactIcon: '/assets/img/icon/about-v2-icon1.png',
    contactTitle: 'Get in Touch',
    contactSubtitle: 'Legal Justice for You',
    contactLink: '/contact',
    contactButtonText: 'Contact Us',
    downloadTitle: 'Download File',
    downloads: [
      { text: 'AI Compliance Checklist', link: '/ai-compliance-checklist' },
      { text: 'Technology Law Whitepaper', link: '/tech-law-whitepaper' },
    ],
    mainImage: '/images/services/hero.jpg',
    serviceTitle: 'AI & Emerging Technology Compliance',
    serviceDescription1:
      'Guiding you through the complexities of AI, blockchain, and emerging technologies. We establish robust governance frameworks and ensure compliance with evolving legal landscapes.',
    serviceDescription2:
      'From smart contract audits to AI regulatory filings, we provide comprehensive legal support covering GDPR, CCPA, and upcoming AI-specific regulations.',
    benefitTitle: 'Benefits of our services',
    benefitDescription:
      'We help you proactively manage legal risks, protect innovation, and position your business as a responsible technology leader.',
    benefits: [
      { icon: 'icon-icon-9', title: 'Proactive regulatory guidance' },
      { icon: 'icon-icon-10', title: 'Ethical AI framework development' },
      { icon: 'icon-icon-11', title: 'Protection of intellectual property' },
      { icon: 'icon-icon-12', title: 'Global compliance strategies' },
    ],
    videoThumbnail: '/images/services/herodown.jpg',
    videoId: 'dQw4w9WgXcQ',
    justiceTitle: 'Innovate with Confidence',
    justiceText1:
      'We ensure your AI initiatives align with legal and ethical standards, allowing you to innovate without compliance risks.',
    justiceList: [
      'Securing Your AI Innovation',
      'Navigating the Digital Frontier Legally',
      'Future-Proofing Technology Solutions',
    ],
    contentImgs3: [
      '/images/services/services-1.jpg',
      '/images/services/services-2.jpg',
    ],
    faqTitle: 'Frequently Asked Questions',
    faqIntro:
      'Common questions businesses ask about AI compliance and emerging technology regulations.',
    faqs: [
      {
        question: 'What is the most critical compliance risk for AI?',
        answer:
          'Key risks include data privacy violations, algorithmic bias, lack of transparency, and non-compliance with evolving AI regulations.',
      },
      {
        question: 'How are IP rights handled for AI-generated content?',
        answer:
          'We advise on ownership, licensing, and contractual safeguards for AI-generated outputs under evolving IP laws.',
      },
      {
        question: 'Do you support blockchain and smart contract compliance?',
        answer:
          'Yes. We provide legal audits for smart contracts, token compliance, and regulatory alignment for blockchain projects.',
      },
    ],
  };

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="AI & Emerging Technology Compliance">
      <ServiceDetails serviceDetails={serviceDetails} />
    </Layout>
  );
}
