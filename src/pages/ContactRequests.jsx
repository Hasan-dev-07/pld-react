import React, { useState } from "react";
import { Card, Row, Col, Form, Table, Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { deleteContact } from "../redux/contactSlice";

const ContactRequests = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);

  const [nameSearch, setNameSearch] = useState("");
  const [emailSearch, setEmailSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);

  const filteredContacts = [...contacts]
    // Search by Name
    .filter((contact) =>
      contact.name.toLowerCase().includes(nameSearch.toLowerCase())
    )
    // Search by Email
    .filter((contact) =>
      contact.email.toLowerCase().includes(emailSearch.toLowerCase())
    )
    // Sort by Name
    .sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (sortOrder === "asc") {
        return nameA.localeCompare(nameB);
      }
      return nameB.localeCompare(nameA);
    });

  // ==========================================
  // View Message
  // ========================================== 
  const handleViewMessage = (contact) => {
    setSelectedContact(contact);
    setShowMessageModal(true);
  };

  // ==========================================
  // Close Message Modal
  // ==========================================
  const handleCloseMessageModal = () => {
    setShowMessageModal(false);
    setSelectedContact(null);
  };

  // ==========================================
  // Open Delete Modal
  // ==========================================
  const handleDeleteClick = (contact) => {
    setContactToDelete(contact);
    setShowDeleteModal(true);
  };

  // ==========================================
  // Close Delete Modal
  // ==========================================
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setContactToDelete(null);
  };

  // ==========================================
  // Confirm Delete
  // ==========================================
  const handleConfirmDelete = () => {
    if (!contactToDelete) {
      return;
    }
    dispatch(deleteContact(contactToDelete.id));
    toast.success("Contact deleted successfully");
    setShowDeleteModal(false);
    setContactToDelete(null);
  };

  return (
    <>
      {/* =====================================
            Contact Requests
        ====================================== */}
      <Card className="shadow-sm border-0">
        {/* Card Header */}
        <Card.Header className="bg-white py-3">
          <h5 className="mb-0">Contact Requests</h5>
        </Card.Header>
        <Card.Body>
          {/* =================================
                Search & Sort
            ================================== */}
          <Row className="mb-4">
            {/* Search by Name */}
            <Col md={4} className="mb-3">
              <Form.Label>Search by Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name..."
                value={nameSearch}
                onChange={(e) => setNameSearch(e.target.value)}
              />
            </Col>
            {/* Search by Email */}
            <Col md={4} className="mb-3">
              <Form.Label>Search by Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email..."
                value={emailSearch}
                onChange={(e) => setEmailSearch(e.target.value)}
              />
            </Col>
            {/* Sort by Name */}
            <Col md={4} className="mb-3">
              <Form.Label>Sort by Name</Form.Label>
              <Form.Select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="asc">Name A → Z</option>
                <option value="desc">Name Z → A</option>
              </Form.Select>
            </Col>
          </Row>

          {/* =================================
                Contact Table
            ================================== */}
          {filteredContacts.length === 0 ? (
            <div className="text-center py-5">
              <h5 className="text-muted">No Contact Requests Found</h5>
              <p className="text-muted mb-0">
                There are no contact requests matching your search.
              </p>
            </div>
          ) : (
            <div className="table-responsive">
              <Table striped bordered hover className="align-middle">
                {/* Table Header */}
                <thead className="table-dark">
                  <tr>
                    <th> # </th>
                    <th> Name </th>
                    <th> Email </th>
                    <th> Message </th>
                    <th>Submitted Date </th>
                    <th> Actions </th>
                  </tr>
                </thead>
                {/* Table Body */}
                <tbody>
                  {filteredContacts.map((contact, index) => (
                    <tr key={contact.id}>
                      {/* Number */}
                      <td>{index + 1}</td>
                      {/* Name */}
                      <td>
                        <strong>{contact.name}</strong>
                      </td>
                      {/* Email */}
                      <td>{contact.email}</td>
                      {/* Message */}
                      <td>
                        <Button
                          variant="outline-primary"
                          size="sm"
                          onClick={() => handleViewMessage(contact)}
                        >
                          View Message
                        </Button>
                      </td>
                      {/* Submitted Date */}
                      <td>{contact.submittedAt}</td>
                      {/* Actions */}
                      <td>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleDeleteClick(contact)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </Card.Body>
      </Card>

      {/* =====================================
            VIEW MESSAGE MODAL
        ====================================== */}
      <Modal
        show={showMessageModal}
        onHide={handleCloseMessageModal}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Contact Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedContact && (
            <>
              <p>
                <strong>Name:</strong> {selectedContact.name}
              </p>
              <p>
                <strong>Email:</strong> {selectedContact.email}
              </p>
              <p>
                <strong>Submitted Date:</strong> {selectedContact.submittedAt}
              </p>
              <hr />
              <p>
                <strong>Message:</strong>
              </p>
              <div className="p-3 bg-light rounded border">
                {selectedContact.message || (
                  <em className="text-muted">No message provided.</em>
                )}
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClAdminick={handleCloseMessageModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* =====================================
            DELETE CONFIRMATION MODAL
        ====================================== */}
      <Modal
        show={showDeleteModal}
        onHide={handleCloseDeleteModal}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete the contact request from{" "}
          <strong>{contactToDelete?.name}</strong> ({contactToDelete?.email})? This action cannot be undone.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ContactRequests;

