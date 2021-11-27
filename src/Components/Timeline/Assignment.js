import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

const Assignment = ({ Assign }) => {
  return (
    <div>
      <Card className="text-center" style={{ width: "90%" }}>
        <Card.Header>{Assign.Name}</Card.Header>
        <Card.Body>
          <Card.Text>{Assign.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <a href={Assign.link}> Click here </a>
        </Card.Footer>
      </Card>
    </div>
  );
};

Assignment.defaultProps = {
  Assign: {
    Name: "",
  },
};

export default Assignment;
