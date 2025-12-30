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
      'Company Profile / Pitch Deck',
      'Startup Registration (DSC, DIN, MOA/AOA, GST, PAN/TAN)',
      'Basic Compliance (MCA, GST, TDS)',
      'DPIIT Registration',
      'Trademark Filing (1 Class)',
      '3 Standard Policies',
      '3 Basic Agreements',
      'Consultancy & Support',
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
      'Everything in Foundation',
      'MSME Registration',
      'ITR Filing & DIN E-KYC',
      'Trademark Monitoring',
      '5 Custom Policies',
      '5 Professional Agreements',
      'Dedicated Lawyer Support',
    ],
  },
  {
    title: 'Executive Plan',
    price: '₹4,999',
    duration: '/month',
    iconClass: 'icon-icon-43',
    buttonText: 'Get Started',
    features: [
      'Everything in Professional',
      'Complete Startup Package',
      'Full Compliance (MCA, GST, TDS, ESIC, EPFO, ITR)',
      'Premium Trademark Protection',
      '10 Advanced Policies (ESOP, CSR)',
      '10 Legal Agreements',
      'In-House Legal Team',
    ],
  },
];

export default function ClientPage() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Pricing Plans">
      <section className="pricing-one">
        <div className="container">
          <div className="text-center sec-title">
            <h1>Annual Legal Subscription Plans</h1>
            <p>Designed for Startups, Students & Women Entrepreneurs</p>
          </div>

          <div className="row align-items-stretch">
            {pricingPackages.map((pkg, index) => (
              <div key={index} className="col-lg-4 d-flex">
                <div
                  className={`pricing-one__single w-100 d-flex flex-column ${
                    pkg.isPopular ? 'popular-plan' : ''
                  }`}
                >
                  {pkg.isPopular && (
                    <div className="popular-ribbon">Popular</div>
                  )}

                  <div className="table-header text-center">
                    <div className={`icon ${pkg.iconClass}`} />
                    <h3>{pkg.title}</h3>
                    <h2>
                      {pkg.price}
                      <small>{pkg.duration}</small>
                    </h2>
                  </div>

                  <div className="table-content flex-grow-1">
                    <ul>
                      {pkg.features.map((feature, i) => (
                        <li key={i}>
                          <Check size={16} /> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="table-footer text-center mt-auto">
                    <Link href="/contact" className="thm-btn">
                      {pkg.buttonText}
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
        }
        .popular-ribbon {
          position: absolute;
          top: 10px;
          right: 10px;
          background: var(--thm-primary);
          color: #fff;
          padding: 4px 12px;
          font-size: 12px;
          border-radius: 6px;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          display: flex;
          gap: 10px;
          margin-bottom: 10px;
        }
      `}</style>
    </Layout>
  );
}
