'use client';

import ServiceDetails from '@/components/common/ServiceDetails';
import Layout from '@/components/layout/Layout';

export default function Home() {
  const serviceDetails = {
    serviceListTitle: 'Service List',
    serviceList: [
      {
        name: 'Startup Advisory & Incorporation',
        link: '/startup-advisory',
        isActive: false,
      },
      {
        name: 'Contract Drafting & Negotiation',
        link: '/contract-drafting',
        isActive: false,
      },
      {
        name: 'Intellectual Property & Brand Protection',
        link: '/intellectual-property',
        isActive: false,
      },
      {
        name: 'Secretarial Compliance Management',
        link: '/compliance-management',
        isActive: false,
      },
      {
        name: 'Digital Business & E-Commerce Law',
        link: '/ecommerce-law',
        isActive: false,
      },
      {
        name: 'Mergers & Acquisitions (M&A)',
        link: '/mergers-acquisitions',
        isActive: true,
      },
      {
        name: 'AI & Emerging Technology Compliance',
        link: '/ai-compliance',
        isActive: false,
      },
    ],
    contactPattern: 'assets/img/pattern/sidebar-contact-pattern.png',
    contactIcon: '/assets/img/icon/about-v2-icon1.png',
    contactTitle: 'Get in Touch',
    contactSubtitle: 'Legal Justice for You',
    contactLink: '/contact',
    contactButtonText: 'Contact Us',
    downloadTitle: 'Download File',
    downloads: [
      { text: 'M&A Due Diligence Checklist', link: '/m&a-checklist' },
      { text: 'Mergers & Acquisitions Guide', link: '/m&a-guide' },
    ],
    mainImage: '/assets/img/service/services-v2-img6.jpg',
    serviceTitle: 'Mergers & Acquisitions (M&A)',
    serviceDescription1:
      'Our firm provides expert legal counsel on all aspects of Mergers & Acquisitions. We specialize in meticulous **due diligence**, ensuring all legal and financial risks are identified before a deal is finalized. We also assist with **corporate restructuring**, forming **joint ventures**, and drafting and negotiating complex **share purchase agreements** to ensure your transaction is seamless and legally sound.',
    serviceDescription2:
      'We guide you through the entire M&A process, from initial negotiation to obtaining necessary **approvals** from regulatory bodies. Our team works to structure deals that align with your strategic goals, protect your interests, and maximize value. We handle the legal complexities so you can focus on the business synergy and integration post-acquisition, ensuring a smooth transition and long-term success.',
    benefitTitle: 'Benefits of our services',
    benefitDescription:
      'Engaging our M&A services provides a critical layer of security and expertise to your most significant business transactions. We help you navigate legal hurdles, mitigate financial risks, and ensure the deal is structured for optimal performance. Our strategic advice protects your investment and positions you for sustained growth in a competitive market.',
    benefits: [
      { icon: 'icon-icon-9', title: 'Thorough due diligence' },
      { icon: 'icon-icon-10', title: 'Expert deal structuring' },
      { icon: 'icon-icon-11', title: 'Seamless regulatory approvals' },
      { icon: 'icon-icon-12', title: 'Risk-free transaction support' },
    ],
    videoThumbnail: '/assets/img/service/service-details-img2.jpg',
    videoId: 'dQw4w9WgXcQ',
    justiceTitle: 'Strategic Growth, Legally Secure',
    justiceText1:
      'Mergers and acquisitions are transformative events for a business. We provide the legal foundation to ensure these transactions are not only successful but also strategically sound. Our commitment is to manage the legal intricacies, allowing you to achieve your growth ambitions with complete confidence and security.',
    justiceList: [
      'Your Partner in Strategic Transactions',
      'Navigating the M&A Landscape',
      'Maximizing Value, Minimizing Risk',
    ],
    contentImgs3: [
      '/assets/img/service/service-details-img3.jpg',
      '/assets/img/service/service-details-img4.jpg',
    ],
    faqTitle: 'Frequently Asked Questions',
    faqIntro:
      'Day above abundantly to abundantly beginning multiply air set can not first sixth void the upon after also created signs greater. Every said shed beast every herb signs fowl may yielding face likeness morning.',
    faqs: [
      {
        question: 'What is the most critical part of the M&A process?',
        answer:
          'Due diligence is the most critical part of the M&A process. It is the comprehensive investigation of a target company to identify all legal, financial, and operational risks, ensuring you have a complete picture of what you are acquiring before the deal is finalized.',
      },
      {
        question: 'What is a Share Purchase Agreement?',
        answer:
          "A **Share Purchase Agreement (SPA)** is a legally binding contract that outlines the terms of a transaction for the sale and purchase of a company's shares. It details key provisions such as the purchase price, warranties, representations, and indemnities, protecting both the buyer and the seller.",
      },
      {
        question: 'How long does a typical M&A transaction take?',
        answer:
          'The duration of an M&A transaction varies significantly based on its complexity, size, and regulatory requirements. Simple deals can be completed in a few months, while complex, cross-border acquisitions can take a year or more. Our team works to streamline the process as efficiently as possible.',
      },
    ],
  };

  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle="Mergers & Acquisitions (M&A)"
    >
      <ServiceDetails serviceDetails={serviceDetails} />
    </Layout>
  );
}
