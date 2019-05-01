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
console.log(this.props.selectedCardData)
}

  render() {
    return (
      <>
        {this.props.selectedCardData }
      </>
    );
  }
}

const mapStateToProps = state => ({
  selectedCardData: state.selectedCardData
})

export default connect (
  mapStateToProps,
  {searchExperiences, experienceSuccessFetch}
)(IndividualCard);