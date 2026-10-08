import React from "react";

import NavigationBar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="landing-page">

      <NavigationBar />

      <Hero />

      <Features />

      <About />

      <Pricing />

      <Testimonials />

      <Contact />

      <Footer />

    </div>
  );
};

export default LandingPage;