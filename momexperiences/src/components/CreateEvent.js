import React, { Component } from "react";
import { connect } from "react-redux";
import { getEvent, postEvent } from "../actions";
import NavBar from "./NavBar";
import { Form, Button } from "react-bootstrap";

class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experienceEvent: "",
      location: "",
      lengthOfTime: "",
      availability: "",
      maxGuest: "",
      description: ""
    };
  }

  addEvent = () => {
    this.props.postEvent({
      experienceEvent: this.state.experienceEvent,
      location: this.state.location,
      lengthOfTime: this.state.lengthOfTime,
      availability: this.state.availability,
      maxGuest: this.state.maxGuest,
      description: this.state.description
    });
  };

  handleChange = e => {
    this.setState({ [e.target.experienceEvent]: e.target.value });
  };

  render() {
    return (
      <>
        <NavBar />
        <div className="login-page-wrapper">
          <h2>Host an Event</h2>
          <Form onSubmit={this.addEvent}>
            <Form.Group controlId="formGridEventName">
              <Form.Label>Name of Event</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                placeholder="Event Name"
                value={this.state.experienceEvent}
                name="experienceEvent"
                required
              />
            </Form.Group>
            <Form.Group controlId="formGridLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                placeholder="Location"
                value={this.state.location}
                name="location"
                required
              />
            </Form.Group>
            <Form.Group controlId="formGridLength">
              <Form.Label>Length of Event</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                placeholder="Length of Event"
                value={this.state.lengthOfTime}
                name="lengthOfTime"
                required
              />
            </Form.Group>
            <Form.Group controlId="formGridAvailability">
              <Form.Label>Availabilty</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                placeholder="Availability"
                value={this.state.availability}
                name="availability"
                required
              />
            </Form.Group>
            <Form.Group controlId="formGridGuest">
              <Form.Label>Maximum Number of Guest</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                placeholder="Number of Guest"
                value={this.state.maxGuest}
                name="maxGuest"
                required
              />
            </Form.Group>
            <Form.Group controlId="formGridDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                placeholder="Description"
                value={this.state.description}
                name="description"
                required
              />
            </Form.Group>

            <Button variant="danger" type="submit">
              Create Event
            </Button>
          </Form>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    event: state.event
  };
};

export default connect(
  mapStateToProps,
  {
    getEvent,
    postEvent
  }
)(CreateEvent);
