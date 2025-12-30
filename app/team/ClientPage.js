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
    name: 'Adv. Tushar Mistra',
    position: 'Corporate & Commercial Litigation',
    image: '/images/team/tushar-mistra.jpg',
    quote: 'Expert in corporate litigation with proven courtroom excellence.',
  },
  {
    name: 'Anu Gupta',
    position: 'Patent Agent & IPR Strategist',
    image: '/images/team/anu-gupta.jpeg',
    quote: 'Specialist in protecting innovation through strategic IP solutions.',
  },
  {
    name: 'Naunihal Yadav',
    position: 'Corporate & Commercial Litigation',
    image: '/images/team/naunihal.jpeg',
    quote: 'Strategic thinker delivering strong litigation outcomes.',
  },
  {
    name: 'CA Ravinder Vishnalya',
    position: 'Taxation & Regulatory Compliance',
    image: '/images/team/ravinder.jpeg',
    quote: 'Ensuring compliant and optimized tax structures.',
  },
  {
    name: 'Adv. Satyadev Prakash',
    position: 'Corporate & Commercial Litigation',
    image: '/images/team/sathyadev.jpeg',
    quote: 'Precision-driven legal execution in complex cases.',
  },
  {
    name: 'Shivangi Shukla',
    position: 'Associate',
    image: '/images/team/shivangi-shukla.jpeg',
    quote: 'Dedicated associate delivering legal clarity.',
  },
  {
    name: 'Prubhleen Kaur',
    position: 'Corporate Lawyer',
    image: '/images/team/prubhleen.jpeg',
    quote: 'Corporate law specialist navigating complex regulations.',
  },
  {
    name: 'Ayushi Kasaudhan',
    position: 'Corporate Lawyer',
    image: '/images/team/ayushi.jpeg',
    quote: 'Meticulous and detail-oriented legal professional.',
  },
  {
    name: 'Lakshay Bhatt',
    position: 'Associate',
    image: '/images/team/lakshay.jpg',
    quote: 'Sharp legal acumen supporting effective outcomes.',
  },
  {
    name: 'Sai Abhinav',
    position: 'Paralegal',
    image: '/images/team/abhinav.jpeg',
    quote: 'Detail-driven legal research and documentation expert.',
  },
  {
    name: 'Bhumika',
    position: 'Administrator',
    image: '/images/team/bhumika.jpeg',
    quote: 'Ensures smooth operational efficiency.',
  },
];

export default function ClientPage() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our Legal Team">
      <section className="team-section">
        <div className="container-fluid px-md-5">
          <div className="text-center mb-5">
            <span className="subheading">Our Attorneys</span>
            <h1>Our Legal Professionals</h1>
          </div>

          <div className="row">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-lg-3 col-sm-6 mb-4">
                <div className="team-card">
                  <div
                    className="front"
                    style={{ backgroundImage: `url(${member.image})` }}
                  >
                    <div className="overlay" />
                    <div className="content-box">
                      <h3>{member.name}</h3>
                      <p>{member.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaOne
        ctaTitle="Have any query? Contact us!"
        queryText="Contact with us"
      />

      <style jsx>{`
        .team-section {
          padding: 80px 0;
          background: #ffffff;
        }
        .subheading {
          color: #008bbf;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        h1 {
          color: #042748;
          font-size: 42px;
          font-weight: 700;
        }
        .team-card {
          height: 380px;
          background-size: cover;
          background-position: center;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.12);
        }
        .front {
          height: 100%;
          display: flex;
          align-items: flex-end;
          position: relative;
        }
        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,.7), transparent);
        }
        .content-box {
          position: relative;
          z-index: 2;
          padding: 24px;
          color: #fff;
          text-align: center;
          width: 100%;
        }
        .content-box h3 {
          margin-bottom: 6px;
          font-size: 20px;
        }
        .content-box p {
          font-size: 14px;
          opacity: 0.9;
        }
      `}</style>
    </Layout>
  );
}
