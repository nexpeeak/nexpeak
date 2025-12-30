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
      { name: 'Secretarial Compliance Management', link: '/compliance-management', isActive: true },
      { name: 'Taxation & Financial Compliance', link: '/taxation-compliance', isActive: false },
      { name: 'Employment & Labour Law Advisory', link: '/labour-law', isActive: false },
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
      { text: 'Secretarial Compliance Checklist', link: '/compliance-checklist' },
      { text: 'Corporate Governance Guide', link: '/corporate-governance-guide' },
    ],
    mainImage: '/images/services/hero.jpg',
    serviceTitle: 'Secretarial Compliance Management',
    serviceDescription1:
      'We provide meticulous secretarial compliance services ensuring adherence to ROC, SEBI, and FEMA regulations. Our team manages statutory filings, board resolutions, and governance frameworks, allowing businesses to operate with confidence.',
    serviceDescription2:
      'From maintaining statutory registers to preparing board and shareholder documentation, we deliver end-to-end compliance management while proactively addressing regulatory updates.',
    benefitTitle: 'Benefits of our services',
    benefitDescription:
      'Our structured compliance approach minimizes legal risks, enhances corporate transparency, and ensures smooth regulatory operations.',
    benefits: [
      { icon: 'icon-icon-9', title: 'Seamless regulatory filings' },
      { icon: 'icon-icon-10', title: 'Strong corporate governance' },
      { icon: 'icon-icon-11', title: 'Risk mitigation & audit support' },
      { icon: 'icon-icon-12', title: 'Expert shareholder advisory' },
    ],
    videoThumbnail: '/images/services/herodown.jpg',
    videoId: 'dQw4w9WgXcQ',
    justiceTitle: 'Structured Governance, Sustainable Growth',
    justiceText1:
      'Effective governance ensures long-term business sustainability. We help organizations maintain integrity, compliance, and investor confidence.',
    justiceList: [
      'Ensuring Legal Integrity and Trust',
      'Simplified Compliance, Maximum Security',
      'Your Partner in Corporate Governance',
    ],
    contentImgs3: [
      '/images/services/services-1.jpg',
      '/images/services/services-2.jpg',
    ],
    faqTitle: 'Frequently Asked Questions',
    faqIntro:
      'Common questions about secretarial compliance and corporate governance requirements.',
    faqs: [
      {
        question: 'What is the role of a company secretary?',
        answer:
          'A company secretary ensures compliance with statutory obligations, manages ROC filings, maintains corporate records, and advises on governance matters.',
      },
      {
        question: 'How do you manage regulatory changes?',
        answer:
          'We continuously track regulatory updates from ROC, SEBI, and FEMA and proactively adapt compliance strategies to keep businesses fully compliant.',
      },
      {
        question: 'Which documents are required for ROC filings?',
        answer:
          'Typical documents include annual returns, financial statements, board resolutions, and filings related to changes in management or capital structure.',
      },
    ],
  };

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Secretarial Compliance Management">
      <ServiceDetails serviceDetails={serviceDetails} />
    </Layout>
  );
}
