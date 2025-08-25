'use client'; // Ensure the component runs on the client side

import Link from 'next/link';
import { useState } from 'react';

export default function ChooseOne() {
  const [chooseContent, setChooseContent] = useState({
    shapeImage: '/assets/img/shape/why-choose-v1-shape1.png',
    chooseImage: '/images/home/why.jpg',
    sectionTitleIcon: '/assets/img/icon/sec-title-img1.png',
    sectionTitleText: 'why choose nexpeak',
    sectionMainTitle: 'turning challenges into opportunities',
    chooseText:
      'We believe the right legal partner doesn’t just solve problems—it unlocks possibilities. At Nexpeak, we combine expertise, innovation, and accessibility to give your business a competitive edge.',
    features: [
      'Clarity Over Complexity – straightforward advice you can act on immediately',
      'Future-Ready Approach – strategies built for growth, innovation, and scale',
      'Always Within Reach – seamless online support and subscription plans',
      'Global & Local Insight – experience spanning 40+ industries and international markets',
    ],
    buttonText: 'let’s work',
    buttonLink: '#',
  });

  return (
    <>
      {/* Start Why Choose One */}
      <section className="why-choose-one">
        <div className="container">
          <div className="why-choose-one__inner">
            <div className="shape1">
              <img src={chooseContent.shapeImage} alt="Shape" />
            </div>
            <div className="row">
              {/* Start Why Choose One Img */}
              <div
                className="col-xl-6 wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="why-choose-one__img">
                  <div className="inner">
                    <img src={chooseContent.chooseImage} alt="Choose Image" />
                  </div>
                </div>
              </div>
              {/* End Why Choose One Img */}

              {/* Start Why Choose One Content */}
              <div
                className="col-xl-6 wow fadeInRight"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="why-choose-one__content">
                  <div className="sec-title">
                    <div className="sub-title">
                      <div className="icon">
                        <img
                          src={chooseContent.sectionTitleIcon}
                          alt="Section Icon"
                        />
                      </div>
                      <div className="text">
                        <p>{chooseContent.sectionTitleText}</p>
                      </div>
                    </div>
                    <h2>{chooseContent.sectionMainTitle}</h2>
                  </div>
                  <div className="why-choose-one__content-text">
                    <p>{chooseContent.chooseText}</p>
                  </div>
                  <div className="why-choose-one__content-bottom">
                    <div className="why-choose-one__features">
                      {chooseContent.features.map((feature, index) => (
                        <div
                          className="why-choose-one__feature-item"
                          key={index}
                        >
                          <span className="icon-icon-16"></span>
                          <p>{feature}</p>
                        </div>
                      ))}
                    </div>

                    <div className="btn-box">
                      <Link className="thm-btn" href={chooseContent.buttonLink}>
                        {chooseContent.buttonText}
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
                  </div>
                </div>
              </div>
              {/* End Why Choose One Content */}
            </div>
          </div>
        </div>
      </section>
      {/* End Why Choose One */}

      <style jsx>{`
        .why-choose-one {
          position: relative;
          display: block;
          padding: 0px 0px 120px;
        }
        .why-choose-one .row {
          align-items: center;
        }
        .why-choose-one__inner {
          position: relative;
          display: block;
          background: var(--thm-gray-bg);
          padding: 40px 40px 40px;
          overflow: hidden;
          z-index: 1;
        }
        .why-choose-one__inner .shape1 {
          position: absolute;
          bottom: 0;
          right: 0;
          z-index: -1;
        }
        .why-choose-one__img {
          position: relative;
          display: block;
        }
        .why-choose-one__img .inner {
          position: relative;
          display: block;
          overflow: hidden;
        }
        .why-choose-one__img .inner img {
          width: 100%;
        }
        .why-choose-one__content {
          position: relative;
          display: block;
          margin-left: 40px;
          max-width: 510px;
          width: 100%;
        }
        .why-choose-one__content .sec-title {
          padding-bottom: 29px;
        }
        .why-choose-one__content-text {
          position: relative;
          display: block;
        }
        .why-choose-one__content-text p {
          margin: 0;
        }
        .why-choose-one__content-bottom {
          position: relative;
          display: block;
          margin-top: 35px;
        }
        .why-choose-one__features {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 20px;
        }
  .why-choose-one__feature-item {
  display: flex;
  align-items: center; /* instead of flex-start */
  gap: 12px; /* reduce gap slightly for better alignment */
}

        .why-choose-one__feature-item .icon-icon-16 {
  color: var(--thm-primary);
  font-size: 20px; /* slightly larger for balance */
  line-height: 1; /* keeps it vertically centered */
  flex-shrink: 0;
}
    .why-choose-one__feature-item p {
  margin: 0;
  font-size: 18px;
  line-height: 1.5;
  color: var(--thm-black);
}
        .why-choose-one__content-bottom .btn-box {
          position: relative;
          display: block;
          margin-top: 41px;
        }
        .why-choose-one.style3 {
          position: relative;
          display: block;
          background: var(--thm-black-bg);
        }
        .why-choose-one.style3 .why-choose-one__inner {
          background: #0c192c;
        }
        .why-choose-one.style3 .sec-title .sub-title .text p {
          color: #b3b7bb;
        }
        .why-choose-one.style3 .sec-title h2 {
          color: var(--thm-white);
        }
        .why-choose-one.style3 .why-choose-one__content-text p {
          color: #b3b7bb;
        }
        .why-choose-one.style3 .why-choose-one__feature-item p {
          color: var(--thm-white);
        }
        .why-choose-one.style3 .why-choose-one__feature-item .icon-icon-16 {
          color: var(--thm-primary);
        }
        .why-choose-one.style3 .why-choose-one__inner .shape1 {
          opacity: 0.05;
        }
        @media only screen and (min-width: 1200px) and (max-width: 1400px) {
          .why-choose-one__content {
            margin-left: 20px;
          }
        }
        @media only screen and (max-width: 1199px) {
          .why-choose-one__img {
            max-width: 600px;
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          .why-choose-one__content {
            margin-left: 0px;
            margin-top: 60px;
            max-width: 100%;
          }
          .why-choose-one__inner {
            padding: 40px 25px 40px;
          }
        }
      `}</style>
    </>
  );
}
