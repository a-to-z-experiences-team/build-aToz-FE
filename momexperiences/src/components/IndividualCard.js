import React from "react";
import "../styles.css";
import { Card, Button } from "react-bootstrap";
import {searchExperiences, experienceSuccessFetch} from '../actions/index';
import {connect} from 'react-redux';



class IndividualCard extends React.Component {
  constructor(props){
    super(props)
  this.state = {
 }
}
  componentDidMount(){
}

  render() {
    return (
      <>
      <div> 

        
          <Card>
            <Card.Header as="h5">Featured</Card.Header>
            <Card.Body>
              <Card.Title>{this.props.selectedCardData.exp_title}</Card.Title>
              <Card.Text>
              {this.props.selectedCardData.exp_desc}
              </Card.Text>
              <Button variant="danger">Go somewhere</Button>
            </Card.Body>
          </Card>;


      </div> 
      </>
    );
  }
}

const mapStateToProps = state => ({
  selectedCardData: state.selectedCardData,
  momExperiences: state.momExperiences
})

export default connect (
  mapStateToProps,
  {searchExperiences, experienceSuccessFetch}
)(IndividualCard);
