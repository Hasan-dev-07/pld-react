import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Check } from "react-bootstrap-icons" ;

const plans = [
  {
    name: "Basic",
    price: 199,
    period: "/month",
    features: ["Heart rate monitor", "Step tracking", "Basic notifications", "5-day battery"],
    popular: false,
  },
  {
    name: "Pro",
    price: 299,
    period: "/month",
    features: ["All Basic features", "GPS tracking", "Advanced health metrics", "7-day battery", "Water resistant"],
    popular: true,
  },
  {
    name: "Premium",
    price: 399,
    period: "/month",
    features: ["All Pro features", "ECG monitoring", "Fall detection", "Priority support", "Extended warranty"],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-pro" >
      <Container>
        <div className="text-center mb-5">
          <span className="section-eyebrow">Pricing</span>
          <h2 className="section-title">Choose the plan that fits your lifestyle</h2>
          <p className="section-subtitle">
            Transparent pricing with no hidden fees. Upgrade or cancel anytime.
          </p>
        </div>
        <Row className="g-4 justify-content-center">
          {plans.map((plan, i) => (
            <Col md={6} lg={4} key={i}>
              <div className={`pricing-card position-relative ${plan.popular ? "popular" : ""}`}>
                {plan.popular && <span className="pricing-badge">Most Popular</span>}
                <h5 className="pricing-plan-name mb-3">{plan.name}</h5>
                <div className="mb-4">
                  <span className="pricing-price">${plan.price}</span>
                  <span>{plan.period}</span>
                </div>
                <ul className="pricing-features">
                  {plan.features.map((feat, j) => (
                    <li key={j}>
                      <Check size={18} /> {feat}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-100 py-2 ${plan.popular ? "btn-smart-primary" : "btn-smart-outline"}`}
                >
                  Choose {plan.name}
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Pricing;
