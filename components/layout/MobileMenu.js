"use client";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };

  return (
    <>
      <div className="mobile-menu">
        <nav className="menu-box">
          <div className="close-btn" onClick={handleMobileMenu}>
            <i className="fas fa-times"></i>
          </div>
          <div className="nav-logo">
            <Link href="/">
              <img src="/images/logo.png" alt="Logo" />
            </Link>
          </div>
          <div className="menu-outer">
            <ul className="navigation">
              {/* Home Menu */}
              <li >
                <Link href="#" onClick={handleMobileMenu}>Home</Link>
               
              </li>

              {/* About Menu */}
              <li>
                <Link href="/about" onClick={handleMobileMenu}>About Us</Link>
              </li>

              {/* Services Menu */}
              <li >
                <Link href="/service" onClick={handleMobileMenu}>Services</Link>
               
              </li>
                
              {/* Teams Menu */}
              <li>
                <Link href="/team" onClick={handleMobileMenu}>Teams</Link>
              </li>

              {/* Pricing Menu */}
              <li>
                <Link href="/pricing" onClick={handleMobileMenu}>Pricing</Link>
              </li>

              {/* Contact Menu */}
              <li>
                <Link href="/contact" onClick={handleMobileMenu}>Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="contact-info">
            <div className="icon-box">
              <span className="icon-icon-48"></span>
            </div>
            <p><a href="tel:+919027667840">+91 9027667840</a></p>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <ul className="clearfix list-wrap">
              <li><a href="https://www.facebook.com/nexpeaklawfirm"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="
https://www.instagram.com/nexpeaklawfirm/
"><i className="fab fa-instagram"></i></a></li>
              <li><a href="https://www.linkedin.com/company/nexpeaklawfirm/"><i className="fab fa-linkedin-in"></i></a></li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Menu Backdrop */}
      <div className="menu-backdrop" onClick={handleMobileMenu}></div>
    </>
  );
};

export default MobileMenu;