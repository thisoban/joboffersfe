import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function Job()  {
  // eslint-disable-next-line no-unused-vars
  const id = window.location.pathname.split("/")[2];
  const [JobData, setJobData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const apiUrl = `http://localhost:8080/Jobs/details?id=${id}`;

    axios.get(apiUrl)
      .then((response) => {
        // Set the jobData state with the API response data
        setJobData(response.data);
        setIsLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        setError(error);
        setIsLoading(false);
        console.error('Error:', error);
      });
  },
  //eslint-disable-next-line react-hooks/exhaustive-deps
  []); // The empty dependency array means this effect will run once when the component is mounted.

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container className="my-4">
      <Row>
        <Col md={8}>
          <Card>
            <Card.Body>
              <h2>{JobData.name}</h2>
              <h3>Job Description</h3>
              
              <ul>
              {JobData.description?.split("/.").map((item, i) => (
                <li key={i}>{item}</li>
              ))}
              </ul>

             <h5> job duration from {JobData.start} till {JobData.end} </h5>
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
           
              <p>
                Address: {JobData.companyid?.adres}</p>
                <p> zipcode: {JobData.companyid?.zipcode}</p>
                <p>Location: {JobData.companyid?.city}</p>
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
