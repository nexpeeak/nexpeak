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
      { name: 'ESG & CSR Compliance Law', link: '/esg-csr', isActive: true },
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
      { text: 'ESG Reporting Framework', link: '/esg-framework' },
      { text: 'CSR Policy Handbook', link: '/csr-handbook' },
    ],
    mainImage: '/images/services/hero.jpg',
    serviceTitle: 'ESG & CSR Compliance Law',
    serviceDescription1:
      'Our firm provides expert legal guidance on ESG (Environmental, Social, and Governance) and CSR (Corporate Social Responsibility) compliance. We assist with CSR planning, developing robust sustainability strategies, and ensuring your business meets all regulatory and reporting requirements. Our goal is to help you build a responsible and ethical corporate identity that creates long-term value.',
    serviceDescription2:
      'We help you navigate the complex landscape of ESG reporting, advising on frameworks, data collection, and risk management. Our team identifies potential liabilities and helps you develop proactive strategies to address them. By integrating sustainability into your core business, we ensure you can attract conscious investors and consumers while mitigating legal and reputational risks.',
    benefitTitle: 'Benefits of our services',
    benefitDescription:
      'Partnering with us for your ESG and CSR needs goes beyond simple compliance. We help you transform these obligations into strategic opportunities for growth. Our services enhance your brand reputation, improve stakeholder relations, and position you as a leader in corporate responsibility, while also ensuring legal security.',
    benefits: [
      { icon: 'icon-icon-9', title: 'Strategic CSR planning' },
      { icon: 'icon-icon-10', title: 'Transparent ESG reporting' },
      { icon: 'icon-icon-11', title: 'Effective risk mitigation' },
      { icon: 'icon-icon-12', title: 'Enhanced brand reputation' },
    ],
    videoThumbnail: '/images/services/herodown.jpg',
    videoId: 'dQw4w9WgXcQ',
    justiceTitle: 'Growth with Responsibility',
    justiceText1:
      'In today’s market, responsible business practices are non-negotiable. We provide the legal expertise to embed sustainability and social responsibility into your operations. Our guidance ensures that your commitment to a better future is not just a promise but a legally sound and fully integrated part of your business model.',
    justiceList: [
      'Legal Frameworks for a Sustainable Future',
      'From Compliance to Strategic Advantage',
      'Trusted Guidance in Corporate Responsibility',
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
        question: 'What is the difference between CSR and ESG?',
        answer:
          'CSR (Corporate Social Responsibility) is a self-regulating business model that helps a company be socially accountable to itself, its stakeholders, and the public. ESG (Environmental, Social, and Governance) is a set of standards for a company’s operations that socially conscious investors use to screen potential investments.',
      },
      {
        question: 'Why is ESG reporting becoming mandatory?',
        answer:
          "Investors and regulators increasingly recognize that ESG factors are crucial for assessing a company's long-term value and risk. Mandatory reporting ensures transparency and accountability, helping to standardize data so stakeholders can make informed decisions.",
      },
      {
        question: 'How can our company get started with ESG compliance?',
        answer:
          'The best first step is to conduct a thorough assessment of your current operations. We can help you identify material ESG risks and opportunities, create a tailored plan, and establish clear metrics for reporting and compliance with relevant regulations.',
      },
    ],
  };

  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle="ESG & CSR Compliance Law"
    >
      <ServiceDetails serviceDetails={serviceDetails} />
    </Layout>
  );
}
