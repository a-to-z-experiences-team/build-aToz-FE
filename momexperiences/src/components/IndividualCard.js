import React from "react";
import "../styles.css";
import { Card, Button } from "react-bootstrap";
import { searchExperiences, experienceSuccessFetch, deleteEvent, updateArrays } from "../actions/index";
import { connect } from "react-redux";
import NavBar from "./NavBar";

class IndividualCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount() {}

  deleteEvent(e){
    e.preventDefault();
    const id = this.props.selectedCardData.id
    this.props.deleteEvent(id)
    console.log(this.props.momExperiences)
    this.props.history.push('/Homepage')
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
              <Card.Text>{this.props.selectedCardData.exp_desc}</Card.Text>
              <Button variant="danger">Go somewhere</Button>
              <Button onClick= {this.deleteEvent.bind(this)} >Delete</Button>
            </Card.Body>
          </Card>
          
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  selectedCardData: state.selectedCardData,
  momExperiences: state.momExperiences
});

export default connect(
  mapStateToProps,
  { searchExperiences, experienceSuccessFetch, deleteEvent, updateArrays }
)(IndividualCard);
