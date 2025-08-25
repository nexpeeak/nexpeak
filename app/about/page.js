'use client';
import CaseOne from '@/components/common/CaseOne';
import CounterOne from '@/components/common/CounterOne';
import TeamOne from '@/components/common/TeamOne';
import TestimonialsTwo from '@/components/slider/TestimonialsTwo';
import CountUp from 'react-countup';
import Layout from '@/components/layout/Layout';

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About US">
        <div>
          {/* Start About Three */}
          <section className="about-three">
            <div className="container">
              <div className="row">
                {/* Start About Three Img */}
                <div className="col-xl-6">
                  <div className="about-three__img">
                    <div className="about-three__img-inner">
                      <img
                        src="/images/about-1.jpeg"
                        alt="About Image"
                      />

                      <div className="overlay-content">
                        <div className="counter-box">
                          <h2 className="count">
                            <CountUp end={5} /><span>+</span>
                          </h2>
                        </div>
                        <div className="text-box">
                          <h3>
                            years of <br /> experience
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End About Three Img */}

                {/* Start About Three Content */}
                <div className="col-xl-6">
                  <div className="about-three__content">
                    <div className="sec-title">
                      <div className="sub-title">
                        <div className="icon">
                          <img
                            src="/assets/img/icon/sec-title-img1.png"
                            alt="Section Title Icon"
                          />
                        </div>
                        <div className="text">
                          <p>welcome to Nexpeak</p>
                        </div>
                      </div>
                      <h2>
                     Legal Expertise for Business<br /> Growth & Confidence
                      </h2>
                    </div>

                    <div className="about-three__content-text">
                      <p>
                        For over 5 years, Nexpeak has empowered businesses and individuals to overcome legal challenges with clarity and confidence. We simplify the complexities of law, protect your interests, and create lasting solutions that give you the freedom to focus on growth.
                      </p>
                    </div>

                  <div className="about-three__content-list" style={{ padding: 0, margin: 0 }}>
  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "15px" }}>
    <li>
      <h3
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          fontSize: "18px",
          lineHeight: "1.5",
          color: "var(--thm-black)",
          margin: 0,
        }}
      >
        <span
          className="icon-icon-16"
          style={{ color: "var(--thm-primary)", fontSize: "20px", lineHeight: 1, flexShrink: 0 }}
        ></span>
        Integrity at Every Step – committed to delivering justice with honesty and transparency
      </h3>
    </li>

    <li>
      <h3
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          fontSize: "18px",
          lineHeight: "1.5",
          color: "var(--thm-black)",
          margin: 0,
        }}
      >
        <span
          className="icon-icon-16"
          style={{ color: "var(--thm-primary)", fontSize: "20px", lineHeight: 1, flexShrink: 0 }}
        ></span>
        Trusted by Clients – success built on lasting relationships and proven results
      </h3>
    </li>

    <li>
      <h3
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          fontSize: "18px",
          lineHeight: "1.5",
          color: "var(--thm-black)",
          margin: 0,
        }}
      >
        <span
          className="icon-icon-16"
          style={{ color: "var(--thm-primary)", fontSize: "20px", lineHeight: 1, flexShrink: 0 }}
        ></span>
        Expertise You Can Rely On – practical guidance backed by deep legal experience
      </h3>
    </li>
  </ul>
</div>


                    <div className="about-three__content-btn">
                      <a className="thm-btn" href="#">
                        Get in touch
                        <span className="thm-btn__icon">
                          <i className="icon-icon-8"></i>
                        </span>
                        <span className="thm-btn__hover-group">
                          <span className="thm-btn__hover thm-btn__hover--1"></span>
                          <span className="thm-btn__hover thm-btn__hover--2"></span>
                          <span className="thm-btn__hover thm-btn__hover--3"></span>
                          <span className="thm-btn__hover thm-btn__hover--4"></span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                {/* End About Three Content */}
              </div>
            </div>
          </section>
          {/* End About Three */}
          {/* Start Company History */}
          <section className="company-history">
            <div className="container">
              <div className="border-box"></div>
              <div className="text-center sec-title">
                <div className="sub-title center">
                  <div className="icon">
                    <img
                      src="/assets/img/icon/sec-title-img1.png"
                      alt="Section Title Icon"
                    />
                  </div>
                  <div className="text">
                    <p>company history</p>
                  </div>
                </div>
                <h2>history of Nexpeak</h2>
              </div>
              <div className="row">
                {/* Start Company History Single */}
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="text-center company-history__single">
                    <div className="company-history__single-content">
                      <h2>start journey</h2>
                      <p>
                        Nexpeak was founded with a mission to provide accessible
                        and modern legal solutions for businesses and
                        individuals.
                      </p>
                      <div className="date-box">2019</div>
                    </div>
                    <div className="company-history__single-img">
                      <img
                        src="/images/about/journey.jpg"
                        alt="Start Journey"
                      />
                    </div>
                  </div>
                </div>
                {/* End Company History Single */}

                {/* Start Company History Single */}
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="text-center company-history__single style2">
                    <div className="company-history__single-img">
                      <img
                        src="/images/about/growth.jpg"
                        alt="Firm of the Year"
                      />
                    </div>
                    <div className="company-history__single-content">
                      <div className="date-box">2021</div>
                      <h2>Growing Recognition</h2>
                      <p>
                        Within two years, Nexpeak became a trusted name, known
                        for client-focused service and practical strategies.
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Company History Single */}

                {/* Start Company History Single */}
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="text-center company-history__single">
                    <div className="company-history__single-content">
                      <h2>Expansion</h2>
                      <p>
                       To meet demand, Nexpeak expanded its team and expertise, strengthening services in corporate, compliance, and intellectual property law.
                      </p>
                      <div className="date-box">2023</div>
                    </div>
                    <div className="company-history__single-img">
                      <img
                        src="/images/about/expansion.jpg"
                        alt="Open Branch"
                      />
                    </div>
                  </div>
                </div>
                {/* End Company History Single */}

                {/* Start Company History Single */}
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="text-center company-history__single style2">
                    <div className="company-history__single-img">
                      <img
                        src="/images/about/excellence.jpg"
                        alt="Global Awards"
                      />
                    </div>
                    <div className="company-history__single-content">
                      <div className="date-box">2025</div>
                      <h2>5+ Years of Excellence</h2>
                      <p>
                       With over five years of experience, Nexpeak continues to deliver innovative solutions, empowering clients with confidence.
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Company History Single */}
              </div>
            </div>
          </section>
          {/* End Company History */}
          <CounterOne />
          
        </div>
        
      </Layout>
      
    </>
  );
}
