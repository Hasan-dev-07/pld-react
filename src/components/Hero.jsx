import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ArrowRight, CheckCircle } from "react-bootstrap-icons";


const SMARTWATCH_IMAGE_URL = "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?fm=jpg&q=80&w=1200&auto=format&fit=crop";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
     
   

      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="hero-copy">
              <span className="hero-eyebrow">Next-gen wearable</span>
              <h1 className="hero-title">
                Your Health,
                <span>Perfectly Timed</span>
              </h1>
              <p className="hero-description mb-4">
                The SmartWatch Pro brings advanced health tracking, seamless connectivity,
                and a stunning AMOLED display to your wrist. Live smarter, move freely, and
                stay connected — all day long.
              </p>
              <div className="hero-actions d-flex flex-wrap gap-3">
                <Button href="#pricing" className="btn-smart-primary px-4">
                  Buy Now <ArrowRight size={18} className="ms-2" />
                </Button>
                <Button href="#features" className="btn-smart-outline"  >
                  Explore Features
                </Button>
              </div>
              <div className="hero-highlights">
                <span className="hero-highlight"><CheckCircle size={17} /> 24/7 Heart Rate</span>
                <span className="hero-highlight"><CheckCircle size={17} /> 7-Day Battery</span>
                <span className="hero-highlight"><CheckCircle size={17} /> Water Resistant</span>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className="hero-product-frame">
              <img src={SMARTWATCH_IMAGE_URL} alt="SmartWatch Pro" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
