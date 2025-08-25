'use client'; // Ensure the component runs on the client side

import React from 'react'; // Import React
import Link from 'next/link';
import CountUp from 'react-countup';
import { useState } from 'react';

export default function About() {
  // State for dynamic data (e.g., dynamic images, text, links, counters)
  const [aboutContent, setAboutContent] = useState({
    sectionTitleIcon: '/assets/img/icon/sec-title-img1.png',
    sectionTitleText: 'welcome to Nexpeak',
    sectionMainTitle: 'Your Rights. Your Business. Our Relentless Commitment.',
    aboutText:
      "At Nexpeak, we know legal challenges can feel overwhelming. That’s why we don’t just represent you—we partner with you. By listening closely and understanding your unique circumstances, we deliver clear, practical, and compassionate guidance. Our mission is simple: to protect your interests, empower your decisions, and secure the strongest possible outcome for your future.",
    learnMoreLink: '/about',
    signatureImage: '/assets/img/about/signature1.png',
    ceoName: 'Hector Scudder, CEO',
    aboutImage: '/images/home/about.jpg',
    counters: [
      {
        icon: 'icon-icon-13',
        count: 1500,
        suffix: '+',
        title: 'Clients Serverd',
      },
      {
        icon: 'icon-icon-14',
        count: 99,
        suffix: '%',
        title: 'Compliance Success',
      },
      {
        icon: 'icon-icon-15',
        count: 40,
        suffix: '+',
        title: 'Industries Covered',
      },
    ],
  });

  return (
    <>
      {/* Start About One */}
      <section className="about-one">
        <div className="container">
          <div className="row">
            {/* Start About One Content */}
            <div
              className="col-xl-5 wow fadeInLeft"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="about-one__content">
                <div className="sec-title">
                  <div className="sub-title">
                    <div className="icon">
                      <img src={aboutContent.sectionTitleIcon} alt="" />
                    </div>
                    <div className="text">
                      <p>{aboutContent.sectionTitleText}</p>
                    </div>
                  </div>
                  <h2>
                    {aboutContent.sectionMainTitle
                      .split(' ')
                      .map((word, index) => (
                        <React.Fragment key={index}>
                          {index === 2 ? <br /> : ''} {word}
                        </React.Fragment>
                      ))}
                  </h2>
                </div>
                <div className="about-one__content-text">
                  <p>{aboutContent.aboutText}</p>
                </div>
                <div className="about-one__content-bottom">
                  <div className="btn-box">
                    <Link className="thm-btn" href={aboutContent.learnMoreLink}>
                      Learn More
                      <span className="thm-btn__icon">
                        <i className="icon-icon-8"></i>
                      </span>
                      <span className="thm-btn__hover-group">
                        <span className="thm-btn__hover thm-btn__hover--1"></span>
                        <span className="thm-btn__hover thm-btn__hover--2"></span>
                        <span className="thm-btn__hover thm-btn__hover--3"></span>
                        <span className="thm-btn__hover thm-btn__hover--4"></span>
                      </span>
                    </Link>
                  </div>
               {/*    <div className="content-box">
                    <div className="signature">
                      <img src={aboutContent.signatureImage} alt="Signature" />
                    </div>
                    <p>{aboutContent.ceoName}</p>
                  </div> */}
                </div>
              </div>
            </div>
            {/* End About One Content */}

            {/* Start About One Img */}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight"
              data-wow-delay="100ms"
              data-wow-duration="1500ms"
            >
              <div className="about-one__img">
                <img src={aboutContent.aboutImage} alt="About Image" />
              </div>
            </div>
            {/* End About One Img */}

            {/* Start About One Counter */}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="about-one__counter">
                {aboutContent.counters.map((counter, index) => (
                  <div
                    className={`counter-one__single ${
                      index === 2 ? 'style2' : ''
                    }`}
                    key={index}
                  >
                    <div className="icon-box">
                      <span className={counter.icon}></span>
                    </div>
                    <div className="text-box">
                      <h2 className="count">
                        <CountUp end={counter.count} />{' '}
                        <span className="suffix">{counter.suffix}</span>
                      </h2>
                      <p>{counter.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* End About One Counter */}
          </div>
        </div>
      </section>
      {/* End About One */}
    </>
  );
}
