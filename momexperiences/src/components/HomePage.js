import React from 'react';
import {experienceSuccessFetch} from '../actions/index';
import {connect} from 'react-redux';
import CardEvents from './CardEvents';

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
                <h1> Mom's Life</h1>
                <button> Join the Mom Squad </button>  
                <div>
                    <CardEvents />
                </div>
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