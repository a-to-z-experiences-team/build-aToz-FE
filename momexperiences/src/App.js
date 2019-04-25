import React from 'react';
import './App.css';
import {experienceSuccessFetch} from './actions/index';
import {connect} from 'react-redux'
import HomePage from './components/HomePage'

class App extends React.Component {
  componentDidMount(){
    this.props.experienceSuccessFetch()
}
render(){
      return (
        <div>
          <h1> hi</h1>
        </div>
      )
    }
}

const mapStateToProps = state => ({
  momExperiences: state.moms
})

export default connect (
  mapStateToProps,
  {experienceSuccessFetch}
)(App)