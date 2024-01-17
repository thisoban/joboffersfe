import React from 'react';
import { Card, Button, Row, Col } from "react-bootstrap";
const JobList = ({ data }) => {

    return(
    <Row>
        {data.map((job) => (
          <Col key={job.id} md={4}>
            <Card className="mb-4">
              <Card.Body>
                <h2>{job.name}</h2>
                <p>{job.description}</p>
                <p>Location: {job.location}</p>
                <Button variant="primary"   href={`/job/${job.id}`}>
                    Check out this job!
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
    </Row>
  );
}

export default JobList;