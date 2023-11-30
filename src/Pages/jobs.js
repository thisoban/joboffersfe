import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const jobs = [
  {
    id: 1,
    title: "Software Developer",
    description:
      "We are looking for a passionate and talented Software Developer to join our team.",
    location: "New York, NY",
    applyLink: "apply-software-developer",
  },
  {
    id: 2,
    title: "Frontend Developer",
    description:
      "Join our team as a Frontend Developer and help build amazing user interfaces.",
    location: "San Francisco, CA",
    applyLink: "apply-frontend-developer",
  },
];

export default function JobListings() {
 
  const [testData, setTestData] = useState({});
    useEffect(()=> 
    {
      const apiUrl = "http://localhost:8080/jobs/List";
      axios.get(apiUrl)
      .then((Response)=> {
        setTestData(Response.data);
        console.log(Response.data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
      });
    },
      
    []);
  return (
    <Container className="my-4">
      <h1>Job Listings</h1>
      <Row>
        {jobs.map((job) => (
          <Col key={job.id} md={4}>
            <Card className="mb-4">
              <Card.Body>
                <h2>{job.title}</h2>
                <p>{job.description}</p>
                <p>Location: {job.location}</p>
                <Button variant="primary" href={"/job"}>
                  Apply Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

