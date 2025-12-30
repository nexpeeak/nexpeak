'use client';

import React from 'react';
import Layout from '@/components/layout/Layout';
import { Check } from 'lucide-react';
import Link from 'next/link';

const pricingPackages = [
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
    isPopular: true,
    features: [
      'All in Foundation Plan',
      'Complete Startup Registration with MSME',
      'Extended Compliance with ITR Filing & DIN E-KYC',
      'Complete Trademark Process with Monitoring',
      '5 Custom Policies',
      '5 Professional Agreements',
      'Consultancy & Dedicated Lawyer',
    ],
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
];

export default function ClientPage() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Pricing plan">
      <section className="pricing-one">
        <div className="container">
          <div className="text-center sec-title">
            <div className="sub-title center">
              <div className="icon">
                <img src="/assets/img/icon/sec-title-img1.png" alt="Icon" />
              </div>
              <div className="text">
                <p>our plans</p>
              </div>
            </div>
            <h2>ANNUAL SUBSCRIPTION PLAN</h2>
            <h4 style={{ color: 'var(--thm-gray)', marginTop: '10px' }}>
              For Startups, Student and Women Entrepreneurs
            </h4>
          </div>

          <div className="row d-flex align-items-stretch">
            {pricingPackages.map((pkg, index) => (
              <div key={index} className="col-xl-4 col-lg-4 d-flex">
                <div
                  className={`pricing-one__single d-flex flex-column w-100 ${
                    pkg.isPopular ? 'popular-plan' : ''
                  }`}
                  style={{ position: 'relative' }}
                >
                  {pkg.isPopular && (
                    <div className="popular-ribbon">
                      <span>Popular</span>
                    </div>
                  )}

                  <div className="table-header text-center">
                    <div className={`icon ${pkg.iconClass}`}></div>
                    <h3>{pkg.title}</h3>
                    <h2>
                      {pkg.price}
                      <small>{pkg.duration}</small>
                    </h2>
                  </div>

                  <div className="table-content flex-grow-1">
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {pkg.features.map((feature, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px' }}>
                          <Check size={16} style={{ color: 'var(--thm-primary)', marginTop: '5px', flexShrink: 0 }} />
                          <p style={{ margin: 0, fontSize: '15px' }}>{feature}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="table-footer text-center mt-auto">
                    <Link href="/contact" className="thm-btn">
                      {pkg.buttonText}
                      <span className="thm-btn__icon">
                        <i className="icon-icon-8"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .popular-plan {
          border: 2px solid var(--thm-primary);
          transform: scale(1.05);
          z-index: 1;
        }
        .popular-ribbon {
          position: absolute;
          top: 0;
          right: 0;
          background: var(--thm-primary);
          color: white;
          padding: 5px 15px;
          font-size: 12px;
          font-weight: bold;
          border-bottom-left-radius: 10px;
        }
      `}</style>
    </Layout>
  );
}