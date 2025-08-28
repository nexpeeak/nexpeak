'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Layout from '@/components/layout/Layout';
import Toast from '@/components/common/Toast';
import { FaPaperPlane } from 'react-icons/fa';

// Dynamically import Google Map
const MultiMarkerMap = dynamic(() => import('@/components/common/GoogleMap'), {
  ssr: false,
});

export default function Home() {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({
    isVisible: false,
    message: '',
    type: 'success',
  });

  // Handle Web3Forms Submission
  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    formData.append('access_key', accessKey);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setToast({
          isVisible: true,
          message:
            "Your message has been sent successfully. We'll get back to you soon!",
          type: 'success',
        });
        event.target.reset();
      } else {
        setToast({
          isVisible: true,
          message: '⚠️ Something went wrong. Please try again.',
          type: 'error',
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setToast({
        isVisible: true,
        message: '🌐 Network error. Please check your connection.',
        type: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeToast = () => setToast({ ...toast, isVisible: false });

  return (
    <>
      {/* ✅ Toast Notification */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={closeToast}
      />

      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="CONTACT US">
        <div>
          {/* --- Contact Info --- */}
          <section className="contact-page">
            <div className="contact-page__top">
              <div className="container">
                <div className="text-center sec-title">
                  <div className="sub-title center">
                    <div className="icon">
                      <img
                        src="/assets/img/icon/sec-title-img1.png"
                        alt="Icon"
                      />
                    </div>
                    <div className="text">
                      <p>support information</p>
                    </div>
                  </div>
                  <h2 className="">contact information</h2>
                </div>

                <div className="row">
                  {/* Location */}
                  <div className="col-xl-4">
                    <div className="contact-page__top-single">
                      <div className="contact-page__top-single-inner">
                        <div className="icon-box">
                          <span className="icon-icon-46"></span>
                        </div>
                        <div className="content-box">
                          <div className="title-box">
                            <div className="line"></div>
                            <div className="text">
                              <p>location</p>
                            </div>
                          </div>
                          <h2>Two Horizon, Gurugram, 122002</h2>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="col-xl-4">
                    <div className="contact-page__top-single">
                      <div className="contact-page__top-single-inner">
                        <div className="icon-box style2">
                          <span className="icon-icon-47"></span>
                        </div>
                        <div className="content-box">
                          <div className="title-box">
                            <div className="line"></div>
                            <div className="text">
                              <p>Email us</p>
                            </div>
                          </div>
                          <h2>
                            <a href="mailto:nexpeaklawfirm@gmail.com">
                              nexpeaklawfirm@gmail.com
                            </a>
                          </h2>
                          <h2>
                            <a href="mailto:nexpeaklegal@gmail.com">
                              nexpeaklegal@gmail.com
                            </a>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="col-xl-4">
                    <div className="contact-page__top-single">
                      <div className="contact-page__top-single-inner">
                        <div className="icon-box">
                          <span className="icon-icon-48"></span>
                        </div>
                        <div className="content-box">
                          <div className="title-box">
                            <div className="line"></div>
                            <div className="text">
                              <p>Phone no</p>
                            </div>
                          </div>
                          <h2>
                            <a href="tel:+919027667840">+91 9027667840</a>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* --- Contact Form --- */}
            <div className="contact-page__bottom">
              <div className="container">
                <div className="row">
                  {/* Left Image */}
                  <div className="col-xl-4">
                    <div className="contact-page__bottom-img">
                      <img src="/images/contact.jpeg" alt="Contact Page" />
                    </div>
                  </div>

                  {/* Right Form */}
                  <div className="col-xl-8">
                    <div className="contact-page__form">
                      <div className="sec-title">
                        <div className="sub-title">
                          <div className="icon">
                            <img
                              src="/assets/img/icon/sec-title-img1.png"
                              alt="Icon"
                            />
                          </div>
                          <div className="text">
                            <p>get in touch</p>
                          </div>
                        </div>
                        <h2>send us free message</h2>
                      </div>

                      {/* ✅ Contact Form */}
                      <form id="contact-form" onSubmit={onSubmit}>
                        <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="contact-page__input-box">
                              <input
                                type="text"
                                placeholder="NAME*"
                                name="name"
                                required
                              />
                              <div className="icon-box">
                                <span className="icon-icon-17"></span>
                              </div>
                            </div>
                          </div>

                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="contact-page__input-box">
                              <input
                                type="text"
                                placeholder="PHONE*"
                                name="number"
                                required
                              />
                              <div className="icon-box">
                                <span className="icon-icon-37"></span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-xl-6">
                            <div className="contact-page__input-box">
                              <input
                                type="email"
                                placeholder="EMAIL*"
                                name="email"
                                required
                              />
                              <div className="icon-box">
                                <span className="icon-icon-18"></span>
                              </div>
                            </div>
                          </div>

                          <div className="col-xl-6">
                            <div className="contact-page__input-box">
                              <input
                                type="text"
                                placeholder="COMPANY*"
                                name="company"
                                required
                              />
                              <div className="icon-box">
                                <span className="icon-icon-23"></span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-xl-12">
                            <div className="contact-page__input-box">
                              <textarea
                                name="message"
                                placeholder="COMMENT"
                                required
                              ></textarea>
                              <div className="icon-box">
                                <span className="icon-icon-19"></span>
                              </div>
                            </div>

                            {/* ✅ Submit Button with Inline Spinner */}
                            <div className="contact-page__btn">
                              <button
                                type="submit"
                                className="thm-btn contact-one__btn"
                                disabled={isSubmitting}
                                style={{
                                  opacity: isSubmitting ? 0.7 : 1,
                                  cursor: isSubmitting
                                    ? 'not-allowed'
                                    : 'pointer',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  gap: '8px',
                                }}
                              >
                                {isSubmitting ? (
                                  <>
                                    Sending...
                                    <div
                                      style={{
                                        width: '16px',
                                        height: '16px',
                                        border: '2px solid #ffffff',
                                        borderTop: '2px solid transparent',
                                        borderRadius: '50%',
                                        animation: 'spin 1s linear infinite',
                                      }}
                                    />
                                  </>
                                ) : (
                                  <>
                                    Send Message
                                    <span className="thm-btn__icon">
                                      <FaPaperPlane />
                                    </span>
                                  </>
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Google Map Section */}
          <section className="google-map-one">
            <MultiMarkerMap />
          </section>
        </div>
      </Layout>

      {/* Animations */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}
