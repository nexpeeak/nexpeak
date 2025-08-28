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
      { name: 'Secretarial Compliance Management', link: '/compliance-management', isActive: false },
      { name: 'Digital Business & E-Commerce Law', link: '/ecommerce-law', isActive: true },
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
      { text: 'E-Commerce Regulations Guide', link: '/ecommerce-regulations' },
      { text: 'Consumer Law Checklist', link: '/consumer-checklist' },
    ],
    mainImage: '/images/services/hero.jpg',
    serviceTitle: 'Digital Business & E-Commerce Law',
    serviceDescription1: 'Our services in Digital Business & E-Commerce Law are designed to help you build and operate a legally sound online presence. We assist with platform structuring, ensuring consumer compliance, and developing robust liability policies. Our expertise covers the full spectrum of e-commerce regulations, protecting your business from the unique challenges of the digital marketplace.',
    serviceDescription2: 'From drafting terms of service and privacy policies to navigating cross-border regulations and digital advertising laws, we provide comprehensive legal support. We help you manage risks associated with online transactions, data handling, and consumer rights. Our goal is to ensure your e-commerce platform is not only successful but also legally secure and trustworthy.',
    benefitTitle: 'Benefits of our services',
    benefitDescription: 'Partnering with us for your e-commerce legal needs provides a strategic advantage. You can confidently expand your digital footprint knowing that your business is compliant and protected. We help you build a transparent and secure platform, enhancing customer trust and brand reputation, which are crucial for long-term online success.',
    benefits: [
      { icon: 'icon-icon-9', title: 'Legally secure online platform' },
      { icon: 'icon-icon-10', title: 'Proactive consumer compliance' },
      { icon: 'icon-icon-11', title: 'Reduced liability risks' },
      { icon: 'icon-icon-12', title: 'Expert regulatory advisory' },
    ],
    videoThumbnail: '/images/services/herodown.jpg',
    videoId: 'dQw4w9WgXcQ',
    justiceTitle: 'Building Trust in the Digital Market',
    justiceText1: 'The digital economy thrives on trust. We provide the legal framework to ensure your e-commerce operations are built on a foundation of integrity and compliance. By addressing legal requirements proactively, we empower you to focus on growth and innovation, knowing that your digital business is secure and reliable.',
    justiceList: ['Legal Shields for Your Digital Storefront', 'Navigating E-Commerce Regulations', 'Empowering Your Online Business'],
    contentImgs3: [
      '/images/services/services-1.jpg',
      '/images/services/services-2.jpg',
    ],
    faqTitle: 'Frequently Asked Questions',
    faqIntro: 'Day above abundantly to abundantly beginning multiply air set can not first sixth void the upon after also created signs greater. Every said shed beast every herb signs fowl may yielding face likeness morning.',
    faqs: [
      { question: 'What is the most important legal document for an e-commerce site?', answer: 'The Terms of Service (ToS) and Privacy Policy are the most crucial. The ToS sets the rules for using your platform, while the Privacy Policy informs users about how their data is collected, used, and protected, which is essential for compliance with laws like GDPR.' },
      { question: 'How do I handle international sales and regulations?', answer: 'When selling internationally, you must comply with the consumer and data protection laws of each country you serve. We provide advice on international regulations, including cross-border data transfer laws and specific consumer protection requirements for different regions.' },
      { question: 'What are the key liability concerns for an e-commerce business?', answer: 'Key concerns include product liability, data breaches, and intellectual property infringement. Our services help you draft contracts and policies that limit your liability and implement best practices to reduce these risks, ensuring you are protected against potential legal challenges.' },
    ],
  };

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Digital Business & E-Commerce Law">
      <ServiceDetails serviceDetails={serviceDetails} />
    </Layout>
  );
}