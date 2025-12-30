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
      { name: 'Data Protection & Technology Law', link: '/data-protection', isActive: false },
      { name: 'Dispute Resolution & Litigation', link: '/dispute-resolution', isActive: true },
      { name: 'AI & Emerging Technology Compliance', link: '/ai-compliance', isActive: false },
    ],
    contactPattern: 'assets/img/pattern/sidebar-contact-pattern.png',
    contactIcon: '/assets/img/icon/about-v2-icon1.png',
    contactTitle: 'Get in Touch',
    contactSubtitle: 'Strategic Legal Counsel',
    contactLink: '/contact',
    contactButtonText: 'Contact Us',
    downloadTitle: 'Download Resources',
    downloads: [
      { text: 'Litigation Strategy Overview', link: '#' },
      { text: 'Arbitration Process Guide', link: '#' },
    ],
    mainImage: '/images/services/hero.jpg',
    serviceTitle: 'Dispute Resolution & Litigation',
    serviceDescription1:
      'We provide strategic representation in commercial disputes, helping clients navigate the complexities of civil litigation, white-collar crimes, and regulatory challenges.',
    serviceDescription2:
      'Our focus is on delivering efficient outcomes through domestic and international arbitration, mediation, and proactive litigation management across various judicial forums.',
    benefitTitle: 'Why Choose Our Counsel',
    benefitDescription:
      'We combine deep legal expertise with a results-oriented approach to minimize risks and protect our clients\' commercial interests during conflicts.',
    benefits: [
      { icon: 'icon-icon-9', title: 'Strategic litigation planning' },
      { icon: 'icon-icon-10', title: 'Efficient dispute ADR' },
      { icon: 'icon-icon-11', title: 'Commercial risk mitigation' },
      { icon: 'icon-icon-12', title: 'Multi-jurisdictional support' },
    ],
    videoThumbnail: '/images/services/herodown.jpg',
    videoId: 'dQw4w9WgXcQ',
    justiceTitle: 'Resolving Conflicts with Precision',
    justiceText1:
      'Our team is dedicated to protecting your rights and achieving favorable settlements through meticulous preparation and persuasive advocacy.',
    justiceList: [
      'Goal-Oriented Conflict Resolution',
      'Robust Courtroom Representation',
      'Minimizing Business Disruption',
    ],
    contentImgs3: [
      '/images/services/services-1.jpg',
      '/images/services/services-2.jpg',
    ],
    faqTitle: 'Frequently Asked Questions',
    faqIntro:
      'Understanding the process of dispute resolution and litigation management.',
    faqs: [
      {
        question: 'What is Alternative Dispute Resolution (ADR)?',
        answer:
          'ADR refers to methods like arbitration and mediation used to resolve disputes outside of traditional courtroom litigation, often saving time and costs.',
      },
      {
        question: 'How long does a commercial litigation process take?',
        answer:
          'The duration varies based on the complexity of the case and the forum, but we focus on expedited strategies to resolve matters as efficiently as possible.',
      },
      {
        question: 'Do you handle international arbitration?',
        answer:
          'Yes, we represent clients in international arbitration proceedings, ensuring compliance with global standards and cross-border legal requirements.',
      },
    ],
  };

  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle="Dispute Resolution & Litigation"
    >
      <ServiceDetails serviceDetails={serviceDetails} />
    </Layout>
  );
}