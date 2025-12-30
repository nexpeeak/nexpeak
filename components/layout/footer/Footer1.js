'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-area footer-bg">
      <div className="container py-5">
        <div className="row">
          {/* Logo & Description */}
          <div className="mb-4 col-lg-4 col-md-6">
            <div className="footer-widget logo-widget">
              <Link href="/">
                {/* Replace with your actual logo path */}
                <Image
                  src="/images/logo.png"
                  alt="Nexpeak Logo"
                  width={160}
                  className='bg-white'
                  height={80}
                />
              </Link>
              <p className="mt-3 ">
               Nexpeak is a client-focused legal firm serving businesses across
Delhi, Gurugram, and India with expert legal and compliance solutions.

              </p>
              <div className="mt-4 social-links">
                <Link href="https://www.facebook.com/nexpeaklawfirm" aria-label="Facebook">
                  <Facebook size={24} className="social-icon" />
                </Link>
               
                <Link href="https://www.linkedin.com/company/nexpeaklawfirm/" aria-label="LinkedIn">
                  <Linkedin size={24} className="social-icon" />
                </Link>
                <Link href="https://www.instagram.com/nexpeaklawfirm/" aria-label="Instagram">
                  <Instagram size={24} className="social-icon" />
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-4 col-lg-2 col-md-6">
            <div className="footer-widget links-widget">
              <h4 className="footer-heading">Our Services</h4>
              <ul className="list-unstyled">
                <li>
                  <Link href="/startup-advisory">Startup & Incorporation</Link>
                </li>
                <li>
                  <Link href="/contract-drafting">Contract Drafting</Link>
                </li>
                <li>
                  <Link href="/intellectual-property">IPR & Brand Protection</Link>
                </li>
                <li>
                  <Link href="/compliance-management">Compliance Management</Link>
                </li>
                <li>
                  <Link href="/taxation-compliance">Tax & Financial Compliance</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-4 col-lg-3 col-md-6">
            <div className="footer-widget contact-widget">
              <h4 className="footer-heading">Contact Us</h4>
              <ul className="list-unstyled">
                <li>
                  <MapPin size={20} className="icon me-2" />
                  Two Horizon, Gurugram, 122002
                </li>
                <li>
                  <MapPin size={20} className="icon me-2" />
                  Vivekanand Puri, New Delhi, 110052
                </li>
                <li>
                  <MapPin size={20} className="icon me-2" />
                  Statesment House, Delhi 110001
                </li>
                <li>
                  <a href="tel:+919027667840">
                    <Phone size={20} className="icon me-2" />
                    +91 9027667840
                  </a>
                </li>
                <li>
                  <a href="mailto:nexpeaklawfirm@gmail.com">
                    <Mail size={20} className="icon me-2" />
                    nexpeaklawfirm@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Business Hours */}
          <div className="mb-4 col-lg-3 col-md-6">
            <div className="footer-widget hours-widget">
              <h4 className="footer-heading">Business Hours</h4>
              <ul className="list-unstyled">
                <li>
                  <strong>Opening Days:</strong>
                </li>
                <li>Monday – Friday: 9am to 8pm</li>
                <li>Saturday: 9am to 5pm</li>
                <li className="mt-3">
                  <strong>Vacations:</strong>
                </li>
                <li>All Sundays & Official Holidays</li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        {/* Footer Bottom Section */}
        <div className="row align-items-center">
          <div className="mb-3 text-center col-md-6 text-md-start mb-md-0">
            <ul className="mb-0 list-inline">
              <li className="list-inline-item me-4">
                <Link href="/privacy-policy" className="text-decoration-none">
                  Privacy Policy
                </Link>
              </li>
              <li className="list-inline-item me-4">
                <Link href="/terms-condition" className="text-decoration-none">
                  Terms & Conditions
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="/cookie-policy" className="text-decoration-none">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center col-md-6 text-md-end">
            <p className="mb-0">
              &copy; 2025 Nexpeak. All rights reserved. Designed by{' '}
              <a
                href="https://www..in"
                target="_blank"
                rel="noopener noreferrer"
              >
                LeaniTech 
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
