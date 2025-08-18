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
              <img src="/assets/img/resource/logo-3.png" alt="Logo" />
            </Link>
          </div>
          <div className="menu-outer">
            <ul className="navigation">
              {/* Home Menu */}
              <li className={isActive.key === 1 ? "active menu-item-has-children" : "menu-item-has-children"}>
                <Link href="#" onClick={handleMobileMenu}>Home</Link>
                <ul className="sub-menu" style={{ display: isActive.key === 1 ? "block" : "none" }}>
                  <li><Link href="/" onClick={handleMobileMenu}>Home One</Link></li>
                  <li><Link href="/index-2" onClick={handleMobileMenu}>Home Two</Link></li>
                  <li><Link href="/index-3" onClick={handleMobileMenu}>Home Three</Link></li>
                  <li><Link href="/index-one-page" onClick={handleMobileMenu}>One Page Style1</Link></li>
                  <li><Link href="/index2-one-page" onClick={handleMobileMenu}>One Page Style2</Link></li>
                  <li><Link href="/index3-one-page" onClick={handleMobileMenu}>One Page Style3</Link></li>
                </ul>
                <div className={isActive.key === 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}>
                  <span className="fa fa-angle-right"></span>
                </div>
              </li>

              {/* About Menu */}
              <li>
                <Link href="/about" onClick={handleMobileMenu}>About</Link>
              </li>

              {/* Services Menu */}
              <li className={isActive.key === 2 ? "menu-item-has-children active" : "menu-item-has-children"}>
                <Link href="#" onClick={handleMobileMenu}>Services</Link>
                <ul className="sub-menu" style={{ display: isActive.key === 2 ? "block" : "none" }}>
                  <li><Link href="/service" onClick={handleMobileMenu}>Services</Link></li>
                  <li><Link href="/criminal-case" onClick={handleMobileMenu}>Criminal Case</Link></li>
                  <li><Link href="/family-violence" onClick={handleMobileMenu}>Family Violence</Link></li>
                  <li><Link href="/business-law" onClick={handleMobileMenu}>Business Law</Link></li>
                  <li><Link href="/health-care" onClick={handleMobileMenu}>Health Care Law</Link></li>
                  <li><Link href="/insurance-law" onClick={handleMobileMenu}>Insurance Law</Link></li>
                  <li><Link href="/real-estate" onClick={handleMobileMenu}>Real Estate Law</Link></li>
                </ul>
                <div className={isActive.key === 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(2)}>
                  <span className="fa fa-angle-right"></span>
                </div>
              </li>

              {/* Pages Menu */}
              <li className={isActive.key === 3 ? "menu-item-has-children active" : "menu-item-has-children"}>
                <Link href="#" onClick={handleMobileMenu}>Pages</Link>
                <ul className="sub-menu" style={{ display: isActive.key === 3 ? "block" : "none" }}>
                  <li><Link href="/case" onClick={handleMobileMenu}>Case</Link></li>
                  <li><Link href="/case-details" onClick={handleMobileMenu}>Case Details</Link></li>
                  <li><Link href="/team" onClick={handleMobileMenu}>Team</Link></li>
                  <li><Link href="/pricing" onClick={handleMobileMenu}>Price</Link></li>
                  <li><Link href="/faq" onClick={handleMobileMenu}>FAQ</Link></li>
                </ul>
                <div className={isActive.key === 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}>
                  <span className="fa fa-angle-right"></span>
                </div>
              </li>

              {/* Blog Menu */}
              <li className={isActive.key === 4 ? "menu-item-has-children active" : "menu-item-has-children"}>
                <Link href="#" onClick={handleMobileMenu}>Blog</Link>
                <ul className="sub-menu" style={{ display: isActive.key === 4 ? "block" : "none" }}>
                  <li><Link href="/blog" onClick={handleMobileMenu}>Blog</Link></li>
                  <li><Link href="/blog-details" onClick={handleMobileMenu}>Blog Details</Link></li>
                </ul>
                <div className={isActive.key === 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4)}>
                  <span className="fa fa-angle-right"></span>
                </div>
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
            <p><a href="tel:123456789">(629) 555-0129</a></p>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <ul className="clearfix list-wrap">
              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href="#"><i className="fab fa-youtube"></i></a></li>
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
