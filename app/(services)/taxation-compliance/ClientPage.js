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
      { name: 'Taxation & Financial Compliance', link: '/taxation-compliance', isActive: true },
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
      { text: 'Tax Compliance Checklist', link: '/tax-checklist' },
      { text: 'Financial Regulations Guide', link: '/financial-guide' },
    ],
    mainImage: '/images/services/hero.jpg',
    serviceTitle: 'Taxation & Financial Compliance',
    serviceDescription1:
      'Our firm offers comprehensive legal support for all your **taxation and financial compliance** needs. We provide expert guidance on **GST, TDS, and corporate tax**, ensuring your business remains fully compliant with all fiscal regulations. Our services also extend to **payroll compliance**, meticulously handling all tax deductions and filings to avoid penalties.',
    serviceDescription2:
      'We specialize in navigating complex financial landscapes, including **transfer pricing** and managing **ESIC/EPF services**. Our proactive approach helps you plan for tax obligations and structure your finances efficiently. We work to minimize your tax liabilities while ensuring complete adherence to the law, providing a strong financial foundation for your business.',
    benefitTitle: 'Benefits of our services',
    benefitDescription:
      'Our services provide clarity and security in a complex financial world. By entrusting us with your taxation and financial compliance, you reduce the risk of audits, fines, and legal challenges. We help you streamline your financial operations, freeing up your time and resources to focus on business growth.',
    benefits: [
      { icon: 'icon-icon-9', title: 'Seamless GST and TDS filings' },
      { icon: 'icon-icon-10', title: 'Strategic tax planning' },
      { icon: 'icon-icon-11', title: 'Meticulous payroll compliance' },
      { icon: 'icon-icon-12', title: 'Risk-free financial operations' },
    ],
    videoThumbnail: '/images/services/herodown.jpg',
    videoId: 'dQw4w9WgXcQ',
    justiceTitle: 'Financial Integrity in Every Transaction',
    justiceText1:
      'Financial integrity is the cornerstone of a reputable business. We are dedicated to ensuring every transaction and financial process in your company is legally sound and transparent. Our expertise provides the confidence you need to manage your finances effectively and ethically, building trust with stakeholders and regulators alike.',
    justiceList: [
      'Your Trusted Financial Legal Partner',
      'Navigating Tax Laws with Precision',
      'Securing Your Financial Future',
    ],
    contentImgs3: [
      '/images/services/services-1.jpg',
      '/images/services/services-2.jpg',
    ],
    faqTitle: 'Frequently Asked Questions',
    faqIntro:
      'Common inquiries regarding fiscal laws, tax filing procedures, and financial regulatory standards.',
    faqs: [
      {
        question: 'What is the role of a legal firm in taxation?',
        answer:
          'We ensure your business complies with all tax laws. This includes filing returns, managing tax disputes, and providing strategic advice on how to structure transactions to be tax-efficient and legally sound.',
      },
      {
        question: 'How do you handle GST compliance?',
        answer:
          'We assist with GST registration, filing monthly, quarterly, and annual returns, and providing legal opinions on GST-related matters to ensure your processes are fully compliant.',
      },
      {
        question: 'Why is transfer pricing so complex?',
        answer:
          'Transfer pricing involves setting prices for transactions between related companies across jurisdictions. High regulatory scrutiny requires meticulous documentation to avoid disputes with tax authorities.',
      },
    ],
  };

  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle="Taxation & Financial Compliance"
    >
      <ServiceDetails serviceDetails={serviceDetails} />
    </Layout>
  );
}