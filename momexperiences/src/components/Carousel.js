import React from "react";
import Carousel from "react-bootstrap/Carousel";



class CarouselHomePage extends React.Component {

  render() {
    return (
      <>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require ('../imgs/ColorRun.jpg')}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>For Moms, by Moms</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/1588080/pexels-photo-1588080.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Create Events</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/1683975/pexels-photo-1683975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
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
