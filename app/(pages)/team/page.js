'use client';
import React from 'react';
import Layout from '@/components/layout/Layout';
import CtaOne from '@/components/common/CtaOne';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Shivangi Nigam',
      position: 'Founder & Managing Partner',
      image: '/images/team/shivangi.jpeg',
      quote:
        'Shivangi is an exceptional leader, providing unmatched expertise in corporate law.',
    },
    {
      name: 'Adv. TUSHAR MISTRA',
      position: 'Corporate & Commercial Litigation',
      image: '/images/team/tushar-mistra.jpg',
      quote:
        "Adv. Tushar Mistra's expertise in corporate litigation has been instrumental in our success.",
    },
    {
      name: 'ANU GUPTA',
      position: 'Patent Agent & IPR strategist',
      image: '/images/team/anu-gupta.jpeg',
      quote:
        "As a patent agent, I've found Nexpeak's legal support deeply aligned with innovation protection. Their clarity in IP strategy is unmatched.",
    },
    {
      name: 'Naunihal Yadav',
      position: 'Corporate & Commercial Litigation',
      image: '/images/team/naunihal.jpeg',
      quote:
        "Naunihal's strategic thinking in commercial litigation is unmatched and highly effective.",
    },
    {
      name: 'CA RAVINDER VISHNALYA',
      position: 'Taxation and Regulatory Compliances',
      image: '/images/team/ravinder.jpeg',
      quote:
        "Nexpeak's expertise in tax and compliance has streamlined our processes. Their precision and timely advice ensure we're always on the right side of the law.",
    },
    {
      name: 'Adv. Satyadev Prakash',
      position: 'Corporate & Commercial Litigation',
      image: '/images/team/sathyadev.jpeg',
      quote:
        'Adv. Satyadev Prakash has a deep understanding of corporate law, ensuring our cases are handled with precision.',
    },
    {
      name: 'Shivangi Shukla',
      position: 'Associate',
      image: '/images/team/shivangi-shukla.jpeg',
      quote:
        "Shivangi's passion for law and client-first approach make her an invaluable asset to the firm.",
    },
    {
      name: 'Prubhleen Kaur',
      position: 'Corporate Lawyer',
      image: '/images/team/prubhleen.jpeg',
      quote:
        "Prubhleen's corporate law expertise has been crucial in navigating complex legal matters.",
    },
    {
      name: 'Ayushi Kasaudhan',
      position: 'Corporate Lawyer',
      image: '/images/team/ayushi.jpeg',
      quote:
        'Ayushi brings a meticulous approach to corporate legal matters, always ensuring client satisfaction.',
    },
    {
      name: 'LAKSHAY BHATT',
      position: 'Associate',
      image: '/images/team/lakshay.jpg',
      quote:
        "Lakshay's sharp legal acumen and dedication make him a valuable asset in delivering effective legal solutions.",
    },
    {
      name: 'SAI ABHINAV',
      position: 'Paralegal',
      image: '/images/team/abhinav.jpeg',
      quote:
        "Sai's attention to detail and dedication are unmatched in his role as a paralegal.",
    },
    {
      name: 'Bhumika',
      position: 'Administrator',
      image: '/images/team/bhumika.jpeg',
      quote:
        "Bhumika's organizational skills and efficiency ensure the smooth running of the office.",
    },
  ];

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
                        style={{
                          backgroundImage: `url('${member.image}')`,
                        }}
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
                              <span className="position">
                                {member.position}
                              </span>
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
        :root {
          --thm-primary: #008bbf;
          --thm-white: #ffffff;
          --thm-gray-bg: #f9f6f1;
          --thm-black: #042748;
          --thm-gray: #5a5d60;
        }

        .team-section {
          padding: 80px 0;
          background: var(--thm-white);
        }

        .subheading {
          color: var(--thm-primary);
          font-size: 16px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          display: inline-block;
          margin-bottom: 15px;
        }

        .team-section h2 {
          color: var(--thm-black);
          font-size: 42px;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 0;
        }

        .team-card {
          position: relative;
          height: 400px;
          perspective: 1000px;
          margin-bottom: 30px;
        }

        .flipper {
          position: relative;
          width: 100%;
          height: 100%;
          transition: 0.6s;
          transform-style: preserve-3d;
          cursor: pointer;
        }

        .team-card:hover .flipper {
          transform: rotateY(180deg);
        }

        .front,
        .back {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .front {
          background-size: cover;
          background-position: center top;
          background-repeat: no-repeat;
          display: flex;
          align-items: flex-end;
          z-index: 2;
          transform: rotateY(0deg);
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.1) 40%,
            rgba(0, 0, 0, 0.7) 100%
          );
          opacity: 0.8;
        }

        .content-box {
          position: relative;
          z-index: 3;
          padding: 30px 25px;
          text-align: center;
          width: 100%;
        }

        .content-box h3 {
          color: var(--thm-white);
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 8px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .content-box p {
          color: var(--thm-white);
          font-size: 14px;
          font-weight: 400;
          margin: 0;
          opacity: 0.9;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        .back {
          background: var(--thm-gray-bg);
          transform: rotateY(180deg);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px 25px;
        }

        .back-content {
          text-align: center;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .back-content blockquote {
          flex-grow: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0;
          padding: 0;
        }

        .back-content blockquote p {
          color: var(--thm-gray);
          font-size: 16px;
          line-height: 1.6;
          font-style: italic;
          margin: 0;
          text-align: center;
        }

        .author-info {
          margin-top: 30px;
          align-items: center;
          justify-content: center;
          gap: 15px;
        }

        .author-image {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
          border: 3px solid var(--thm-primary);
        }

        .author-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }

        .author-details {
          text-align: left;
          flex-grow: 1;
        }

        .author-details .name {
          color: var(--thm-black);
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 4px;
          line-height: 1.2;
        }

        .author-details .position {
          color: var(--thm-primary);
          font-size: 13px;
          font-weight: 500;
          line-height: 1.3;
        }

        @media (max-width: 992px) {
          .team-section h2 {
            font-size: 32px;
          }

          .team-card {
            height: 380px;
          }

          .content-box {
            padding: 25px 20px;
          }

          .content-box h3 {
            font-size: 18px;
          }

          .back-content blockquote p {
            font-size: 14px;
          }

          .front {
            background-position: center 20%;
          }
        }

        @media (max-width: 768px) {
          .team-section {
            padding: 60px 0;
          }

          .team-card {
            height: 380px;
          }

          .content-box h3 {
            font-size: 19px;
          }

          .content-box p {
            font-size: 14px;
          }

          .back-content {
            padding: 20px;
          }

          .back-content blockquote p {
            font-size: 15px;
          }

          .author-image {
            width: 55px;
            height: 55px;
          }

          .author-details .name {
            font-size: 15px;
          }

          .author-details .position {
            font-size: 13px;
          }

          .front {
            background-position: center 15%;
          }
        }

        @media (max-width: 576px) {
          .col-sm-6 {
            margin-bottom: 20px;
          }

          .team-card {
            height: 360px;
          }

          .content-box {
            padding: 22px 18px;
          }

          .content-box h3 {
            font-size: 24px;
            margin-bottom: 8px;
          }

          .content-box p {
            font-size: 18px;
            line-height: 1.4;
          }

          .front {
            background-position: center 10%;
          }

          .back-content {
            padding: 18px;
          }

          .back-content blockquote p {
            font-size: 18px;
            line-height: 1.5;
          }

          .author-info {
            margin-top: 20px;
            gap: 12px;
          }

          .author-image {
            width: 50px;
            height: 50px;
          }

          .author-details .name {
            font-size: 18px;
          }

          .author-details .position {
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .team-card {
            height: 340px;
          }

          .content-box {
            padding: 20px 16px;
          }

          .content-box h3 {
            font-size: 21px;
          }

          .content-box p {
            font-size: 18px;
          }

          .front {
            background-position: center 5%;
          }

          .back-content blockquote p {
            font-size: 18px;
          }
        }
      `}</style>
    </>
  );
};

export default TeamSection;
