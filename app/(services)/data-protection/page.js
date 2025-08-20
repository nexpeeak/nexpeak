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
        name: 'Data Protection & Technology Law',
        link: '/data-protection',
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
      { text: 'GDPR Compliance Guide', link: '/gdpr-guide' },
      {
        text: 'Cybersecurity & Privacy Whitepaper',
        link: '/privacy-whitepaper',
      },
    ],
    mainImage: '/assets/img/service/services-v2-img6.jpg',
    serviceTitle: 'Data Protection & Technology Law',
    serviceDescription1:
      'Navigating the digital landscape requires a solid legal foundation. Our expertise in data protection and technology law covers GDPR, cybersecurity, and privacy compliance. We help businesses draft robust SaaS contracts and conduct thorough IT audits to protect sensitive data and ensure legal adherence, mitigating risks in an increasingly regulated world.',
    serviceDescription2:
      'From fintech advisory to managing evolving privacy laws, we provide comprehensive legal guidance tailored to your technology needs. We help structure your digital operations to be secure and compliant, protecting your assets and reputation. Our proactive advice ensures your business can innovate while maintaining the highest standards of data integrity and legal security.',
    benefitTitle: 'Benefits of our services',
    benefitDescription:
      'Our services offer peace of mind by ensuring your technology and data practices are legally sound. We help you build customer trust, avoid costly penalties, and maintain a competitive edge. Our blend of technical and legal knowledge allows us to provide practical, effective solutions for all your digital challenges.',
    benefits: [
      { icon: 'icon-icon-9', title: 'Robust privacy frameworks' },
      { icon: 'icon-icon-10', title: 'Mitigation of cyber risks' },
      { icon: 'icon-icon-11', title: 'Expert SaaS contract drafting' },
      { icon: 'icon-icon-12', title: 'Strategic fintech advisory' },
    ],
    videoThumbnail: '/assets/img/service/service-details-img2.jpg',
    videoId: 'dQw4w9WgXcQ',
    justiceTitle: 'Protecting Your Digital Frontier',
    justiceText1:
      'In the digital age, your data is one of your most valuable assets. We are dedicated to protecting your information and technology with a comprehensive legal shield. Our services ensure that your digital operations are not only compliant but also resilient against emerging threats and legal challenges. We turn legal complexities into opportunities for secure growth.',
    justiceList: [
      'Fortifying Your Digital Assets',
      'Compliance in a Connected World',
      'Legal Expertise for Tech-Driven Businesses',
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
        question: 'What is GDPR and why is it important?',
        answer:
          'GDPR (General Data Protection Regulation) is a European Union law on data protection and privacy. It is crucial because it sets a global standard for how businesses must handle personal data, imposing strict rules and significant fines for non-compliance.',
      },
      {
        question: 'How can you help with cybersecurity legal issues?',
        answer:
          'We assist with legal aspects of cybersecurity, including breach response plans, compliance with data breach notification laws, and drafting contracts that allocate liability for cyber incidents. We ensure your legal framework supports your technical security measures.',
      },
      {
        question: 'What is a typical SaaS contract legal review?',
        answer:
          'A SaaS contract legal review involves analyzing terms related to service level agreements (SLAs), data security and privacy clauses, intellectual property rights, and termination provisions. We ensure the contract is fair, protects your interests, and is legally sound for your business model.',
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
