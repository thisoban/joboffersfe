import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button } from "react-bootstrap";



export default function Job()  {
  const [JobData, setJobData] = useState({});
  useEffect(() => {
    const apiUrl = 'http://localhost:4863/Jobs/details?id=1';

    axios.get(apiUrl)
      .then((response) => {
        // Set the jobData state with the API response data
        setJobData(response.data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
      });
  }, []); // The empty dependency array means this effect will run once when the component is mounted.

  return (
    <Container className="my-4">
      <Row>
        <Col md={8}>
          <Card>
            <Card.Body>
              <h2>{JobData.name}</h2>
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
              <h4>{JobData.hiring_Managerid?.name}</h4>
              <p>Email:{JobData.hiring_Managerid?.email}</p>
              <p>Phone:{JobData.hiring_Managerid?.phonenumber} </p>
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
              <h4>{JobData.companyid?.name}</h4>
              <p>Location: {JobData.companyid?.city}, {JobData.companyid?.zipcode}</p>
              <p>
                Website:{" "}
                <a href={JobData.companyid?.website} target={JobData.companyid?.website}>
                {JobData.companyid?.website}
                </a>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};


