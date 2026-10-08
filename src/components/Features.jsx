import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Activity, HeartPulse, Bell, BatteryCharging, Watch, Phone } from "react-bootstrap-icons";

const features = [
  { icon: HeartPulse, title: "Heart Rate Monitor", desc: "Real-time heart rate tracking with smart alerts to keep you informed all day." },
  { icon: Activity, title: "Fitness Tracking", desc: "Track steps, calories, and workouts automatically — your personal coach on your wrist." },
  { icon: Bell, title: "Smart Notifications", desc: "Never miss a call, message, or reminder with gentle on-wrist notifications." },
  { icon: Phone, title: "App Integration", desc: "Seamlessly connect with iOS and Android via the SmartWatch companion app." },
  { icon: BatteryCharging, title: "Long Battery Life", desc: "Up to 7 days of use on a single charge — less plugging in, more moving." },
  { icon: Watch, title: "Sleek Design", desc: "Premium build with a comfortable, modern look that fits any occasion." },
];

const Features = () => {
  return (
    <section id="features" className="features-section">
      <Container>
        <div className="text-center mb-5">
          <div><span className="section-eyebrow">Features</span></div><br />
          <h2 className="section-title">Everything you need, right on your wrist</h2>
          <p className="section-subtitle">
            Powerful sensors, a vibrant display, and thoughtful software come together
            to keep you healthy, connected, and in style.
          </p>
        </div>
        <Row className="g-4">
          {features.map((f, i) => (
            <Col md={6} lg={4} key={i}>
              <div className="feature-card">
                <div className="feature-icon">
                  <f.icon size={22} />
                </div>
                <h5>{f.title}</h5>
                <p>{f.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
