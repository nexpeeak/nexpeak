'use client';

import CaseThree from '@/components/common/CaseThree';
import TeamOne from '@/components/common/TeamOne';
import CtaOne from '@/components/common/CtaOne';
import Layout from '@/components/layout/Layout';

export default function Home() {
const teamMembers = [
  {
    name: 'Shivangi Nigam',
    position: 'Founder & Managing Partner',
    image: '/assets/img/team/team-v1-img1.png',
    social: [
      { url: '#', iconClass: 'icon-icon-4' },
      { url: '#', iconClass: 'icon-icon-3' },
      { url: '#', iconClass: 'icon-icon-2' },
      { url: '#', iconClass: 'icon-icon-1' },
    ],
    quote: '“Shivangi is an exceptional leader, providing unmatched expertise in corporate law.”',
  },
  {
    name: 'Adv. TUSHAR MISTRA',
    position: 'Corporate & Commercial Litigation',
    image: '/assets/img/team/team-v1-img1.png',
    social: [
      { url: '#', iconClass: 'icon-icon-4' },
      { url: '#', iconClass: 'icon-icon-3' },
      { url: '#', iconClass: 'icon-icon-2' },
      { url: '#', iconClass: 'icon-icon-1' },
    ],
    quote: '“Adv. Tushar Mistra’s expertise in corporate litigation has been instrumental in our success.”',
  },
  {
    name: 'ANU GUPTA',
    position: 'Patent Agent & IPR Strategist',
    image: '/assets/img/team/team-v1-img1.png',
    social: [
      { url: '#', iconClass: 'icon-icon-4' },
      { url: '#', iconClass: 'icon-icon-3' },
      { url: '#', iconClass: 'icon-icon-2' },
      { url: '#', iconClass: 'icon-icon-1' },
    ],
    quote: '“As a patent agent, I’ve found Nexpeak’s legal support deeply aligned with innovation protection. Their clarity in IP strategy is unmatched.”',
  },
  {
    name: 'Naunihal Yadav',
    position: 'Corporate & Commercial Litigation',
    image: '/assets/img/team/team-v1-img1.png',
    social: [
      { url: '#', iconClass: 'icon-icon-4' },
      { url: '#', iconClass: 'icon-icon-3' },
      { url: '#', iconClass: 'icon-icon-2' },
      { url: '#', iconClass: 'icon-icon-1' },
    ],
    quote: '“Naunihal\'s strategic thinking in commercial litigation is unmatched and highly effective.”',
  },
  {
    name: 'CA RAVINDER VISHNALYA',
    position: 'Taxation and Regulatory Compliances',
    image: '/assets/img/team/team-v1-img1.png',
    social: [
      { url: '#', iconClass: 'icon-icon-4' },
      { url: '#', iconClass: 'icon-icon-3' },
      { url: '#', iconClass: 'icon-icon-2' },
      { url: '#', iconClass: 'icon-icon-1' },
    ],
    quote: '“Nexpeak’s expertise in tax and compliance has streamlined our processes. Their precision and timely advice ensure we’re always on the right side of the law.”',
  },
  {
    name: 'Adv. Satyadev Prakash',
    position: 'Corporate & Commercial Litigation',
    image: '/assets/img/team/team-v1-img1.png',
    social: [
      { url: '#', iconClass: 'icon-icon-4' },
      { url: '#', iconClass: 'icon-icon-3' },
      { url: '#', iconClass: 'icon-icon-2' },
      { url: '#', iconClass: 'icon-icon-1' },
    ],
    quote: '“Adv. Satyadev Prakash has a deep understanding of corporate law, ensuring our cases are handled with precision.”',
  },
  {
    name: 'Shivangi Shukla',
    position: 'Associate',
    image: '/assets/img/team/team-v1-img1.png',
    social: [
      { url: '#', iconClass: 'icon-icon-4' },
      { url: '#', iconClass: 'icon-icon-3' },
      { url: '#', iconClass: 'icon-icon-2' },
      { url: '#', iconClass: 'icon-icon-1' },
    ],
    quote: '“Shivangi\'s passion for law and client-first approach make her an invaluable asset to the firm.”',
  },
  {
    name: 'Prubhleen Kaur',
    position: 'Corporate Lawyer',
    image: '/assets/img/team/team-v1-img1.png',
    social: [
      { url: '#', iconClass: 'icon-icon-4' },
      { url: '#', iconClass: 'icon-icon-3' },
      { url: '#', iconClass: 'icon-icon-2' },
      { url: '#', iconClass: 'icon-icon-1' },
    ],
    quote: '“Prubhleen’s corporate law expertise has been crucial in navigating complex legal matters.”',
  },
  {
    name: 'Ayushi Kasaudhan',
    position: 'Corporate Lawyer',
    image: '/assets/img/team/team-v1-img1.png',
    social: [
      { url: '#', iconClass: 'icon-icon-4' },
      { url: '#', iconClass: 'icon-icon-3' },
      { url: '#', iconClass: 'icon-icon-2' },
      { url: '#', iconClass: 'icon-icon-1' },
    ],
    quote: '“Ayushi brings a meticulous approach to corporate legal matters, always ensuring client satisfaction.”',
  },
  {
    name: 'LAKSHAY BHATT',
    position: 'Associate',
    image: '/assets/img/team/team-v1-img1.png',
    social: [
      { url: '#', iconClass: 'icon-icon-4' },
      { url: '#', iconClass: 'icon-icon-3' },
      { url: '#', iconClass: 'icon-icon-2' },
      { url: '#', iconClass: 'icon-icon-1' },
    ],
    quote: '“Lakshay’s sharp legal acumen and dedication make him a valuable asset in delivering effective legal solutions.”',
  },
  {
    name: 'SAI ABHINAV',
    position: 'Paralegal',
    image: '/assets/img/team/team-v1-img1.png',
    social: [
      { url: '#', iconClass: 'icon-icon-4' },
      { url: '#', iconClass: 'icon-icon-3' },
      { url: '#', iconClass: 'icon-icon-2' },
      { url: '#', iconClass: 'icon-icon-1' },
    ],
    quote: '“Sai’s attention to detail and dedication are unmatched in his role as a paralegal.”',
  },
  {
    name: 'Bhumika',
    position: 'Administrator',
    image: '/assets/img/team/team-v1-img1.png',
    social: [
      { url: '#', iconClass: 'icon-icon-4' },
      { url: '#', iconClass: 'icon-icon-3' },
      { url: '#', iconClass: 'icon-icon-2' },
      { url: '#', iconClass: 'icon-icon-1' },
    ],
    quote: '“Bhumika is a dedicated administrator who ensures the smooth functioning of our operations.”',
  },
];


  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Expert Lawyer">
      {/* Team Section */}
      <TeamOne
        className="team-one team-one--team"
        sectionTitle="Experienced Attorneys"
        subTitle="Meet Our Lawyers"
        teamData={teamMembers}
      />

     

      {/* CTA Section */}
      <CtaOne
        ctaTitle="Have any query, contact us!"
        queryText="Contact with us"
      />
    </Layout>
  );
}
