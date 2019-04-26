import React, { Component } from "react";
import { connect } from "react-redux";
import { getEvent, postEvent } from "../actions";

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
      <div>
        <form onSubmit={this.addEvent}>
          <input
            onChange={this.handleChange}
            placeholder="experienceEvent"
            value={this.state.experienceEvent}
            name="experienceEvent"
          />
          <input
            onChange={this.handleChange}
            placeholder="location"
            value={this.state.location}
            name="location"
          />
          <input
            onChange={this.handleChange}
            placeholder="lengthOfTime"
            value={this.state.lengthOfTime}
            name="lengthOfTime"
          />
          <input
            onChange={this.handleChange}
            placeholder="availability"
            value={this.state.availability}
            name="availability"
          />
          <input
            onChange={this.handleChange}
            placeholder="maxGuest"
            value={this.state.maxGuest}
            name="maxGuest"
          />
          <input
            onChange={this.handleChange}
            placeholder="description"
            value={this.state.description}
            name="description"
          />
          <button type="submit">Create Event</button>
        </form>
      </div>
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
