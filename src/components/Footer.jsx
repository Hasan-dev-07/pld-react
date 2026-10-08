import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn,FaRegEnvelope,FaPhoneAlt,} from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { LuWatch } from "react-icons/lu";


const Footer = () => {
  return (
    <footer className="smw-footer pt-5 pb-4">
      <Container>
        <Row className="gy-4 justify-content-between">
          
          {/* Brand & Social Segment */}
          <Col lg={4} md={6}>
            <div className="d-flex align-items-center gap-2 mb-3">
              <LuWatch className="text-primary" size={24} />
              <h4 className="smw-brand-title fw-bold m-0">SmartWatch</h4>
            </div>
            
            <p className="smw-footer-text mb-4 pe-lg-4">
              The ultimate wearable for a healthier, more connected life. Track your fitness, stay in touch, and live smarter.
            </p>
            
            <div className="d-flex gap-2">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="smw-social-icon">
                <FaFacebookF size={14} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="smw-social-icon">
                <FaTwitter size={14} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="smw-social-icon">
                <FaInstagram size={14} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="smw-social-icon">
                <FaLinkedinIn size={14} />
              </a>
            </div>
          </Col>

          {/* Product Link Segment */}
          <Col lg={2} md={6} className="ps-lg-4">
            <h6 className="smw-footer-heading">Product</h6>
            <div className="d-flex flex-column gap-2">
              <div>
                <a href="#features" className="smw-inline-links">Features</a>
                <a href="#about" className="smw-inline-links ms-2">About</a>
                <a href="#pricing" className="smw-inline-links ms-2">Pricing</a>
              </div>
              <div>
                <a href="#reviews" className="smw-inline-links">Reviews</a>
              </div>
            </div>
          </Col>

          {/* Company Link Segment */}
          <Col lg={2} md={6}>
            <h6 className="smw-footer-heading">Company</h6>
            <div className="d-flex flex-column gap-2">
              <div>
                <a href="#careers" className="smw-inline-links">Careers</a>
                <a href="#blog" className="smw-inline-links ms-2">Blog</a>
                <a href="#press" className="smw-inline-links ms-2">Press</a>
              </div>
              <div>
                <a href="/login" className="smw-inline-links">Admin Login</a>
              </div>
            </div>
          </Col>

          {/* Contact Details Segment */}
          <Col lg={3} md={6}>
            <h6 className="smw-footer-heading">Contact</h6>
            <div className="d-flex flex-column gap-3">
              <div className="smw-contact-item">
                <FaRegEnvelope className="smw-contact-icon" size={16} />
                <span>support@smartwatch.com</span>
              </div>
              <div className="smw-contact-item">
                <FaPhoneAlt className="smw-contact-icon" size={14} />
                <span>+ 91 8220968322</span>
              </div>
              <div className="smw-contact-item align-items-start">
                <FiMapPin className="smw-contact-icon mt-1" size={16} />
                <span>Hyderabad,Telangana</span>
              </div>
            </div>
          </Col>

        </Row>

        {/* Global Bottom-bar & Policy Links */}
        <div className="smw-bottom-bar mt-5 pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <p className="smw-footer-text mb-0">
            © {new Date().getFullYear()} SmartWatch. All rights reserved.
          </p>
          <div className="d-flex gap-4">
            <a href="#privacy" className="smw-inline-links text-sm">Privacy Policy</a>
            <a href="#terms" className="smw-inline-links text-sm">Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};  

export default Footer;
