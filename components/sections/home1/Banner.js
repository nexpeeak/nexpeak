'use client'; // Add this line at the top

import Link from 'next/link';
import { useState } from 'react';

export default function Banner() {
  // State for dynamic data (e.g., dynamic images or text)
  const [bannerContent, setBannerContent] = useState({
    description:
      'At Nexpeak, we do more than provide legal services—we partner with you. We listen, understand your unique situation, and offer clear, compassionate guidance. Our goal is to empower you with informed decisions for the best possible outcome.',
    socialLinks: [
      { icon: 'icon-icon-1', url: '/link1' },
      { icon: 'icon-icon-2', url: '/link2' },
      { icon: 'icon-icon-3', url: '/link3' },
      { icon: 'icon-icon-4', url: '/link4' },
    ],
    backgroundImage: '/assets/img/pattern/banner-v1-pattern.png',
    bannerImage: '/images/hero.jpg',
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
                  <span style={{color:'#008bbf',textDecoration:'underline'}}>Nexpeak: </span>For a Strategic, <br />
                  Long-Term Legal Partner
                </h2>
              </div>
              <div className="banner-one__content-right">
                <p className='tw-text-red-500'>{bannerContent.description}</p>
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
