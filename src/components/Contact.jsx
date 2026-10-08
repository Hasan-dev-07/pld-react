import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactSlice";
import { toast } from "react-toastify";
import contactSchema from "../validation/contactSchema";

const Contact = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(addContact(values));
      toast.success("Contact request submitted successfully!");
      resetForm();
      console.log("Contact request submitted:", values);
    },
  });

  return (
    <section id="contact" className="py-5 d-flex align-items-center" >
      <Container>
        {/* Top Header Region Matching UI Layout */}
        <Row className="justify-content-center text-center mb-4">
          <Col md={8} lg={6}>
            <span className="contact-badge text-uppercase tracking-wider">
              Contact
            </span>
            <h1 className="contact-heading mt-3 mb-2">
              Get in touch with us
            </h1>
            <p className="contact-subheading">
              Have questions about SmartWatch Pro? We're here to help.
            </p>
          </Col>
        </Row>

        {/* Central Form Card */}
        <Row className="justify-content-center">
          <Col md={8} lg={6} xl={5}>
            <Card className="contact-card border-0">
              <Card.Body className="p-4 p-sm-5">
                <Form onSubmit={formik.handleSubmit}>
                  {/* Name Input Group */}
                  <Form.Group className="mb-4">
                    <Form.Label className="contact-label">Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={formik.touched.name && !!formik.errors.name}
                      className="contact-input"
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Email Input Group */}
                  <Form.Group className="mb-4">
                    <Form.Label className="contact-label">Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Your email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={formik.touched.email && !!formik.errors.email}
                      className="contact-input"
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Message Input Group */}
                  <Form.Group className="mb-4">
                    <Form.Label className="contact-label">Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      placeholder="Your message"
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={formik.touched.message && !!formik.errors.message}
                      className="contact-input contact-textarea"
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Submit Action Button */}
                  <div className="d-grid mt-4">
                    <Button type="submit" className="contact-submit-btn border-0 py-3">
                      Send Message
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;