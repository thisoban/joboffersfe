import React , { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import JobListings from "../Component/jobslisting"; 
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

