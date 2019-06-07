import React from "react";
import "../styles.css";
import { Card, Button } from "react-bootstrap";
import {
  searchExperiences,
  getEvent,
  getuserEvents,
  editEvent,
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
      console.log("hi");
    } else {
      this.props.history.push("/Protected");
    }
    console.log(this.props.userEvents.length);
  }

  onItemClick = (item, e) => {
    let obj = this.props.momExperiences.find(
      o => o.exp_title === item.exp_title
    );
    this.props.getEvent(obj.id);
    this.props.history.push(`/IndividualCard/${obj.id}`);
  };

  editEvent(e) {
    e.preventDefault();
    this.props.history.push("/EditEvent");
  }
  render() {
    return (
      <>
        <div>
          <NavBar />

          {this.props.userEvents.map((event, i) => {
            let boundItemClick = this.onItemClick.bind(this, event);

            return (
              <>
                <Card>
                  <Card.Header as="h5" key={i}>
                    {event.exp_title}
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>{event.exp_title}</Card.Title>
                    <Card.Text>Event Starts on: {event.startsOn}</Card.Text>
                    <Card.Text>Description: {event.exp_desc}</Card.Text>
                    <Card.Text>Location: {event.location}</Card.Text>
                    <Card.Text>Created By: {event.createdBy}</Card.Text>
                    <Card.Text>Max Guests: {event.maxGuests}</Card.Text>

                    <small className="text-muted">
                      Created on: {event.createdAt}
                    </small>
                  </Card.Body>
                </Card>
              </>
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
      updateArrays
    }
  )(MyEvents)
);
