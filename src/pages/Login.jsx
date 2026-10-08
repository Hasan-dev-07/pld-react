import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import loginSchema from "../validation/loginSchema";


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      if (values.username === "admin" && values.password === "admin123") {
        dispatch(login({ username: values.username }));
        toast.success("Login Successful");
        navigate("/dashboard");
      } else {
        toast.error("Invalid Username or Password");
      }
    },
  });

  return (
    <div className="login-page-bg d-flex justify-content-center align-items-center">
      <Container>
        <Row className="justify-content-center w-100 m-0">
          <Col md={6} lg={4} className="p-0">
            <Card className="login-card-custom">
              <Card.Body className="p-5">
                
                {/* Header Icon Block */}
                <div className="d-flex flex-column align-items-center mb-4">
                  <div className="login-icon-banner mb-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                  <h2 className="login-title m-0">Admin Login</h2>
                  <p className="login-subtitle">Sign in to access the dashboard</p>
                </div>

                {/* Demo Credentials Instruction Banner */}
                <div className="login-alert-banner p-3 text-center mb-4">
                  Demo credentials: <span className="fw-bold">admin</span> / <span className="fw-bold">admin123</span>
                </div>

                <Form onSubmit={formik.handleSubmit}>
                  {/* Username Group */}
                  <Form.Group className="mb-3">
                    <Form.Label className="login-form-label">Username</Form.Label>
                    <div className="login-input-wrapper">
                      <span className="login-input-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </span>
                      <Form.Control
                        type="text"
                        name="username"
                        placeholder="Enter username"
                        className="login-input-control"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={formik.touched.username && !!formik.errors.username}
                      />
                      <Form.Control.Feedback type="invalid" className="ps-1">
                        {formik.errors.username}
                      </Form.Control.Feedback>
                    </div>
                  </Form.Group>

                  {/* Password Group */}
                  <Form.Group className="mb-4">
                    <Form.Label className="login-form-label">Password</Form.Label>
                    <div className="login-input-wrapper">
                      <span className="login-input-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                      </span>
                      <Form.Control
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        className="login-input-control"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={formik.touched.password && !!formik.errors.password}
                      />
                      <Form.Control.Feedback type="invalid" className="ps-1">
                        {formik.errors.password}
                      </Form.Control.Feedback>
                    </div>
                  </Form.Group>

                  {/* Submit Action */}
                  <div className="d-grid">
                    <Button type="submit" className="login-submit-button">
                      Sign In
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;




