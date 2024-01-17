
import React , { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import JobListings from "../Component/jobslisting"; 
import { Row, Col, Card, Button } from "react-bootstrap";

// const jobs = [
//   {
//     id: 1,
//     title: "Software Developer",
//     description:
//       "We are looking for a passionate and talented Software Developer to join our team.",
//     location: "New York, NY",
//     applyLink: "apply-software-developer",
//   },
//   {
//     id: 2,
//     title: "Frontend Developer",
//     description:
//       "Join our team as a Frontend Developer and help build amazing user interfaces.",
//     location: "San Francisco, CA",
//     applyLink: "apply-frontend-developer",
//   },
// ];

export default function Jobs() {
 
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/Jobs/list');
        const data = await response.json();
        setJobData(data);
      } catch (error) {
        console.error('Error fetching job data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <Container className="my-4">
      <h1>Job Listings</h1>
      <JobListings data={jobData} />
    </Container>
  );
};

