
import React from "react";
import "../styles.css";
import { Card, Button } from "react-bootstrap";
import {
  searchExperiences,
  getEvent,
  getuserEvents,
  editEvent,
  addSelectedData,
  experienceSuccessFetch,
  deleteEvent,
  updateArrays
} from "../actions/index";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import { Link, withRouter } from "react-router-dom";

class MyEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.experienceSuccessFetch();
    if (this.props.userEvents.length > 0) {
    } else {
      this.props.history.push("/Protected");
    }
  }

  deleteEvent = id => async (e) => {
    e.preventDefault();
    await this.props.deleteEvent(id);
    this.props.history.push("/Homepage");
  };

  goEdit = event => async(e) => {
    e.preventDefault();
     this.props.editEvent(event.id);
     this.props.addSelectedData(event)
     await this.props.history.push("/Homepage");
    
  }
  render() {
    return (
      <>
        <div>
          <NavBar />
          {this.props.userEvents.map((event, index) => {
            return (
              <div key={index}>
                <Card>
                  <Card.Header as="h5">{event.exp_title}</Card.Header>
                  <Card.Body>
                    <Card.Title>{event.exp_title}</Card.Title>
                    <Card.Text>Event Starts on: {event.startsOn}</Card.Text>
                    <Card.Text>Description: {event.exp_desc}</Card.Text>
                    <Card.Text>Location: {event.location}</Card.Text>
                    <Card.Text>Max Guests: {event.maxGuests}</Card.Text>
                    <div className="individualCardButtons">
                      <Button
                        onClick={this.deleteEvent(event.id)}
                        className="individButtons"
                      >
                        Delete
                      </Button>
                      <Button
                        onClick={this.goEdit(event)}
                        className="individButtons"
                      >
                        Edit
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  selectedCardData: state.selectedCardData,
  momExperiences: state.momExperiences,
  deleted: state.deleted,
  userEvents: state.userEvents,
  error: state.error
});

export default withRouter(
  connect(
    mapStateToProps,
    {
      searchExperiences,
      getuserEvents,
      experienceSuccessFetch,
      getEvent,
      editEvent,
      deleteEvent,
      addSelectedData,
      updateArrays
    }
  )(MyEvents)
);
