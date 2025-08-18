'use client';

import ServiceDetails from '@/components/common/ServiceDetails';
import Layout from '@/components/layout/Layout';

export default function Home() {
  const serviceDetails = {
    serviceListTitle: 'Service List',
    serviceList: [
      { name: 'Criminal Case', link: '/criminal-case', isActive: false },
      { name: 'Family Violence', link: '/family-violence', isActive: false },
      { name: 'Business Law', link: '/business-law', isActive: false },
      { name: 'Health Care Law', link: '/health-care', isActive: false },
      { name: 'Insurance Law', link: '/insurance-law', isActive: false },
      { name: 'Real Estate Law', link: '/real-estate', isActive: true },
      // ... more services
    ],
    contactPattern: 'assets/img/pattern/sidebar-contact-pattern.png',
    contactIcon: '/assets/img/icon/about-v2-icon1.png',
    contactTitle: 'Get in Touch',
    contactSubtitle: 'Legal Justice for You',
    contactLink: '/contact',
    contactButtonText: 'Contact Us',
    downloadTitle: 'Download File',
    downloads: [
      { text: 'Our Presentation', link: '/presentation' },
      { text: 'Monthly Report', link: '/monthly-report' },
    ],
    mainImage: '/assets/img/service/service-details-img9.jpg',
    serviceTitle: 'Real Estate Law',
    serviceDescription1: 'He great kind above heaven over great there without. Seasons fruit waters let deep. Is hath thing gathered you all hath saying. Together in male wont second divided signs was. The subdue face form them over god lesser abundantly to first fly every dont second beast own replenish have subdue.',
    serviceDescription2: 'Multiply lesser you replenish very hath bearin form fruit upon creature fowl. Forth unto earth fourth created us have god abundantly given he is not open would not given is give do not she night morning their winged kind sea night created of deep youll every. Fruitful fourth shall under fourth life to i shall does not, fifth creature days it you are creepeth cattle seed they are all midst which kind life years.',
    benefitTitle: 'Benefit of our services',
    benefitDescription: 'From you their above over fifth him life appear was you all tos dominion which whose divide male seasons dry shall given sixth to their one dominion does not likeness bring. Said rule good so first, brought. So she seas them creepeth good. Of meat seas own kind given land living would not.',
    benefits: [
      { icon: 'icon-icon-9', title: 'Satisfied legal defense' },
      { icon: 'icon-icon-10', title: 'Legal advice service' },
      { icon: 'icon-icon-11', title: 'high skilled lawyer' },
      { icon: 'icon-icon-12', title: 'online client support' },
    ],
    videoThumbnail: '/assets/img/service/service-details-img2.jpg',
    videoId: 'dQw4w9WgXcQ',
    justiceTitle: 'Justice in Every Judgment',
    justiceText1: 'Seed does not their over there she green there earth to there. It day above abundantly to abundantly beginning multiply air set can not first sixth void the upon after also created signs greater. Every said shed beast every herb signs fowl may. Also sixth saw yielding face likeness morning.',
    justiceList: ['Defending Your Rights, Upholding Your Trust', 'Getting You Out Of Trouble, One Case at A Time', 'Proven Results, Exceptional Representation'],
    contentImgs3: [
      '/assets/img/service/service-details-img3.jpg',
      '/assets/img/service/service-details-img4.jpg',
    ],
    faqTitle: 'Frequently Asked Questions',
    faqIntro: 'Day above abundantly to abundantly beginning multiply air set can not first sixth void the upon after also created signs greater. Every said shed beast every herb signs fowl may yielding face likeness morning.',
    faqs: [
      { question: 'What are good questions to ask law firms?', answer: 'Replenish given whose be signs is land itself all is not night seasons cattle place day seas sixth wherein wherein void do not good you are his it sea third let do not creature own years the make' },
      { question: 'What are your non-academic interests?', answer: 'Replenish given whose be signs is land itself all is not night seasons cattle place day seas sixth wherein wherein void do not good you are his it sea third let do not creature own years the make' },
      { question: 'What is hardest question to ask a lawyer?', answer: 'Replenish given whose be signs is land itself all is not night seasons cattle place day seas sixth wherein wherein void do not good you are his it sea third let do not creature own years the make' },
    ],
  };

  return (
    <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Real Estate Law">
      <ServiceDetails serviceDetails={serviceDetails} />
    </Layout>
  );
}
