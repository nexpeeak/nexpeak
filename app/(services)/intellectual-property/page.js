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
        isActive: true,
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
      { text: 'IP Protection Guide', link: '/ip-guide' },
      { text: 'Trademark & Copyright FAQ', link: '/ip-faq' },
    ],
    mainImage: '/assets/img/service/services-v2-img3.jpg',
    serviceTitle: 'Intellectual Property & Brand Protection',
    serviceDescription1:
      'Your intellectual property is your business’s most valuable asset. We provide comprehensive legal services for **trademark, patent, and copyright registration**, ensuring your unique creations are legally secured from the very beginning. We also conduct thorough **IP due diligence** to protect you during mergers, acquisitions, and partnerships, identifying potential risks and opportunities.',
    serviceDescription2:
      'We are your dedicated partners in **infringement protection**. Our team monitors the market to identify unauthorized use of your IP and takes swift legal action to enforce your rights. Whether through cease-and-desist letters or litigation, we are committed to defending your innovations and brand against piracy and misuse, preserving your competitive advantage and market share.',
    benefitTitle: 'Benefits of our services',
    benefitDescription:
      'Securing your intellectual property is crucial for long-term business success. Our services provide a legal shield for your innovations, ensuring you have exclusive rights to your creations. We help you build a strong brand, deter competitors from imitation, and create new revenue streams through licensing, all while mitigating the risk of costly legal disputes.',
    benefits: [
      { icon: 'icon-icon-9', title: 'Comprehensive IP registration' },
      { icon: 'icon-icon-10', title: 'Strategic infringement defense' },
      { icon: 'icon-icon-11', title: 'Proactive brand monitoring' },
      { icon: 'icon-icon-12', title: 'Valuation and licensing support' },
    ],
    videoThumbnail: '/assets/img/service/service-details-img2.jpg',
    videoId: 'dQw4w9WgXcQ',
    justiceTitle: 'Innovate, We Protect',
    justiceText1:
      'Your creativity and innovation are what set you apart. We handle the legal complexities of intellectual property so you can focus on what you do best—creating. Our expertise ensures that your intellectual assets are not only protected but also strategically managed to maximize their value and support your business’s growth. We turn your ideas into protected assets.',
    justiceList: [
      'Defending Your Creative Rights',
      'From Idea to Protected Asset',
      'Securing Your Brand’s Future',
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
        question: 'What is the difference between a trademark and a copyright?',
        answer:
          'A **trademark** protects names, logos, and slogans used to identify and distinguish goods or services in the marketplace. A **copyright** protects original works of authorship, such as literary, dramatic, musical, or artistic works, including software code.',
      },
      {
        question: 'How do you handle IP infringement cases?',
        answer:
          'We begin with a thorough investigation to confirm the infringement. We then typically send a cease-and-desist letter to the infringing party. If they do not comply, we can escalate the matter through formal mediation, arbitration, or, if necessary, litigation to seek damages and an injunction.',
      },
      {
        question: 'Why is IP due diligence important during an M&A?',
        answer:
          'IP due diligence is crucial to identify and value a company’s intellectual property assets and to uncover any hidden liabilities, such as infringement claims or ownership disputes. It ensures you know exactly what you are acquiring and helps in negotiating a fair purchase price.',
      },
    ],
  };

  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle="Intellectual Property & Brand Protection"
    >
      <ServiceDetails serviceDetails={serviceDetails} />
    </Layout>
  );
}
