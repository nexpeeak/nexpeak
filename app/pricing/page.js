import React from 'react';
import Layout from '@/components/layout/Layout';
import { Check } from 'lucide-react';

Home.defaultProps = {
  pricingPackages: [
    {
      title: 'Foundation Plan',
      price: '₹2,999',
      duration: '/month',
      iconClass: 'icon-icon-12',
      buttonText: 'Get Started',
      features: [
        'Company Profile/Pitch Deck',
        'Complete Startup Registration (DSC/DIN, MOA/AOA, GST, PAN/TAN)',
        'Basic Compliance (MCA Filing, GST Return, TDS Return)',
        'DPIIT Registration and Benefits',
        'Trademark Filing (1 Class) with Documents',
        '3 Standard Policies',
        '3 Basic Agreements',
        'Consultancy & Customer Support',
      ],
    },
    {
      title: 'Professional Plan',
      price: '₹3,999',
      duration: '/month',
      iconClass: 'icon-icon-42',
      buttonText: 'Get Started',
      features: [
        'All in Foundation Plan',
        'Complete Startup Registration with MSME',
        'Extended Compliance with ITR Filing & DIN E-KYC',
        'Complete Trademark Process with Monitoring',
        '5 Custom Policies',
        '5 Professional Agreements',
        'Consultancy & Dedicated Lawyer',
      ],
      isPopular: true,
    },
    {
      title: 'Executive Plan',
      price: '₹4,999',
      duration: '/month',
      iconClass: 'icon-icon-43',
      buttonText: 'Get Started',
      features: [
        'All in Professional Plan',
        'Complete Startup Registration Package',
        'Full Compliance (MCA, GST, TDS, ESIC, EPFO, ITR, Payroll)',
        'Premium Trademark Management with Infringement Monitoring',
        '10 Comprehensive Policies (Including ESOP, CSR)',
        '10 Advanced Agreements and Legal Documents',
        'In-House Legal Team & Dedicated Lawyer',
      ],
    },
  ],
};

export default function Home({ pricingPackages }) {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Pricing plan">
        <section className="pricing-one">
          <div className="container">
            <div className="text-center sec-title">
              <div className="sub-title center">
                <div className="icon">
                  <img
                    src="/assets/img/icon/sec-title-img1.png"
                    alt="Affordable Price"
                  />
                </div>
                <div className="text">
                  <p>affordable price</p>
                </div>
              </div>
              <h2 className="">ANNUAL SUBSCRIPTION PLAN </h2>
              <h4>For Startups, Student and Women Entrepreneurs</h4>
            </div>
            <div className="row d-flex align-items-stretch">
              {pricingPackages.map((pkg, index) => (
                <div key={index} className="col-xl-4 col-lg-4 d-flex">
                  <div className={`pricing-one__single d-flex flex-column w-100 ${pkg.isPopular ? 'popular-plan' : ''}`}>
                    {pkg.isPopular && (
                      <div className="popular-ribbon">
                        <span>Popular</span>
                      </div>
                    )}
                    <div className="text-center table-header">
                      <div className="icon-box">
                        <span className={pkg.iconClass}></span>
                      </div>
                      <div className="table-header__inner">
                        <div className="text-box">
                          <h3>{pkg.title}</h3>
                          <h2>
                            {pkg.price}
                            <small>{pkg.duration}</small>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="table-content flex-grow-1">
                      <ul>
                        {pkg.features.map((feature, i) => (
                          <li key={i}>
                            <span>
                              <Check />
                            </span>
                            <p>{feature}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-auto text-center table-footer">
                      <div className="btn-box">
                        <a className="thm-btn" href="#">
                          {pkg.buttonText}
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
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}