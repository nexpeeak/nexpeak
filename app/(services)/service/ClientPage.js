'use client';

import React, { useState } from 'react';
import { Gavel, Leaf, Shield, ShoppingCart, Cpu, Layers } from 'lucide-react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';
import ServicesTwo from '@/components/common/ServicesTwo';
import Layout from '@/components/layout/Layout';

const services = [
  {
    id: 1,
    imgSrc: '/images/services/startup.jpg',
    icon: 'icon-icon-30',
    title: 'Startup Advisory & Incorporation',
    description:
      'Company registration, structuring, founders’ agreements, and startup compliance support.',
    link: '/startup-advisory',
  },
  {
    id: 2,
    imgSrc: '/images/services/contract.jpg',
    icon: 'icon-icon-31',
    title: 'Contract Drafting & Negotiation',
    description:
      'Drafting and reviewing agreements, MOUs, NDAs, term sheets, and employment contracts.',
    link: '/contract-drafting',
  },
  {
    id: 3,
    imgSrc: '/images/services/brand-protection.jpg',
    icon: 'icon-icon-32',
    title: 'Intellectual Property & Brand Protection',
    description:
      'Trademark, patent, and copyright registration, IP due diligence, and infringement protection.',
    link: '/intellectual-property',
  },
  {
    id: 4,
    imgSrc: '/images/services/compliance-managment.jpg',
    icon: 'icon-icon-33',
    title: 'Secretarial Compliance Management',
    description:
      'ROC filings, SEBI/FEMA compliance, corporate governance, and shareholder resolutions.',
    link: '/compliance-management',
  },
  {
    id: 5,
    imgSrc: '/images/services/taxation.jpg',
    icon: 'icon-icon-38',
    title: 'Taxation & Financial Compliance',
    description:
      'GST, TDS, corporate tax, payroll compliance, transfer pricing, and ESIC/EPF services.',
    link: '/taxation-compliance',
  },
  {
    id: 6,
    imgSrc: '/images/services/labour.jpg',
    icon: 'icon-icon-39',
    title: 'Employment & Labour Law Advisory',
    description:
      'HR policies, employee contracts, labour audits, benefits structuring, and POSH compliance.',
    link: '/labour-law',
  },
  {
    id: 7,
    imgSrc: '/images/services/dispute.jpg',
    icon: Gavel,
    title: 'Dispute Resolution & Litigation',
    description:
      'Arbitration, contract enforcement, debt recovery, insolvency, and litigation support.',
    link: '/dispute-resolution',
  },
  {
    id: 8,
    imgSrc: '/images/services/esg-csr.jpg',
    icon: Leaf,
    title: 'ESG & CSR Compliance Law',
    description:
      'CSR planning, sustainability advisory, ESG reporting, and risk management for clients.',
    link: '/esg-csr',
  },
  {
    id: 9,
    imgSrc: '/images/services/data-protection.jpg',
    icon: Shield,
    title: 'Data Protection & Technology Law',
    description:
      'GDPR, cybersecurity, SaaS contracts, IT audits, fintech advisory, and privacy compliance.',
    link: '/data-protection',
  },
  {
    id: 10,
    imgSrc: '/images/services/ecommerce.jpg',
    icon: ShoppingCart,
    title: 'Digital Business & E-Commerce Law',
    description:
      'Platform structuring, consumer compliance, liability policies, and e-commerce regulations.',
    link: '/ecommerce-law',
  },
  {
    id: 11,
    imgSrc: '/images/services/ai-compliance.jpg',
    icon: Cpu,
    title: 'AI & Emerging Technology Compliance',
    description:
      'AI governance, blockchain, smart contracts, and compliance with evolving tech regulations.',
    link: '/ai-compliance',
  },
  {
    id: 12,
    imgSrc: '/images/services/mergers.jpg',
    icon: Layers,
    title: 'Mergers & Acquisitions (M&A)',
    description:
      'Due diligence, restructuring, joint ventures, share purchase agreements, and approvals.',
    link: '/mergers-acquisitions',
  },
];

export default function ClientPage() {
  const [isOpen, setIsOpen] = useState(false);
  const dynamicClassName = 'services-two services-two--service';

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Services">
        <div>
          <section className={dynamicClassName}>
            <ServicesTwo services={services} />
          </section>

          {/* Success One Content */}
          <section className="success-one success-one--service">
            <div className="shape1">
              <img src="/assets/img/shape/success-v1-shape1.png" alt="Shape" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-5">
                  <div className="success-one__content">
                    <div className="sec-title">
                      <div className="sub-title">
                        <div className="icon">
                          <img
                            src="/assets/img/icon/sec-title-img1.png"
                            alt="Icon"
                          />
                        </div>
                        <div className="text">
                          <p>Strength in Action</p>
                        </div>
                      </div>
                      <h2>
                        Delivering solution <br />
                        by expert legal minds
                      </h2>
                    </div>

                    <div className="success-one__content-text">
                      <p>
                        At Nexpeak, we blend experience and innovation to
                        simplify complex legal challenges. Our proven track
                        record in compliance, contracts, and intellectual
                        property ensures that your business is always protected
                        and future-ready.
                      </p>
                    </div>

                    <div className="success-one__progress">
                      <div className="success-one__progress-single">
                        <div className="title">
                          <p>Corporate & Compliance Law</p>
                        </div>
                        <div className="bar">
                          <div className="bar-inner-one count-bar" style={{ width: '92%' }}>
                            <div className="count-text">92%</div>
                          </div>
                        </div>
                      </div>

                      <div className="success-one__progress-single">
                        <div className="title">
                          <p>Contract & Advisory Services</p>
                        </div>
                        <div className="bar">
                          <div className="bar-inner-two count-bar" style={{ width: '88%' }}>
                            <div className="count-text">88%</div>
                          </div>
                        </div>
                      </div>

                      <div className="success-one__progress-single mb0">
                        <div className="title">
                          <p>Intellectual Property & Brand Protection</p>
                        </div>
                        <div className="bar">
                          <div className="bar-inner-three count-bar" style={{ width: '85%' }}>
                            <div className="count-text">85%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-7">
                  <div className="clearfix success-one__img">
                    <img
                      src="/images/services/strength.jpg"
                      alt="Success Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Video One */}
          <section className="video-one">
            <div
              className="video-one__bg"
              style={{
                backgroundImage: 'url(/images/services/cta.jpg)',
              }}
            ></div>
            <div className="container">
              <div className="video-one__inner">
                <div className="video-one__video-btn">
                  <button
                    className="video-one__icon video-popup"
                    onClick={() => setIsOpen(true)}
                  >
                    <span className="icon-icon-40"></span>
                  </button>
                </div>
                <div className="text-center title-box">
                  <p>intro video</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="pVE92TNDwUk"
          onClose={() => setIsOpen(false)}
        />
      </Layout>
    </>
  );
}