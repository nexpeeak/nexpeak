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
      { name: 'ESG & CSR Compliance Law', link: '/esg-csr', isActive: false },
      {
        name: 'Employment & Labour Law Advisory',
        link: '/labour-law',
        isActive: true,
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
      { text: 'Labour Law Compliance Checklist', link: '/labour-checklist' },
      { text: 'POSH Policy Template', link: '/posh-template' },
    ],
    mainImage: '/images/services/hero.jpg',
    serviceTitle: 'Employment & Labour Law Advisory',
    serviceDescription1:
      'We provide expert legal advisory on all matters of employment and labour law. Our services include the drafting of comprehensive **HR policies** and **employee contracts**, conducting meticulous **labour audits** to ensure compliance, and structuring **benefits packages** that are both competitive and legally sound. We help you create a secure and fair work environment.',
    serviceDescription2:
      'Our specialization in **POSH compliance** ensures your workplace is safe and respectful, with clear policies and procedures for handling harassment complaints. We assist with all regulatory filings and provide ongoing support to help you navigate complex labour laws, from wage and hour regulations to employee termination. Our goal is to mitigate legal risks and foster positive employer-employee relations.',
    benefitTitle: 'Benefits of our services',
    benefitDescription:
      'Partnering with us for your employment law needs reduces legal exposure and builds a more positive workplace culture. Our proactive approach helps you avoid costly disputes, fines, and reputational damage. We ensure your policies and practices are not only compliant but also strategic, supporting your business objectives and employee well-being.',
    benefits: [
      { icon: 'icon-icon-9', title: 'Robust legal compliance' },
      { icon: 'icon-icon-10', title: 'Custom HR policy drafting' },
      { icon: 'icon-icon-11', title: 'Risk-free labour audits' },
      { icon: 'icon-icon-12', title: 'Protected workplace environment' },
    ],
    videoThumbnail: '/images/services/herodown.jpg',
    videoId: 'dQw4w9WgXcQ',
    justiceTitle: 'Building a Stronger Workplace',
    justiceText1:
      'A legally compliant and harmonious workplace is a cornerstone of business success. We provide the legal clarity and support you need to manage your human resources with confidence and fairness. Our expertise ensures your business operates on a foundation of legal security, allowing you to attract and retain top talent.',
    justiceList: [
      'Your Partner in HR Legalities',
      'Ensuring Fair and Secure Employment',
      'Navigating Labour Laws with Confidence',
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
        question: 'What is a labour audit and why is it important?',
        answer:
          'A **labour audit** is a comprehensive review of a company’s employment practices and records to ensure they comply with all applicable labour laws and regulations. It is important to identify and rectify non-compliance issues before they result in legal action, fines, or other penalties.',
      },
      {
        question: 'What does POSH compliance entail?',
        answer:
          '**POSH** (Prevention of Sexual Harassment) compliance requires companies to establish a clear policy against sexual harassment, form an Internal Complaints Committee (ICC), and conduct regular awareness and training sessions for all employees. We assist with all these steps to ensure a safe workplace.',
      },
      {
        question:
          'Can you help with drafting different types of employee contracts?',
        answer:
          'Yes, we draft various types of employee contracts, including full-time, part-time, fixed-term, and consultancy agreements. We tailor each contract to your specific needs, ensuring it is legally sound and protects your business interests while clearly defining the terms of employment for the employee.',
      },
    ],
  };

  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle="Employment & Labour Law Advisory"
    >
      <ServiceDetails serviceDetails={serviceDetails} />
    </Layout>
  );
}
