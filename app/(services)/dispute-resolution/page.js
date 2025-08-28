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
        name: 'Taxation & Financial Compliance',
        link: '/taxation-compliance',
        isActive: false,
      },
      {
        name: 'Dispute Resolution & Litigation',
        link: '/dispute-resolution',
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
      { text: 'Dispute Resolution Guide', link: '/dispute-guide' },
      { text: 'Litigation Process Overview', link: '/litigation-overview' },
    ],
    mainImage: '/images/services/hero.jpg',
    serviceTitle: 'Dispute Resolution & Litigation',
    serviceDescription1:
      'Our firm offers robust services in dispute resolution and litigation, covering everything from arbitration and mediation to full-scale courtroom representation. We specialize in complex contract enforcement, debt recovery, and navigating insolvency proceedings, ensuring your legal position is strong and your interests are defended vigorously at every stage of the process.',
    serviceDescription2:
      'We are committed to resolving disputes efficiently and effectively, aiming for the best possible outcome for our clients. Whether through strategic negotiation or assertive litigation, our team provides expert counsel and unwavering support. We meticulously prepare each case, anticipating challenges and building a compelling legal strategy to achieve your objectives.',
    benefitTitle: 'Benefits of our services',
    benefitDescription:
      'Choosing our dispute resolution services provides you with a clear strategic advantage. We focus on minimizing disruption to your business and securing a favorable resolution. Our experience in various legal forums allows us to offer tailored solutions that are both practical and cost-effective, helping you navigate legal conflicts with confidence.',
    benefits: [
      { icon: 'icon-icon-9', title: 'Strategic legal counsel' },
      { icon: 'icon-icon-10', title: 'Efficient conflict resolution' },
      { icon: 'icon-icon-11', title: 'Expert litigation support' },
      { icon: 'icon-icon-12', title: 'Strong contract enforcement' },
    ],
    videoThumbnail: '/images/services/herodown.jpg',
    videoId: 'dQw4w9WgXcQ',
    justiceTitle: 'Resolving Conflicts, Upholding Rights',
    justiceText1:
      'Legal disputes can be challenging, but with the right guidance, they can be resolved to your advantage. We stand by you to ensure your rights are upheld and your case is presented with precision and clarity. Our dedication to justice and our proven track record in litigation make us a reliable partner in your time of need.',
    justiceList: [
      'Your Trusted Litigator',
      'Navigating Legal Disputes with Expertise',
      'Securing Favorable Outcomes',
    ],
    contentImgs3: [
       '/images/services/services-1.jpg',
      '/images/services/services-2.jpg',
    ],
    faqTitle: 'Frequently Asked Questions',
    faqIntro:
      'Day above abundantly to abundantly beginning multiply air set can not first sixth void the upon after also created signs greater. Every said shed beast every herb signs fowl may yielding face likeness morning.',
    faqs: [
      {
        question: 'What is the first step in a legal dispute?',
        answer:
          'The first step is a thorough case assessment. We review all relevant documents and facts to understand the situation fully, identify your legal options, and develop an initial strategy, which may include negotiation, mediation, or preparing for litigation.',
      },
      {
        question: 'What is the benefit of arbitration over litigation?',
        answer:
          'Arbitration is often faster, more private, and can be less costly than traditional litigation. It allows parties to have their dispute decided by a neutral third party (the arbitrator), and the decision is legally binding, similar to a court judgment.',
      },
      {
        question: 'How do you handle debt recovery cases?',
        answer:
          'We handle debt recovery by first issuing demand letters and attempting out-of-court settlements. If necessary, we proceed with legal action, including filing lawsuits and executing judgments, to ensure you recover the amounts owed to you in a timely and effective manner.',
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
