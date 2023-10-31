import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const job = () => {
  return (
    <Container className="my-4">
      <Row>
        <Col md={8}>
          <Card>
            <Card.Body>
              <h2>Software Developer</h2>
              <p>
                We are looking for a passionate and talented Software Developer
                to join our team.
              </p>
              <h3>Job Description</h3>
              <ul>
                <li>
                  Design and develop web applications using JavaScript and React
                </li>
                <li>
                  Collaborate with the development team to implement new
                  features
                </li>
                <li>Optimize applications for maximum performance</li>
                <li>Write clean, maintainable, and efficient code</li>
              </ul>
              <h3>Requirements</h3>
              <ul>
                <li>Bachelor's degree in Computer Science or related field</li>
                <li>
                  Proficiency in JavaScript, React, and related technologies
                </li>
                <li>Strong problem-solving skills</li>
                <li>Excellent communication and teamwork abilities</li>
              </ul>
              <Button variant="primary">Apply Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <h3>Hiring Manager</h3>
              <img
                src="manager.jpg"
                alt="Hiring Manager"
                className="img-fluid rounded-circle"
              />
              <h4>Jane Doe</h4>
              <p>Email: janedoe@example.com</p>
              <p>Phone: (555) 123-4567</p>
            </Card.Body>
          </Card>
          <Card className="mt-4">
            <Card.Body>
              <h3>Company</h3>
              <img
                src="company_logo.png"
                alt="Company Logo"
                className="img-fluid"
              />
              <h4>Acme Software Solutions</h4>
              <p>Location: New York, NY</p>
              <p>
                Website:{" "}
                <a href="https://www.acmesoftware.com" target="www.google.com">
                  www.acmesoftware.com
                </a>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default job;
