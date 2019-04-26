import React from "react";
import "../styles.css";
import { Card, Button } from "react-bootstrap";

const FeaturedContent = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Join this wonderful community</Card.Title>
        <Card.Text>
          Mom Experiences are made for moms looking for something to do. Here,
          other moms get together and create wonderful experiences for
          themselves and their children. From teaching each other how to deal
          with cloth diapers, to outings with other children. Don't see an event
          you are looking for? Create one!
        </Card.Text>
        <Button variant="danger">Join the Mom Squad</Button>
      </Card.Body>
    </Card>
  );
};

export default FeaturedContent;
