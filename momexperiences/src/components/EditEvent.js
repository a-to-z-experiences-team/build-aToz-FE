import React from "react";
import {Form, Button} from 'react-bootstrap';
import NavBar from "./NavBar";
import {connect} from 'react-redux';
import { withRouter} from 'react-router-dom';
import {submittedEventChanges} from '../actions'

class EditEvent extends React.Component {
  constructor(props) {
    super(props);

  this.state = {

    exp_title: this.props.selectedCardData.exp_title,
    location: this.props.selectedCardData.location,
    createdAt: this.props.selectedCardData.createdAt,
    // availability: "",
    maxGuests:  this.props.selectedCardData.maxGuests,
    exp_desc: this.props.selectedCardData.exp_desc,
    startsOn: this.props.selectedCardData.startsOn,
    exp_type: this.props.selectedCardData.exp_type,
    createdBy: this.props.selectedCardData.createdBy,
  };
}

componentDidMount(){
}

  addEvent = (e) => {
    e.preventDefault();
    this.props.submittedEventChanges({
      id: this.props.selectedCardData.id,
      exp_title: this.state.exp_title,
      location: this.state.location,
      createdAt: this.state.createdAt,
      // availability: this.state.availability,
      maxGuests: this.state.maxGuests,
      exp_desc: this.state.exp_desc,
      startsOn: this.state.startsOn
    })
    this.props.history.push("/Homepage");
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  
  render() {
    return (
      <>
        <NavBar />

        <div className="login-page-wrapper">
          <h2>Edit Event</h2>
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
                value={this.state.createdAt}
                name="createdAt"
                required
              />
            </Form.Group>
            {/* <Form.Group controlId="formGridAvailability">
              <Form.Label>Availabilty</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                placeholder="Availability"
                value={this.state.availability}
                name="availability"
                required
              />
            </Form.Group> */}
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
              Submit Event
            </Button>
          </Form>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  selectedCardData: state.selectedCardData,
  momExperiences: state.momExperiences,
  singleEvent: state.singleEvent
})

export default withRouter(connect (
  mapStateToProps,
  {submittedEventChanges}
)(EditEvent));