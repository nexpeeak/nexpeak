'use client';

import ServiceDetails from '@/components/common/ServiceDetails';
import Layout from '@/components/layout/Layout';

export default function Home() {
  const serviceDetails = {
    serviceListTitle: 'Service List',
    serviceList: [
      { name: 'Startup Advisory & Incorporation', link: '#', isActive: true },

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
        isActive: false,
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
      { text: 'Startup Legal Checklist', link: '/startup-checklist' },
      { text: "Founder's Agreement Guide", link: '/founders-guide' },
    ],
    mainImage: '/images/services/hero.jpg',
    serviceTitle: 'Startup Advisory & Incorporation',
    serviceDescription1:
      "We provide comprehensive legal support for startups, from the initial idea to full-scale operation. Our services include expert **company registration**, strategic business **structuring**, and the drafting of essential **founders' agreements**. We ensure your new venture has a solid legal foundation, protecting your vision and your assets from day one.",
    serviceDescription2:
      'Our team also offers ongoing **startup compliance support**, helping you navigate complex regulations and legal requirements. We assist with everything from initial permits to ongoing corporate governance. By handling these critical legal details, we allow you to focus on innovation and growth, confident that your business is operating legally and securely.',
    benefitTitle: 'Benefits of our services',
    benefitDescription:
      'Partnering with us from the outset gives your startup a critical advantage. We help you avoid common legal pitfalls, ensuring your business is structured for success. Our proactive approach saves you time and money by preventing future legal issues, allowing you to build your company on a foundation of legal stability and clarity.',
    benefits: [
      { icon: 'icon-icon-9', title: 'Flawless company registration' },
      { icon: 'icon-icon-10', title: 'Strategic legal structuring' },
      { icon: 'icon-icon-11', title: 'Comprehensive compliance support' },
      { icon: 'icon-icon-12', title: 'Risk-free founders agreements' },
    ],
    videoThumbnail: '/images/services/herodown.jpg',
    videoId: 'dQw4w9WgXcQ',
    justiceTitle: 'Building Your Future, Legally Secure',
    justiceText1:
      'Every great company starts with an idea, and we are here to provide the legal framework to make that idea a reality. We empower entrepreneurs by translating their vision into a legally sound business, providing peace of mind as they embark on their journey. Our support ensures your hard work is protected and poised for success.',
    justiceList: [
      'From Idea to Incorporated Reality',
      'Strategic Legal Foundation for Growth',
      'Empowering Entrepreneurs with Legal Clarity',
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
        question: 'What is the most important legal step for a new startup?',
        answer:
          'The most important step is choosing the right legal structure for your business (e.g., LLP, Private Limited Company). This decision impacts liability, taxation, and fundraising ability, and getting it right from the start is crucial for long-term success.',
      },
      {
        question: "Why do we need a Founders' Agreement?",
        answer:
          "A Founders' Agreement is essential to define the roles, responsibilities, ownership shares, and decision-making processes among the founders. It prevents future disputes and provides a clear framework for how the company will operate and handle potential disagreements.",
      },
      {
        question: 'How long does company registration typically take?',
        answer:
          'The duration of company registration varies depending on the legal structure and jurisdiction. We work to make the process as fast as possible, often completing it within a few business days once all required documents are submitted and verified.',
      },
    ],
  };

  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle="Startup Advisory & Incorporation"
    >
      <ServiceDetails serviceDetails={serviceDetails} />
    </Layout>
  );
}
