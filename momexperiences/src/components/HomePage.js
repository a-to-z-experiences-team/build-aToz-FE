import React from 'react';
import {experienceSuccessFetch} from '../actions/index';
import {connect} from 'react-redux';
import CardEvents from './CardEvents';
import LoginForm from './LoginForm';
import {Route} from 'react-router-dom'

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
                {/* // <button> <LoginForm /> </button>   */}
                <Route path='/login' component={LoginForm} />
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