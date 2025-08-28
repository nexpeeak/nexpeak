'use client';

import ServiceDetails from '@/components/common/ServiceDetails';
import Layout from '@/components/layout/Layout';

export default function Home() {
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
      { text: 'Contract Essentials Guide', link: '/contract-essentials' },
      { text: 'Negotiation Strategy Handbook', link: '/negotiation-handbook' },
    ],
    mainImage: '/images/services/hero.jpg',
    serviceTitle: 'Contract Drafting & Negotiation',
    serviceDescription1: 'We specialize in the meticulous drafting and thorough review of all types of legal agreements. From foundational MOUs and NDAs to complex term sheets and employment contracts, our expertise ensures your interests are fully protected and every clause is clear and legally sound. We safeguard your business relationships and transactions.',
    serviceDescription2: 'Our negotiation services are designed to secure favorable terms for you while maintaining a cooperative and professional tone. We handle all discussions, ensuring key terms are aligned with your strategic goals. Our goal is to create enforceable contracts that minimize future disputes and provide a strong legal foundation for your operations.',
    benefitTitle: 'Benefits of our services',
    benefitDescription: 'Our services provide a critical layer of security for all your business dealings. By entrusting us with your contract needs, you benefit from reduced legal risks, clarity in agreements, and a stronger bargaining position. We ensure every document is a tool for your success, not a source of potential liability.',
    benefits: [
      { icon: 'icon-icon-9', title: 'Legally sound agreements' },
      { icon: 'icon-icon-10', title: 'Strategic negotiation support' },
      { icon: 'icon-icon-11', title: 'Risk identification and mitigation' },
      { icon: 'icon-icon-12', title: 'Clarity and enforceability' },
    ],
    videoThumbnail: '/images/services/herodown.jpg',
    videoId: 'dQw4w9WgXcQ',
    justiceTitle: 'Clarity in Every Commitment',
    justiceText1: 'Contracts are the lifeblood of business. We ensure that every agreement you enter into is a clear, concise, and strong commitment. Our work provides the legal clarity you need to move forward with confidence, knowing that your rights are secured and your obligations are well-defined. We turn legal complexities into strategic advantages.',
    justiceList: ['Securing Your Business Relationships', 'Expertise in Legally Binding Terms', 'Your Ally in Every Agreement'],
    contentImgs3: [
      '/images/services/services-1.jpg',
      '/images/services/services-2.jpg',
    ],
    faqTitle: 'Frequently Asked Questions',
    faqIntro: 'Day above abundantly to abundantly beginning multiply air set can not first sixth void the upon after also created signs greater. Every said shed beast every herb signs fowl may yielding face likeness morning.',
    faqs: [
      { question: 'Why is professional contract drafting important?', answer: 'Professional drafting ensures all legal requirements are met, clauses are unambiguous, and your specific needs are addressed. It prevents costly disputes and misunderstandings that can arise from poorly drafted or generic contracts.' },
      { question: 'What is the difference between an MOU and a Term Sheet?', answer: 'An MOU (Memorandum of Understanding) is a non-binding agreement outlining a mutual understanding between parties. A Term Sheet is also typically non-binding but details the fundamental terms and conditions of an investment or transaction, serving as a basis for the final legal agreement.' },
      { question: 'Do you review existing contracts?', answer: 'Yes, we provide comprehensive contract review services. We analyze existing agreements to identify potential risks, non-compliant clauses, and opportunities for renegotiation to better serve your business interests.' },
    ],
  };

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contract Drafting & Negotiation">
      <ServiceDetails serviceDetails={serviceDetails} />
    </Layout>
  );
}