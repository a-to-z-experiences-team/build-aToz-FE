import React from "react";
import Carousel from "react-bootstrap/Carousel";



class CarouselHomePage extends React.Component {

  render() {
    return (
      <>
        <Carousel >
          <Carousel.Item >
            <img
              className="d-block w-100"
              src={require ('../imgs/TreeHug.jpg')}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>For Moms, by Moms</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block  w-100"
              src={require ('../imgs/ColorRun.jpg')}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Create Events</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block  w-100"
              src={require ('../imgs/Sunset.jpg')}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Give your child more Experiences.</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}

export default CarouselHomePage;
