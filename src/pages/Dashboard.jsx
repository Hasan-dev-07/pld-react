import React from "react";
 import { Container,  Badge,  Row, Col,  Card, Button,}from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
 import { logout } from "../redux/authSlice";
import ContactRequests from "./ContactRequests";
 const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Get contact data from Redux
  const contacts = useSelector(
    (state) => state.contacts.contacts
  );

  // Get logged-in admin
  const user = useSelector(
    (state) => state.auth.user
  );

  // Logout
  const handleLogout = () => {
    dispatch(logout());

    toast.success("Logged out successfully");

    navigate("/login");
  };

  return (
    <div className="bg-light min-vh-100">

      {/* =================================
          Dashboard Header
      ================================= */}

      <div className="bg-dark text-white py-3">
        <Container>

          <div className="d-flex justify-content-between align-items-center">

            {/* Title */}

            <div>
              <h4 className="mb-0">
                Admin Dashboard
              </h4>

            
            </div>


            {/* Admin + Logout */}

            <div className="d-flex align-items-center gap-3">

            

              <Button
                variant="outline-light"
                size="sm"
                onClick={handleLogout}
              >
                Logout
              </Button>

            </div>

          </div>

        </Container>
      </div>


      {/* =================================
          Dashboard Content
      ================================= */}

      <Container className="py-5">

        {/* =================================
            Statistics
        ================================= */}

        <Row className="mb-4">

          {/* Total Contacts */}

          <Col
            md={4}
            className="mb-3"
          >

            <Card className="shadow-sm border-0 h-100">

              <Card.Body>

                <h6 className="text-muted">
                  Total Contacts
                </h6>

                <h2 className="fw-bold">
                  {contacts.length}
                </h2>

                <Badge bg="primary">
                  Contact Requests
                </Badge>

              </Card.Body>

            </Card>

          </Col>


          {/* Admin Status */}

          <Col
            md={4}
            className="mb-3"
          >

            <Card className="shadow-sm border-0 h-100">

              <Card.Body>

                <h6 className="text-muted">
                  Admin Status
                </h6>

                <h4 className="fw-bold">
                  Active
                </h4>

                <Badge bg="success">
                  Logged In
                </Badge>

              </Card.Body>

            </Card>

          </Col>


        
        </Row>


        {/* =================================
            Contact Requests
        ================================= */}

        <ContactRequests />

      </Container>

    </div>
  );
};

export default Dashboard;





