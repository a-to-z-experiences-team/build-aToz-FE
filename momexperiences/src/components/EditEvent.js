import React from "react";

class EditEvent extends React.Component {
  state = {
    event: this.props.event
  };

  editEvent = e => {
    this.props.editEvent(e, this.state.event);
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
              Edit Event
            </Button>
          </Form>
        </div>
      </>
    );
  }
}

export default EditEvent;
