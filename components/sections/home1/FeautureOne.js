import Link from 'next/link';

const featureContent = {
  patternImage: '/assets/img/pattern/feauture-v1-pattern.png',
  sectionTitleIcon: '/assets/img/icon/sec-title-img1.png',
  sectionTitleText: 'welcome to Nexpeak',
  sectionMainTitle: 'our best features',
  features: [
    {
      icon: 'icon-icon-9',
      title: 'Strategic Legal Partnership',
      content:
        'We go beyond legal advice by aligning our strategies with your long-term business goals.',
      shapeImage: '/assets/img/shape/feauture-v1-shape1.png',
      animation: 'fadeInLeft',
      delay: '0ms',
    },
    {
      icon: 'icon-icon-11',
      title: 'Expert Legal Counsel',
      content:
        'Highly skilled lawyers with deep expertise across corporate, commercial, and business law.',
      shapeImage: '/assets/img/shape/feauture-v1-shape1.png',
      animation: 'fadeInRight',
      delay: '100ms',
    },
    {
      icon: 'icon-icon-10',
      title: 'Proven Results & Trusted Defense',
      content:
        'A strong track record of protecting clients and delivering favorable legal outcomes.',
      shapeImage: '/assets/img/shape/feauture-v1-shape1.png',
      animation: 'fadeInLeft',
      delay: '200ms',
    },
    {
      icon: 'icon-icon-12',
      title: 'Legal Subscription',
      content:
        'Affordable, ongoing legal support designed to protect your business and capital efficiently.',
      shapeImage: '/assets/img/shape/feauture-v1-shape1.png',
      animation: 'fadeInRight',
      delay: '100ms',
    },
  ],
};

export default function FeautureOne() {
  return (
    <>
      {/* Start Feature One */}
      <section className="feauture-one">
        <div
          className="feauture-one__pattern"
          style={{ backgroundImage: `url(${featureContent.patternImage})` }}
        ></div>

        <div className="container">
          <div className="text-center sec-title">
            <div className="sub-title center">
              <div className="icon">
                <img src={featureContent.sectionTitleIcon} alt="" />
              </div>
              <div className="text">
                <p>{featureContent.sectionTitleText}</p>
              </div>
            </div>
            <h2>{featureContent.sectionMainTitle}</h2>
          </div>

          <div className="row">
            {featureContent.features.map((feature, index) => (
              <div
                key={index}
                className={`col-xl-3 col-lg-6 col-md-6 wow ${feature.animation}`}
                data-wow-delay={feature.delay}
                data-wow-duration="1500ms"
              >
                <div className="feauture-one__single">
                  <div className="shape1">
                    <img src={feature.shapeImage} alt="" />
                  </div>

                  <div className="feauture-one__single-icon">
                    <span className={feature.icon}></span>
                  </div>

                  <div className="feauture-one__single-content">
                    <h2>{feature.title}</h2>
                    <div className="btn-box">
                      <span>{feature.content}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End Feature One */}
    </>
  );
}
