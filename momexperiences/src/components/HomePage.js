import React from 'react';
import {experienceSuccessFetch} from '../actions/index';
import {connect} from 'react-redux';
import Cards from './Cards';
import Carousel from './Carousel';
import FeaturedContent from './FeaturedContent';
import NavBar from './NavBar';

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
                <NavBar />
                <Carousel />
                <FeaturedContent />
                <Cards />
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