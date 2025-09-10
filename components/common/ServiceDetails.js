import { useState, useEffect } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';

const ServiceDetails = ({ serviceDetails }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [sidebarFixed, setSidebarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setSidebarFixed(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section className="py-5" style={{ backgroundColor: '#FAF8F4' }}>
      <div className="container">
        <div className="row g-4 g-lg-5">
          {/* Enhanced Sidebar */}
          <div className="col-xl-4">
            <div
              className={`modern-sidebar ${
                sidebarFixed ? 'position-sticky' : ''
              }`}
              style={{ top: '2rem' }}
            >
              {/* Service List Card */}
              <div className="p-4 mb-4 bg-white border-0 shadow-sm rounded-4">
                <div className="pb-3 mb-4 d-flex align-items-center border-bottom">
                  <div className="service-icon me-3">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <h3 className="mb-0 h5 fw-bold text-thm-black">
                    {serviceDetails.serviceListTitle}
                  </h3>
                </div>

                <div className="gap-2 d-flex flex-column">
                  {serviceDetails.serviceList.map((service, index) => (
                    <Link href={service.link} key={index} legacyBehavior>
                      <a
                        className={`nav-item text-decoration-none d-flex align-items-center justify-content-between p-3 rounded-3 ${
                          service.isActive ? 'nav-active' : ''
                        }`}
                      >
                        <span className="fw-medium">{service.name}</span>
                        <svg
                          className="nav-arrow"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                        </svg>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact CTA Card */}
              <div className="mb-4 overflow-hidden bg-white border-0 shadow-sm rounded-4 position-relative contact-cta">
                <div
                  className="cta-bg position-absolute w-100 h-100"
                  style={{
                    backgroundImage: `url(${serviceDetails.contactPattern})`,
                  }}
                ></div>
                <div className="p-4 text-center position-relative">
                  <div className="mx-auto mb-3 cta-icon">
                    <img
                      src={serviceDetails.contactIcon}
                      alt="Contact Icon"
                      className="w-100 h-100"
                    />
                  </div>
                  <h4 className="mb-2 text-white h6">
                    {serviceDetails.contactTitle}
                  </h4>
                  <h3 className="mb-4 text-white h4 fw-bold">
                    {serviceDetails.contactSubtitle}
                  </h3>
                  <Link href={serviceDetails.contactLink} legacyBehavior>
                    <a className="px-4 py-2 btn btn-white rounded-pill fw-semibold text-decoration-none cta-btn">
                      <span className="me-2">
                        {serviceDetails.contactButtonText}
                      </span>
                      <svg
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>

              {/* Downloads Card */}
<div className="p-4 bg-white border-0 shadow-sm rounded-4">
  <div className="pb-3 mb-4 d-flex align-items-center border-bottom">
    <div className="service-icon me-3">
      <svg
        width="20"
        height="20"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
      </svg>
    </div>
    <h3 className="mb-0 h5 fw-bold text-thm-black">
      {serviceDetails.downloadTitle}
    </h3>
  </div>

  <div className="gap-3 d-flex flex-column">
    {serviceDetails.downloads.map((download, index) => (
      <div key={index} className="gap-3 p-3 download-item text-decoration-none d-flex flex-column flex-sm-row align-items-sm-center rounded-3 bg-light">
        <div className="download-icon me-sm-3 mb-2 mb-sm-0">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
          </svg>
        </div>
        <span className="flex-fill fw-medium text-dark text-center text-sm-start">
          {download.text}
        </span>
        <div className="d-flex gap-2 justify-content-center justify-content-sm-end">
          {/* Preview Button */}
          <Link href={download.link} legacyBehavior>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline-primary fw-semibold rounded-pill"
              title="Preview" // Added tooltip for better UX
            >
              <svg
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
              </svg>
            </a>
          </Link>
          {/* Download Button */}
          <a
            href={download.link}
            download
            className="btn btn-sm btn-primary fw-semibold rounded-pill"
            title="Download"
          >
            <svg
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
            </svg>
          </a>
        </div>
      </div>
    ))}
  </div>
</div>
            </div>
          </div>

          {/* Enhanced Main Content */}
          <div className="col-xl-8">
            <div className="overflow-hidden bg-white border-0 shadow-sm rounded-4">
              {/* Hero Image */}
              <div className="overflow-hidden hero-container position-relative">
                <img
                  src={serviceDetails.mainImage}
                  alt="Service"
                  className="w-100 hero-img"
                />
                <div className="top-0 hero-overlay position-absolute w-100 h-100 start-0"></div>
              </div>

              {/* Service Introduction */}
              <div className="p-4 p-lg-5 bg-light">
                <h1 className="mb-4 display-5 fw-bold text-thm-black">
                  {serviceDetails.serviceTitle}
                </h1>
                <div className="service-desc">
                  <p className="mb-4 lead text-muted">
                    {serviceDetails.serviceDescription1}
                  </p>
                  <p className="mb-0 fs-6 text-muted lh-lg">
                    {serviceDetails.serviceDescription2}
                  </p>
                </div>
              </div>

              {/* Benefits Section */}
              <div className="p-4 p-lg-5 border-bottom">
                <div className="mb-5 text-center">
                  <h2 className="mb-3 h3 fw-bold text-thm-black">
                    {serviceDetails.benefitTitle}
                  </h2>
                  <p
                    className="mx-auto text-muted fs-6"
                    style={{ maxWidth: '600px' }}
                  >
                    {serviceDetails.benefitDescription}
                  </p>
                </div>

                <div className="row g-4">
                  {serviceDetails.benefits.map((benefit, index) => (
                    <div className="col-lg-3 col-md-6" key={index}>
                      <div className="p-4 text-center benefit-card h-100 rounded-3 bg-light">
                        <div className="mx-auto mb-3 benefit-icon">
                          <span className={`${benefit.icon} fs-2`}></span>
                        </div>
                        <h4 className="mb-0 h6 fw-semibold text-thm-black">
                          {benefit.title}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Video Section */}
              <div className="p-4 p-lg-5 border-bottom">
                <div className="overflow-hidden video-wrapper position-relative rounded-4">
                  <img
                    src={serviceDetails.videoThumbnail}
                    alt="Video Thumbnail"
                    className="w-100 video-thumb"
                  />
                  <div className="top-0 video-overlay position-absolute w-100 h-100 start-0 d-flex align-items-center justify-content-center">
                    <button
                      className="p-0 border-0 btn btn-light rounded-circle video-btn"
                      onClick={() => setIsOpen(true)}
                      aria-label="Play video"
                    >
                      <svg
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <ModalVideo
                  channel="youtube"
                  isOpen={isOpen}
                  videoId="pVE92TNDwUk"
                  onClose={() => setIsOpen(false)}
                />
              </div>

              {/* Justice/Features Section */}
              <div className="p-4 p-lg-5 border-bottom">
                <h2 className="mb-4 h3 fw-bold text-thm-black">
                  {serviceDetails.justiceTitle}
                </h2>
                <p className="mb-4 text-muted fs-6 lh-lg">
                  {serviceDetails.justiceText1}
                </p>

                <div className="gap-3 d-flex flex-column">
                  {serviceDetails.justiceList.map((item, index) => (
                    <div
                      className="gap-3 p-3 feature-item d-flex align-items-center rounded-3 bg-light"
                      key={index}
                    >
                      <div className="feature-check">
                        <svg
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
                        </svg>
                      </div>
                      <h4 className="mb-0 fs-6 fw-semibold text-thm-black">
                        {item}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Images Gallery */}
              <div className="p-4 p-lg-5 border-bottom">
                <div className="row g-4">
                  {serviceDetails.contentImgs3.map((img, index) => (
                    <div className="col-md-6" key={index}>
                      <div className="overflow-hidden gallery-item rounded-3">
                        <img
                          src={img}
                          alt={`Gallery Image ${index + 1}`}
                          className="w-100 gallery-img"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced FAQ Section */}
              <div className="p-4 p-lg-5">
                <div className="mb-5 text-center">
                  <h2 className="mb-3 h3 fw-bold text-thm-black">
                    {serviceDetails.faqTitle}
                  </h2>
                  <p
                    className="mx-auto text-muted fs-6"
                    style={{ maxWidth: '600px' }}
                  >
                    {serviceDetails.faqIntro}
                  </p>
                </div>

                <div
                  className="mx-auto faq-wrapper"
                  style={{ maxWidth: '800px' }}
                >
                  {serviceDetails.faqs.map((faq, index) => (
                    <div
                      className={`faq-item mb-3 rounded-3 overflow-hidden shadow-sm ${
                        activeFaq === index ? 'faq-active' : ''
                      }`}
                      key={index}
                    >
                      <div
                        className="p-4 cursor-pointer faq-header d-flex align-items-center justify-content-between bg-light"
                        onClick={() => toggleFaq(index)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            toggleFaq(index);
                          }
                        }}
                      >
                        <h4 className="mb-0 h6 fw-semibold flex-fill">
                          {faq.question}
                        </h4>
                        <div className="faq-icon ms-3">
                          <svg
                            className={`faq-toggle ${
                              activeFaq === index ? 'rotated' : ''
                            }`}
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                          </svg>
                        </div>
                      </div>
                      <div
                        className={`faq-content ${
                          activeFaq === index ? 'show' : ''
                        }`}
                      >
                        <div className="p-4 bg-white">
                          <p className="mb-0 text-muted lh-lg">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        :root {
          --thm-primary: #00bcd4;
          --thm-black: #212529;
        }

        .service-icon {
          width: 44px;
          height: 44px;
          background-color: var(--thm-primary);
          color: white;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-item {
          color: #6c757d;
          background-color: #f8f9fa;
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .nav-item:hover {
          background-color: #e9ecef;
          color: var(--thm-primary);
          transform: translateX(4px);
          text-decoration: none;
        }

        .nav-active {
          background-color: var(--thm-primary) !important;
          color: white !important;
          border-color: var(--thm-primary);
        }

        .nav-arrow {
          transition: transform 0.3s ease;
        }

        .nav-item:hover .nav-arrow {
          transform: translateX(2px);
        }

        .contact-cta {
          min-height: 280px;
        }

        .cta-bg {
          background-color: var(--thm-primary);
          background-size: cover;
          background-position: center;
          opacity: 0.95;
        }

        .cta-bg::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--thm-primary);
          opacity: 0.9;
        }

        .cta-icon {
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          backdrop-filter: blur(10px);
        }

        .cta-btn {
          background-color: white !important;
          color: var(--thm-primary) !important;
          transition: all 0.3s ease;
        }

        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .download-icon {
          width: 40px;
          height: 40px;
          background-color: var(--thm-primary);
          color: white;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .download-item {
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .download-item:hover {
          background-color: #e9ecef !important;
          color: var(--thm-primary) !important;
          border-color: var(--thm-primary);
          transform: translateX(4px);
          text-decoration: none;
        }

        .download-arrow {
          transition: transform 0.3s ease;
        }

        .download-item:hover .download-arrow {
          transform: translateX(2px);
        }

        .hero-container {
          height: 400px;
        }

        .hero-img {
          height: 400px;
          object-fit: cover;
        }

        .hero-overlay {
          background: rgba(0, 188, 212, 0.1);
        }

        .benefit-card {
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .benefit-card:hover {
          background-color: white !important;
          border-color: var(--thm-primary);
          transform: translateY(-4px);
          box-shadow: 0 15px 30px rgba(0, 188, 212, 0.15);
        }

        .benefit-icon {
          width: 60px;
          height: 60px;
          background-color: var(--thm-primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .video-wrapper {
          height: 400px;
        }

        .video-thumb {
          height: 400px;
          object-fit: cover;
        }

        .video-overlay {
          background: rgba(0, 0, 0, 0.4);
        }

        .video-btn {
          width: 80px;
          height: 80px;
          color: var(--thm-primary);
          transition: all 0.3s ease;
        }

        .video-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .feature-check {
          width: 32px;
          height: 32px;
          background-color:var(--thm-primary);
          color: white;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .feature-item {
          transition: all 0.3s ease;
        }

        .feature-item:hover {
          background-color: #e9ecef !important;
          transform: translateX(4px);
        }

        .gallery-img {
          height: 250px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .gallery-item:hover .gallery-img {
          transform: scale(1.05);
        }

        .faq-item {
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .faq-item:hover {
          border-color: var(--thm-primary);
        }

        .faq-active {
          border-color: var(--thm-primary) !important;
          box-shadow: 0 8px 25px rgba(0, 188, 212, 0.15);
        }

        .faq-active .faq-header {
          background-color: var(--thm-primary) !important;
          color: white !important;
        }

        .cursor-pointer {
          cursor: pointer;
        }

        .faq-toggle {
          transition: transform 0.3s ease;
        }

        .faq-toggle.rotated {
          transform: rotate(90deg);
        }

        .faq-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .faq-content.show {
          max-height: 200px;
        }

        .text-thm-black {
          color: var(--thm-black) !important;
        }

        @media (max-width: 1199.98px) {
          .modern-sidebar {
            position: relative !important;
            top: 0 !important;
          }
        }

        @media (max-width: 767.98px) {
          .hero-container,
          .hero-img,
          .video-wrapper,
          .video-thumb {
            height: 250px;
          }

          .video-btn {
            width: 60px;
            height: 60px;
          }

          .gallery-img {
            height: 200px;
          }
        }
      `}</style>
    </section>
  );
};

export default ServiceDetails;
