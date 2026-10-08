import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { CheckCircle } from "react-bootstrap-icons";
import assets from "../assets/Images01/smart02.png";

const aboutPoints = [
  "AMOLED HD Display",
  "Real-Time Health Monitoring",
  "Bluetooth Calling",
  "10-Day Battery Life",
  "Water Resistant (5 ATM)",
  "Android & iOS Compatible",
];

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <Container>
        {/* 🟢 FIXED: Removed custom inline gap rule style to protect the grid system */}
        <Row className="align-items-center justify-content-between">
          
          {/* Image Column (Set to lg={5} for exact column allocation spacing) */}
          <Col lg={5} className="d-flex justify-content-center mb-4 mb-lg-0">
            <div className="about-image-frame">
              <img src={assets} alt="SmartWatch Pro" className="img-fluid" />
            </div>
          </Col>

          {/* Content Column (Adjusted to lg={6} to leave a natural grid spacing gap channel) */}
          <Col lg={6}>
            <div className="about-content-wrapper">
              <span className="section-eyebrow">ABOUT</span>
              <h2 className="section-title">
                About SmartWatch Pro
              </h2>
              <p className="section-subtitle">
                SmartWatch Pro is designed to help you stay connected, monitor your health,
                and achieve your fitness goals. With its elegant design and advanced technology,
                it's the perfect companion for work, workouts, and everyday life.
              </p>

              <Row className="gy-3 gx-4 mt-2 mb-4">
                {aboutPoints.map((point, i) => (
                  <Col xs={12} sm={6} key={i}>
                    <div className="d-flex align-items-center gap-2 py-1">
                      <CheckCircle size={18} className="text-success-custom" />
                      <span className="point-text">{point}</span>
                    </div>
                  </Col>
                ))}
              </Row>

              <Button href="#pricing" className="btn-smart-primary">
                Learn More
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
