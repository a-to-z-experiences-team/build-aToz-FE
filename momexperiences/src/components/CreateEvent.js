import React, { Component } from "react";
import { connect } from "react-redux";
import { getEvent, postEvent } from "../actions";
import NavBar from "./NavBar";
import { Form, Button } from "react-bootstrap";
import {withRouter} from 'react-router-dom';

class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exp_title: "",
      location: "",
      createdAt: "",
      // availability: "",
      maxGuests: "",
      exp_desc: "",
      startsOn: "",
      exp_type: '',
      createdBy: ''
    };
  }
  

  addEvent = (e) => {
    e.preventDefault();
    this.props.postEvent({
      exp_title: this.state.exp_title,
      location: this.state.location,
      createdAt: this.state.createdAt,
      // availability: this.state.availability,
      maxGuests: this.state.maxGuests,
      exp_desc: this.state.exp_desc,
      startsOn: this.state.startsOn
    })
    console.log(this.props.momExperiences)
    this.props.history.push("/Homepage");
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
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
                value={this.state.exp_title}
                name="exp_title"
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
              <Form.Label>Created on </Form.Label>
              <Form.Control
                onChange={this.handleChange}
                placeholder="Length of Event"
                value={Date()}
                name="createdAt"
                required
              />
            </Form.Group>
            <Form.Group controlId="formGridAvailability">
              <Form.Label>Date of Event</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                placeholder="Starts on"
                value={this.state.startsOn}
                name="startsOn"
                required
              />
            </Form.Group>
            <Form.Group controlId="formGridGuest">
              <Form.Label>Maximum Number of Guest</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                placeholder="Number of Guest"
                value={this.state.maxGuests}
                name="maxGuests"
                required
              />
            </Form.Group>
            <Form.Group controlId="formGridDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                placeholder="Description"
                value={this.state.exp_desc}
                name="exp_desc"
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
    event: state.event,
    momExperiences: state.momExperiences
  };
};

export default withRouter (connect(
  mapStateToProps,
  {
    getEvent,
    postEvent
  }
)(CreateEvent))
