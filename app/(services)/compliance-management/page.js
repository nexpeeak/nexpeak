'use client';

import ServiceDetails from '@/components/common/ServiceDetails';
import Layout from '@/components/layout/Layout';

export default function Home() {
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
    mainImage: '/assets/img/service/services-v2-img4.jpg',
    serviceTitle: 'Secretarial Compliance Management',
    serviceDescription1: 'Our team specializes in meticulous secretarial compliance to ensure your business adheres to all regulatory requirements. We handle all aspects of corporate governance, including ROC filings, SEBI/FEMA compliance, and drafting of resolutions, allowing you to focus on your core business operations with complete peace of mind.',
    serviceDescription2: 'We provide end-to-end management of statutory records, board meeting preparations, and shareholder resolutions. Our proactive approach helps prevent legal penalties and reputational damage by staying ahead of regulatory changes. We are your trusted partner in maintaining impeccable corporate records and governance standards.',
    benefitTitle: 'Benefits of our services',
    benefitDescription: 'Partnering with us for your secretarial compliance ensures transparency, efficiency, and legal security. Our expertise in corporate law reduces your administrative burden and mitigates risks associated with non-compliance. We provide a structured and systematic approach to all your regulatory obligations.',
    benefits: [
      { icon: 'icon-icon-9', title: 'Seamless regulatory filings' },
      { icon: 'icon-icon-10', title: 'Robust corporate governance' },
      { icon: 'icon-icon-11', title: 'Risk mitigation & audit support' },
      { icon: 'icon-icon-12', title: 'Expert shareholder advisory' },
    ],
    videoThumbnail: '/assets/img/service/service-details-img2.jpg',
    videoId: 'dQw4w9WgXcQ',
    justiceTitle: 'Structured Governance, Sustainable Growth',
    justiceText1: 'Proper corporate governance is the bedrock of a sustainable business. We ensure your company operates with integrity and compliance, building trust with investors and stakeholders. Our services are designed to not only meet legal mandates but also to establish best practices for long-term corporate health.',
    justiceList: ['Ensuring Legal Integrity and Trust', 'Simplified Compliance, Maximum Security', 'Your Partner in Corporate Governance'],
    contentImgs3: [
      '/assets/img/service/service-details-img3.jpg',
      '/assets/img/service/service-details-img4.jpg',
    ],
    faqTitle: 'Frequently Asked Questions',
    faqIntro: 'Day above abundantly to abundantly beginning multiply air set can not first sixth void the upon after also created signs greater. Every said shed beast every herb signs fowl may yielding face likeness morning.',
    faqs: [
      { question: 'What is the role of a company secretary?', answer: 'The company secretary ensures the company’s compliance with all statutory and regulatory requirements. This includes filing documents with the Registrar of Companies (ROC), maintaining corporate records, and advising the board on governance matters.' },
      { question: 'How do you handle changes in corporate law?', answer: 'We continuously monitor changes in corporate laws, including those from ROC, SEBI, and FEMA. Our team proactively informs clients of these changes and updates our compliance strategies to ensure they remain fully compliant without any interruptions.' },
      { question: 'What documents are required for ROC filings?', answer: 'The specific documents required for ROC filings vary based on the type of filing, but commonly include annual returns, financial statements, resolutions, and forms related to changes in directorship or share capital. We manage the entire documentation and submission process for you.' },
    ],
  };

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Secretarial Compliance Management">
      <ServiceDetails serviceDetails={serviceDetails} />
    </Layout>
  );
}