import React from "react";
import "../styles.css";
import { CardDeck, Card, Button } from "react-bootstrap";

class Cards extends React.Component {
  render() {
    return (
      <>
        <div className="viewAllContainer">
          <input  placeholder= 'Search Experiences' className='searchExperiences'></input>
          
        </div>
        <CardDeck>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/1157399/pexels-photo-1157399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260s"
            />
            <Card.Body>
              <Card.Title> Hiking </Card.Title>
              <Card.Text>
                We are planning on doing a steady hike, the trail is 2 miles
                long, with beatiful scenery.
              </Card.Text>
            </Card.Body>
            <div className="buttonContainer">
              <Button variant="danger">Check Out</Button>
            </div>
            <Card.Footer>
              <small bg="danger" className="text-muted">
                High Hills, May 10th, 2019
              </small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/235554/pexels-photo-235554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
            <Card.Body>
              <Card.Title> Treasure Hunt</Card.Title>
              <Card.Text>
                Join us for a fun treasure hunt at Indigo Park!
              </Card.Text>
            </Card.Body>
            <div className="buttonContainer">
              <Button variant="danger">Check Out</Button>
            </div>
            <Card.Footer>
              <small className="text-muted">Rialto Park, May 03, 2019</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/1007773/pexels-photo-1007773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
            <Card.Body>
              <Card.Title> Stroller Strides </Card.Title>
              <Card.Text>
                Join our daily stroller walk around the park.
              </Card.Text>
            </Card.Body>
            <div className="buttonContainer">
              <Button variant="danger">Check Out</Button>
            </div>
            <Card.Footer>
              <small className="text-muted">Rodondo Park, May 01, 2019 </small>
            </Card.Footer>
          </Card>
        </CardDeck>
        ;
      </>
    );
  }
}

export default Cards;
