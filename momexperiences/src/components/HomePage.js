import React from 'react';
import {experienceSuccessFetch} from '../actions/index';
import {connect} from 'react-redux';


class HomePage extends React.Component {
    componentDidMount(){
        this.props.experienceSuccessFetch()
    }

    state = {
        search: ''
    }

    render(){
        console.log(this.props.momExperiences)
        return (
            <>
                <h1> This is the homepage</h1>
            </>
        )
    }
}


const mapStateToProps = state => ({
    momExperiences: state.moms
  })
  
  export default connect (
    mapStateToProps,
    {experienceSuccessFetch}
  )(HomePage)