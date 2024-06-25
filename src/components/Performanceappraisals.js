import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, Table, Card, CardBody, CardHeader } from 'react-bootstrap';

function Performanceappraisals() {
  const [performanceReviews, setPerformanceReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null);
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    // Fetch performance reviews from API
    fetch('/api/performance-reviews')
      .then(response => response.json())
      .then(data => setPerformanceReviews(data));
  }, []);

  useEffect(() => {
    // Fetch performance metrics from API
    fetch('/api/performance-metrics')
      .then(response => response.json())
      .then(data => setMetrics(data));
  }, []);

  const handleSelectReview = (review) => {
    setSelectedReview(review);
  };

  const handleSaveReview = (review) => {
    // Save review to API
    fetch('/api/performance-reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(review),
    })
      .then(response => response.json())
      .then(data => setPerformanceReviews([...performanceReviews, data]));
  };

  return (
    <Container fluid className="px-5 py-5">
      <Row className="justify-content-center">
        <Col md={4} className="mb-4">
          <Card>
            <CardHeader>
              <h2>Performance Review List</h2>
            </CardHeader>
            <CardBody>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Employee</th>
                    <th>Review Date</th>
                    <th>Feedback</th>
                  </tr>
                </thead>
                <tbody>
                  {performanceReviews.map((review, index) => (
                    <tr key={index} onClick={() => handleSelectReview(review)}>
                      <td>{review.employee}</td>
                      <td>{review.reviewDate}</td>
                      <td>{review.feedback}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <CardHeader>
              <h2>Performance Review Form</h2>
            </CardHeader>
            <CardBody>
              <Form>
                <Form.Group controlId="employee">
                  <Form.Label>Employee</Form.Label>
                  <Form.Control type="text" placeholder="Enter employee name" />
                </Form.Group>
                <Form.Group controlId="reviewDate">
                  <Form.Label>Review Date</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
                <Form.Group controlId="rating">
                  <Form.Label>Feedback</Form.Label>
                  <Form.Control type="text"placeholder="Enter your feedback"/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSaveReview}>
                  Save Review
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <CardHeader>
              <h2>Performance Metrics</h2>
            </CardHeader>
            <CardBody>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th> Metric</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(metrics).map((metric, index) => (
                    <tr key={index}>
                      <td>{metric}</td>
                      <td>{metrics[metric]}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Performanceappraisals;