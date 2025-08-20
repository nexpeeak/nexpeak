// components/AppointmentForm.jsx

"use client";

import { useState } from "react";

const formBackgroundImage = "/assets/img/shape/testimonials-v1-shape1.png";
const formActionUrl = "/submit-form";

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    query: "YOUR QUERY*",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically handle the form submission, e.g., send data to an API
  };

  return (
    <div className="testimonials-one__form">
      <div
        className="testimonials-one__form-bg"
        style={{ backgroundImage: `url(${formBackgroundImage})` }}
      ></div>
      <div className="title-box">
        <h2>Free Appointment</h2>
      </div>
      <form method="post" action={formActionUrl} onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="icon-box">
            <span className="icon-icon-17"></span>
          </div>
          <input
            type="text"
            name="username"
            placeholder="YOUR NAME*"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <div className="icon-box">
            <span className="icon-icon-18"></span>
          </div>
          <input
            type="email"
            placeholder="YOUR EMAIL*"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <div className="select-box">
            <select
              className="selectmenu wide"
              name="query"
              value={formData.query}
              onChange={handleChange}
            >
              <option value="YOUR QUERY*">YOUR QUERY*</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Digital Experience">Digital Experience</option>
              <option value="Web applications">Web applications</option>
              <option value="Web development">Web development</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="icon-box">
            <span className="icon-icon-19"></span>
          </div>
          <textarea
            name="message"
            placeholder="MESSAGE HERE*"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="button-box">
              <button className="thm-btn" type="submit" data-loading-text="Please wait...">
                Send Request
                <span className="thm-btn__icon">
                  <i className="icon-icon-8"></i>
                </span>
                <span className="thm-btn__hover-group">
                  <span className="thm-btn__hover thm-btn__hover--1"></span>
                  <span className="thm-btn__hover thm-btn__hover--2"></span>
                  <span className="thm-btn__hover thm-btn__hover--3"></span>
                  <span className="thm-btn__hover thm-btn__hover--4"></span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}