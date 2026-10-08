import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Watch } from "react-bootstrap-icons";

const NavigationBar = () => {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="smart-navbar"
    >
      <Container>
        {/* Brand Logo and Title */}
        <Navbar.Brand href="#home" className="smart-brand">
          <Watch size={24} strokeWidth={2.5} />
          <span>SmartWatch</span>
        </Navbar.Brand>

        {/* Mobile Toggle Button */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Nav Links Container */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-lg-center smart-nav">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#testimonials">Reviews</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            
            {/* 
              FIXED: Removed the nested <Button> inside <Nav.Link>.
              Using 'as={Link}' formats this item correctly as a single valid React Router link element,
              while using your custom '.navbar-cta' CSS class for proper button styling.
            */}
            <Nav.Link as={Link} to="/login" className="navbar-cta">
              Admin Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
