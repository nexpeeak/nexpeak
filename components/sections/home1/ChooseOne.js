'use client';
import Link from 'next/link';

const chooseContent = {
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
    'Global & Local Insight – experience across 40+ industries and international markets',
  ],
  buttonText: 'let’s work',
  buttonLink: '/contact',
};

export default function ChooseOne() {
  return (
    <>
      {/* Start Why Choose One */}
      <section className="why-choose-one">
        <div className="container">
          <div className="why-choose-one__inner">
            <div className="shape1">
              <img src={chooseContent.shapeImage} alt="Decorative Shape" />
            </div>

            <div className="row">
              {/* Image */}
              <div
                className="col-xl-6 wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="why-choose-one__img">
                  <div className="inner">
                    <img
                      src={chooseContent.chooseImage}
                      alt="Why choose Nexpeak Legal"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
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
                          alt=""
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
              {/* End Content */}
            </div>
          </div>
        </div>
      </section>
      {/* End Why Choose One */}

      {/* Styles unchanged */}
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
          padding: 40px;
          overflow: hidden;
          z-index: 1;
        }
        .why-choose-one__inner .shape1 {
          position: absolute;
          bottom: 0;
          right: 0;
          z-index: -1;
        }
        .why-choose-one__content {
          margin-left: 40px;
          max-width: 510px;
        }
        .why-choose-one__features {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .why-choose-one__feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .why-choose-one__feature-item .icon-icon-16 {
          color: var(--thm-primary);
          font-size: 20px;
          flex-shrink: 0;
        }
        .why-choose-one__feature-item p {
          margin: 0;
          font-size: 18px;
          line-height: 1.5;
          color: var(--thm-black);
        }
        @media (max-width: 1199px) {
          .why-choose-one__content {
            margin-left: 0;
            margin-top: 60px;
            max-width: 100%;
          }
          .why-choose-one__inner {
            padding: 40px 25px;
          }
        }
      `}</style>
    </>
  );
}
