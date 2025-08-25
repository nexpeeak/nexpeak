'use client'; // Add this line at the top

import Link from 'next/link';
import { useState } from 'react';

export default function Banner() {
  // State for dynamic data (e.g., dynamic images or text)
  const [bannerContent, setBannerContent] = useState({
    description:
      'At Nexpeak, we’re redefining how businesses access legal services. As India’s first legal partner for enterprises of all sizes, we deliver cost-effective, accessible, and reliable solutions that cover every aspect of corporate law. With expertise across 40+ sectors, our team ensures your business is protected, compliant, and positioned for long-term success.',
    socialLinks: [
      { icon: 'icon-icon-1', url: '/link1' },
      { icon: 'icon-icon-2', url: '/link2' },
      { icon: 'icon-icon-3', url: '/link3' },
      { icon: 'icon-icon-4', url: '/link4' },
    ],
    backgroundImage: '/assets/img/pattern/banner-v1-pattern.png',
    bannerImage: '/images/home/hero.png',
  });

  return (
    <>
      {/* Start Banner One */}
      <section className="banner-one tw-bg-red">
        <div className="banner-one__content">
          <div className="banner-one__social-links">
            <div className="banner-one__social-links-inner">
              {bannerContent.socialLinks.map((link, index) => (
                <Link href={link.url} key={index}>
                  <span className={link.icon}></span>
                </Link>
              ))}
            </div>
          </div>
          <div
            className="banner-one__content-pattern"
            style={{ backgroundImage: `url(${bannerContent.backgroundImage})` }}
          ></div>
          <div className="container">
            <div className="banner-one__content-inner">
              <div className="banner-one__content-left">
                <h2>
                  <span
                    style={{ color: '#008bbf', textDecoration: 'underline' }}
                  >
                    Nexpeak:{' '}
                  </span>
                  For a Strategic, <br />
                  Long-Term Legal Partner
                </h2>
              </div>
              <div className="banner-one__content-right">
                <p className="tw-text-red-500">{bannerContent.description}</p>
                <div className="btn-box">
                  <Link href="#">
                    Learn More <span className="icon-icon-8"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="banner-one__img">
          <div
            className="banner-one__img-bg"
            style={{ backgroundImage: `url(${bannerContent.bannerImage})` }}
          ></div>
        </div>
      </section>
      {/* End Banner One */}
    </>
  );
}
