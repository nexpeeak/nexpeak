'use client';

import ServiceDetails from '@/components/common/ServiceDetails';
import Layout from '@/components/layout/Layout';

export default function ClientPage() {
  const serviceDetails = {
    serviceListTitle: 'Service List',
    serviceList: [
      { name: 'Startup Advisory & Incorporation', link: '/startup-advisory', isActive: false },
      { name: 'Contract Drafting & Negotiation', link: '/contract-drafting', isActive: true },
      { name: 'Intellectual Property & Brand Protection', link: '/intellectual-property', isActive: false },
      { name: 'Secretarial Compliance Management', link: '/compliance-management', isActive: false },
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
      { text: 'Contract Essentials Guide', link: '/assets/resource/Contract_Essentials_Guide.pdf' },
    ],
    mainImage: '/images/services/hero.jpg',
    serviceTitle: 'Contract Drafting & Negotiation',
    serviceDescription1:
      'We draft and review all types of legal agreements including MOUs, NDAs, term sheets, and employment contracts to fully protect your business interests.',
    serviceDescription2:
      'Our negotiation services secure favorable, enforceable terms while minimizing future disputes and aligning contracts with your strategic goals.',
    benefitTitle: 'Benefits of our services',
    benefitDescription:
      'Our contract services reduce legal risks, improve clarity, and strengthen your negotiating position across all business dealings.',
    benefits: [
      { icon: 'icon-icon-9', title: 'Legally sound agreements' },
      { icon: 'icon-icon-10', title: 'Strategic negotiation support' },
      { icon: 'icon-icon-11', title: 'Risk identification and mitigation' },
      { icon: 'icon-icon-12', title: 'Clarity and enforceability' },
    ],
    videoThumbnail: '/images/services/herodown.jpg',
    videoId: 'dQw4w9WgXcQ',
    justiceTitle: 'Clarity in Every Commitment',
    justiceText1:
      'We ensure every agreement you enter is clear, enforceable, and strategically aligned—turning contracts into business assets.',
    justiceList: [
      'Securing Your Business Relationships',
      'Expertise in Legally Binding Terms',
      'Your Ally in Every Agreement',
    ],
    contentImgs3: [
      '/images/services/services-1.jpg',
      '/images/services/services-2.jpg',
    ],
    faqTitle: 'Frequently Asked Questions',
    faqIntro: 'Common questions about contract drafting, review, and negotiation.',
    faqs: [
      {
        question: 'Why is professional contract drafting important?',
        answer:
          'It ensures legal clarity, enforceability, and risk protection—preventing disputes and costly misunderstandings.',
      },
      {
        question: 'What is the difference between an MOU and a Term Sheet?',
        answer:
          'An MOU outlines mutual understanding, while a term sheet details key transaction terms guiding the final agreement.',
      },
      {
        question: 'Do you review existing contracts?',
        answer:
          'Yes. We review contracts to identify risks, gaps, and opportunities for renegotiation or improvement.',
      },
    ],
  };

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contract Drafting & Negotiation">
      <ServiceDetails serviceDetails={serviceDetails} />
    </Layout>
  );
}
