import Link from 'next/link';

const bannerContent = {
  description:
    'Nexpeak is a modern legal and compliance partner for startups, founders, and growing businesses across India. We provide end-to-end corporate legal services — from incorporation and regulatory compliance to intellectual property, taxation, and strategic advisory. With experience across 40+ industries, our team helps businesses stay compliant, protected, and confidently focused on long-term growth.',
  socialLinks: [
    { icon: 'icon-icon-1', url: 'https://www.linkedin.com/company/nexpeaklawfirm/' },
    { icon: 'icon-icon-2', url: 'https://www.facebook.com/nexpeaklawfirm' },
    { icon: 'icon-icon-3', url: 'https://www.instagram.com/nexpeaklawfirm/' },
  ],
  backgroundImage: '/assets/img/pattern/banner-v1-pattern.png',
  bannerImage: '/images/home/hero.png',
};

export default function Banner() {
  return (
    <>
      {/* Start Banner One */}
      <section className="banner-one tw-bg-red">
        <div className="banner-one__content">
          <div className="banner-one__social-links">
            <div className="banner-one__social-links-inner">
              {bannerContent.socialLinks.map((link, index) => (
                <Link href={link.url} key={index} target="_blank">
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
                <h1 style={{fontSize:"3rem"}}>
                  <span
                    style={{ color: '#008bbf', textDecoration: 'underline', }}
                  >
                    Nexpeak:{' '}
                  </span>
                  Your Strategic <br />
                  Legal & Compliance Partner
                </h1>
              </div>

              <div className="banner-one__content-right">
                <p className="tw-text-red-500">
                  {bannerContent.description}
                </p>
                <div className="btn-box">
                  <Link href="/contact">
                    Talk to a Lawyer <span className="icon-icon-8"></span>
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
