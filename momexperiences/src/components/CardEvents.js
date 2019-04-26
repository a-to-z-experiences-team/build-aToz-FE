import React from 'react';
import {experienceSuccessFetch} from '../actions/index';
import {connect} from 'react-redux';

class CardEvents extends React.Component {
    componentDidMount(){
        this.props.experienceSuccessFetch()
        
    }


    render(){
        return (
            <>
            <p> {this.props.momExperiences.map(comment => <p> {comment.name}</p>)}</p>
            </>
        )
    }   
}


const mapStateToProps = state => ({
    momExperiences: state.momExperiences
  })
  
  export default connect (
    mapStateToProps,
    {experienceSuccessFetch}
  )(CardEvents)