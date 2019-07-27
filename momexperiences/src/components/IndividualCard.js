import React from "react";
import "../styles.css";
import { Card, Button } from "react-bootstrap";
import { searchExperiences, editEvent, experienceSuccessFetch, deleteEvent, updateArrays } from "../actions/index";
import { connect } from "react-redux";
import NavBar from "./NavBar";

class IndividualCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleted: false
    };
  }
  componentDidMount() {

  }

  render() {
    return (
      <>
        <div>
          <NavBar />
           <Card>
            <Card.Header as="h5">Featured</Card.Header>
            <Card.Body>
              <Card.Title>{this.props.selectedCardData.exp_title}</Card.Title>
              <Card.Text>Event Starts on: {this.props.selectedCardData.startsOn}</Card.Text>
              <Card.Text>Description: {this.props.selectedCardData.exp_desc}</Card.Text>
              <Card.Text>Location: {this.props.selectedCardData.location}</Card.Text>
              <Card.Text>Created By: {this.props.selectedCardData.createdBy}</Card.Text>
              <Card.Text>Max Guests: {this.props.selectedCardData.maxGuests}</Card.Text>
            </Card.Body>
          </Card> 
          
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  selectedCardData: state.selectedCardData,
  momExperiences: state.momExperiences,
  deleted: state.deleted,
  error: state.error
});

export default connect(
  mapStateToProps,
  { searchExperiences, experienceSuccessFetch,  editEvent,  deleteEvent, updateArrays }
)(IndividualCard);
