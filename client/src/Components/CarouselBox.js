import React from "react";
import { Carousel } from "react-bootstrap";
import brown_shoe from "../images/brown_shoe.PNG";
import black_shoe from "../images/blackshoe.png";
import girls from "../images/girls.PNG";
import boys from "../images/boys.PNG";

function CarouselBox() {
  return (
    <Carousel className="card-container col-lg-8 mx-auto my-3">
      <Carousel.Item interval={2000}>
        <img
          className="caro w-75 d-flex mx-auto"
          src={brown_shoe}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="caro w-75 d-flex mx-auto"
          src={black_shoe}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="caro w-75 d-flex mx-auto"
          src={girls}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="caro w-75 d-flex mx-auto"
          src={boys}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBox;
