import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Star } from "react-bootstrap-icons";

const testimonials = [
  {
    name: "Raja",
    role: "Fitness Enthusiast",
    text: "The SmartWatch Pro completely changed how I track my workouts. The heart rate monitor is incredibly accurate and the battery lasts all week.",
    rating: 5,
  },
  {
    name: "Syed",
    role: "Marathon Runner",
    text: "GPS tracking and battery life are top-notch. I never run without my SmartWatch Pro now — it's become essential to my training.",
    rating: 5,
  },
  {
    name: "Leo",
    role: "Busy Professional",
    text: "Smart notifications keep me connected without reaching for my phone. The sleek design goes with everything in my wardrobe.",
    rating: 4,
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="landing-section">
      <Container>
        <div className="text-center mb-5">
          <span className="section-eyebrow">Testimonials</span>
          <h2 className="section-title">Loved by thousands of customers</h2>
          <p className="section-subtitle">
            See what our community says about life with SmartWatch Pro.
          </p>
        </div>

        <Row className="g-4">
          {testimonials.map((t, i) => (
            <Col xs={12} sm={6} lg={4} key={i}>
              <div className="testimonial-card h-100">
                <div className="testimonial-stars">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      size={18}
                      className={j < t.rating ? "text-warning" : "text-muted"}
                      fill={j < t.rating ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="d-flex align-items-center">
                  <div className="testimonial-avatar d-flex align-items-center justify-content-center me-3">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="testimonial-name">{t.name}</p>
                    <small className="testimonial-role">{t.role}</small>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
