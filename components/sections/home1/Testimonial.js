'use client';

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
    author: 'Kathiyawad Ventures',
    caseType: 'Business Operations',
    logo: '/images/testimonials/kathiyawad.webp',
  },
  {
    rating: 5,
    feedback:
      'We get the legal confidence we need from the advisory and contract drafting services provided by Nexpeak.',
    author: 'Capzow',
    caseType: 'Legal Advisory Services',
    logo: '/images/testimonials/capzow.svg',
  },
  {
    rating: 5,
    feedback:
      'Managing our contracts and intellectual property has been instrumental with Nexpeak.',
    author: 'PTWO Technologies',
    caseType: 'Technology Solutions',
    logo: '/images/testimonials/ptwo.jpeg',
  },
  {
    rating: 5,
    feedback:
      'A game-changer for our startup is Nexpeak. From incorporation to ongoing compliance, their team ensured every legal detail was handled seamlessly.',
    author: 'Cyclesync Technologies',
    caseType: 'Mobility Solutions',
    logo: '/images/testimonials/cyclesync.jpg',
  },
  {
    rating: 5,
    feedback:
      'Protecting our brand identity was a key role for Nexpeak. Their IPR guidance made complex processes simple.',
    author: 'TheBestDay',
    caseType: 'Event Management',
    logo: '/images/testimonials/thebestday.jpg',
  },
];

const formBackgroundImage =
  '/assets/img/shape/testimonials-v1-shape1.png';

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
            <div className="col-xl-8">
              <div className="testimonials-one__content">
                <div className="text-center sec-title">
                  <div className="sub-title center">
                    <div className="icon">
                      <img
                        src="/assets/img/icon/sec-title-img1.png"
                        alt=""
                      />
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
                  loop
                  pagination={{ clickable: true }}
                  modules={[Autoplay, Pagination]}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                >
                  {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                      <div className="testimonials-one__single">
                        <div className="testimonials-one__single-inner">
                          <div
                            className="icon-box d-flex justify-content-center align-items-center rounded-circle bg-light"
                            style={{
                              width: '80px',
                              height: '80px',
                              margin: '0 auto',
                            }}
                          >
                            <img
                              src={testimonial.logo}
                              alt={testimonial.author}
                              className="rounded-circle"
                              style={{
                                width: '70px',
                                height: '70px',
                                objectFit: 'contain',
                              }}
                            />
                          </div>

                          <div className="content-box">
                            <div className="rating-box">
                              {Array.from(
                                { length: testimonial.rating },
                                (_, i) => (
                                  <i
                                    className="icon-icon-21"
                                    key={i}
                                  ></i>
                                )
                              )}
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
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Testimonials One */}

      <style jsx>{`
        .icon-box {
          margin-bottom: 15px;
        }
      `}</style>
    </>
  );
}
