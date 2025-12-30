'use client';

import React from 'react';
import Layout from '@/components/layout/Layout';
import CtaOne from '@/components/common/CtaOne';

const teamMembers = [
  {
    name: 'Shivangi',
    position: 'Founder & Managing Partner',
    image: '/images/team/shivangi.jpeg',
    quote: 'Shivangi is an exceptional leader, providing unmatched expertise in corporate law.',
  },
  {
    name: 'Adv. TUSHAR MISTRA',
    position: 'Corporate & Commercial Litigation',
    image: '/images/team/tushar-mistra.jpg',
    quote: "Adv. Tushar Mistra's expertise in corporate litigation has been instrumental in our success.",
  },
  {
    name: 'ANU GUPTA',
    position: 'Patent Agent & IPR strategist',
    image: '/images/team/anu-gupta.jpeg',
    quote: "As a patent agent, I've found Nexpeak's legal support deeply aligned with innovation protection.",
  },
  {
    name: 'Naunihal Yadav',
    position: 'Corporate & Commercial Litigation',
    image: '/images/team/naunihal.jpeg',
    quote: "Naunihal's strategic thinking in commercial litigation is unmatched and highly effective.",
  },
  {
    name: 'CA RAVINDER VISHNALYA',
    position: 'Taxation and Regulatory Compliances',
    image: '/images/team/ravinder.jpeg',
    quote: "Nexpeak's expertise in tax and compliance ensures we're always on the right side of the law.",
  },
  {
    name: 'Adv. Satyadev Prakash',
    position: 'Corporate & Commercial Litigation',
    image: '/images/team/sathyadev.jpeg',
    quote: 'Adv. Satyadev Prakash handles corporate law cases with unmatched precision.',
  },
  {
    name: 'Shivangi Shukla',
    position: 'Associate',
    image: '/images/team/shivangi-shukla.jpeg',
    quote: "Shivangi's passion for law makes her an invaluable asset to the firm.",
  },
  {
    name: 'Prubhleen Kaur',
    position: 'Corporate Lawyer',
    image: '/images/team/prubhleen.jpeg',
    quote: "Prubhleen's corporate law expertise is crucial in navigating complex legal matters.",
  },
  {
    name: 'Ayushi Kasaudhan',
    position: 'Corporate Lawyer',
    image: '/images/team/ayushi.jpeg',
    quote: 'Ayushi brings a meticulous approach to every corporate legal challenge.',
  },
  {
    name: 'LAKSHAY BHATT',
    position: 'Associate',
    image: '/images/team/lakshay.jpg',
    quote: "Lakshay's sharp legal acumen is vital in delivering effective legal solutions.",
  },
  {
    name: 'SAI ABHINAV',
    position: 'Paralegal',
    image: '/images/team/abhinav.jpeg',
    quote: "Sai's attention to detail and dedication are unmatched in his role.",
  },
  {
    name: 'Bhumika',
    position: 'Administrator',
    image: '/images/team/bhumika.jpeg',
    quote: "Bhumika's organizational efficiency ensures the smooth running of the office.",
  },
];

export default function ClientPage() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Expert Lawyer">
        <section className="team-section">
          <div className="container-fluid px-md-5">
            <div className="pb-3 mb-5 row justify-content-center">
              <div className="text-center col-md-7">
                <span className="subheading">Our Attorney</span>
                <h2 className="mb-4">Our Legal Attorneys</h2>
              </div>
            </div>
            <div className="row">
              {teamMembers.map((member, index) => (
                <div key={index} className="mb-4 col-lg-3 col-sm-6">
                  <div className="team-card">
                    <div className="flipper">
                      <div
                        className="front"
                        style={{ backgroundImage: `url('${member.image}')` }}
                      >
                        <div className="overlay"></div>
                        <div className="content-box">
                          <h3>{member.name}</h3>
                          <p>{member.position}</p>
                        </div>
                      </div>
                      <div className="back">
                        <div className="back-content">
                          <blockquote>
                            <p>&ldquo;{member.quote}&rdquo;</p>
                          </blockquote>
                          <div className="author-info d-flex">
                            <div className="author-image">
                              <img src={member.image} alt={member.name} />
                            </div>
                            <div className="author-details">
                              <div className="name">{member.name}</div>
                              <span className="position">{member.position}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaOne
          ctaTitle="Have any query, contact us!"
          queryText="Contact with us"
        />
      </Layout>

      <style jsx>{`
        .team-section { padding: 80px 0; background: #ffffff; }
        .subheading { color: #008bbf; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; display: inline-block; margin-bottom: 15px; }
        .team-section h2 { color: #042748; font-size: 42px; font-weight: 700; line-height: 1.2; margin-bottom: 0; }
        .team-card { position: relative; height: 400px; perspective: 1000px; margin-bottom: 30px; }
        .flipper { position: relative; width: 100%; height: 100%; transition: 0.6s; transform-style: preserve-3d; cursor: pointer; }
        .team-card:hover .flipper { transform: rotateY(180deg); }
        .front, .back { position: absolute; top: 0; left: 0; width: 100%; height: 100%; backface-visibility: hidden; border-radius: 15px; overflow: hidden; box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1); }
        .front { background-size: cover; background-position: center top; display: flex; align-items: flex-end; z-index: 2; transform: rotateY(0deg); }
        .overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(0,0,0,0.7) 100%); opacity: 0.8; }
        .content-box { position: relative; z-index: 3; padding: 30px 25px; text-align: center; width: 100%; }
        .content-box h3 { color: #fff; font-size: 20px; font-weight: 600; margin-bottom: 8px; }
        .content-box p { color: #fff; font-size: 14px; margin: 0; opacity: 0.9; }
        .back { background: #f9f6f1; transform: rotateY(180deg); display: flex; align-items: center; justify-content: center; padding: 30px 25px; }
        .back-content { text-align: center; height: 100%; display: flex; flex-direction: column; justify-content: space-between; }
        .back-content blockquote p { color: #5a5d60; font-size: 16px; line-height: 1.6; font-style: italic; margin: 0; }
        .author-info { margin-top: 30px; align-items: center; justify-content: center; gap: 15px; }
        .author-image { width: 60px; height: 60px; border-radius: 50%; overflow: hidden; border: 3px solid #008bbf; }
        .author-image img { width: 100%; height: 100%; object-fit: cover; }
        .author-details { text-align: left; }
        .author-details .name { color: #042748; font-size: 16px; font-weight: 600; }
        .author-details .position { color: #008bbf; font-size: 13px; }
        @media (max-width: 768px) { .team-section h2 { font-size: 32px; } .team-card { height: 350px; } }
      `}</style>
    </>
  );
}