"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

const testimonials = [
  {
    rating: 5,
    feedback:
      "Our business operations have been strengthened by Nexpeak's legal insights. Their expertise in corporate law ensures smooth and compliant growth while providing the strategic guidance we need for long-term success.",
    author: "Kathiyawad Ventures",
    caseType: "Business Operations",
  },
  {
    rating: 5,
    feedback:
      "We get the legal confidence we need from the advisory and contract drafting services provided by Nexpeak. Their precision and strategic approach safeguard our interests and help us navigate complex legal challenges with ease and confidence.",
    author: "Capzow",
    caseType: "Legal Advisory Services",
  },
  {
    rating: 5,
    feedback:
      "Managing our contracts and intellectual property has been instrumental with Nexpeak. Their expertise ensures our agreements are airtight, and our innovations are well-protected, giving us the confidence to scale securely.",
    author: "PTWO Technologies",
    caseType: "Technology Solutions",
  },
  {
    rating: 5,
    feedback:
      "A game-changer for us has been the legal advisory from Nexpeak. Their strategic guidance on contracts and compliance has streamlined our operations, allowing us to focus on growth with confidence and peace of mind.",
    author: "Level Upwards",
    caseType: "Business Consulting",
  },
  {
    rating: 5,
    feedback:
      "A game-changer for our startup is Nexpeak. From incorporation to ongoing compliance, their team ensured every legal detail was handled seamlessly. We trust them not just as legal advisors, but as partners in our growth.",
    author: "Cyclesync Technologies",
    caseType: "Mobility Solutions",
  },
  {
    rating: 5,
    feedback:
      "Protecting our brand identity was a key role for Nexpeak. From trademark registration to guiding us on IP strategy, their legal insight ensured TheBestDay is not just growing — it's secured. Their approach made complex IPR processes simple.",
    author: "TheBestDay",
    caseType: "Event Management",
  },
  {
    rating: 5,
    feedback:
      "As a creative design firm, IP protection is critical. Nexpeak helped us safeguard our designs, draft client contracts, and stay compliant — making legal simple and stress-free for our growing business and creative team.",
    author: "Poshak",
    caseType: "Agri-Tech Solutions",
  },
  {
    rating: 5,
    feedback:
      "For a branding and advertising agency, clear contracts and content rights matter. Nexpeak streamlined our agreements, NDAs, and IP usage policies — allowing us to focus on storytelling, not legal worries or potential conflicts.",
    author: "Prismpath Mantra LLP",
    caseType: "Branding & Advertising",
  },
  {
    rating: 5,
    feedback:
      "As a startup incubator, we needed end-to-end legal guidance — from company structuring to startup due diligence. Nexpeak's support has been pivotal in creating a strong legal foundation for our portfolio startups and investors.",
    author: "Assetsphere Ventures",
    caseType: "Startup Incubator",
  },
  {
    rating: 5,
    feedback:
      "As a platform in the digital payments space, our legal needs are complex. Nexpeak has been a true partner — ensuring our contracts are airtight, handling data privacy compliance and IP protection.",
    author: "Inqubate",
    caseType: "Digital Payments Platform",
  },
  {
    rating: 5,
    feedback:
      "Nexpeak ensures our yoga and wellness business stays compliant with health sector regulations, service agreements, and licensing. Their legal clarity helps us focus fully on healing and wellbeing across all our service offerings.",
    author: "Arulyog Wellbeing LLP",
    caseType: "Wellness Services",
  },
];


const formBackgroundImage = "/assets/img/shape/testimonials-v1-shape1.png"; 

export default function Testimonial() {

  return (
    <>
      {/* Start Testimonials One */}
      <section className="testimonials-one">
        <div className="shape1">
          <img src={formBackgroundImage} alt="" />
        </div>
        <div className="container">
          <div className="row">
            {/* Start Testimonials One Content */}
            <div className="col-xl-8">
              <div className="testimonials-one__content">
                <div className="sec-title text-center">
                  <div className="sub-title center">
                    <div className="icon">
                      <img src="assets/img/icon/sec-title-img1.png" alt="Icon" />
                    </div>
                    <div className="text">
                      <p>Our Testimonials</p>
                    </div>
                  </div>
                  <h2>Clients Feedback</h2>
                </div>
                <Swiper
                  spaceBetween={30}
                  slidesPerView={1}
                  loop={true}
                  pagination={{ clickable: true }}
                  // Enable autoplay
                  modules={[Autoplay, Pagination]}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    0: { slidesPerView: 1, spaceBetween: 0 },
                    375: { slidesPerView: 1, spaceBetween: 30 },
                    575: { slidesPerView: 1, spaceBetween: 0 },
                    768: { slidesPerView: 1, spaceBetween: 0 },
                    992: { slidesPerView: 1, spaceBetween: 0 },
                    1200: { slidesPerView: 1, spaceBetween: 0 },
                  }}
                >
                  {testimonials.length > 0 ? (
                    testimonials.map((testimonial, index) => (
                      <SwiperSlide key={index}>
                        <div className="testimonials-one__single">
                          <div className="testimonials-one__single-inner">
                            <div className="icon-box">
                              <span className="icon-icon-20"></span>
                            </div>
                            <div className="content-box">
                              <div className="rating-box">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <i className="icon-icon-21" key={i}></i>
                                ))}
                              </div>
                              <h2>{testimonial.feedback}</h2>
                              <div className="author-box">
                                <h3>{testimonial.author}</h3>
                                <p>{testimonial.caseType}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))
                  ) : (
                    <div>No testimonials available</div>
                  )}
                </Swiper>
              </div>
            </div>
            {/* End Testimonials One Content */}
          </div>
        </div>
      </section>
      {/* End Testimonials One */}
    </>
  );
}