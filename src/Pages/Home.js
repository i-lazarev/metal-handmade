import React from "react";
import "../Styles/Home.css";
import { Carousel } from "react-bootstrap";
import Img1 from "../Images/clark-young-fQxMGkYXqFU-unsplash.jpg";
import Img2 from "../Images/kent-rebman-bfF-W3CgdMk-unsplash.jpg";
import Img3 from "../Images/twofold-creative-LMoMZzPktho-unsplash.jpg";
import HomeImage from "../Images/713sdyZAiKL._AC_SL1500_.jpg";

const Home = () => {
  return (
    <div
      id="home-container"
    >
      <div id="textContainer">
        <h1 id="texth1" className="animate__animated animate__slideInRight">
          Are you ready
          <br /> to see your home in completely new colors?
        </h1>
        <p id="textp" className="animate__animated animate__slideInLeft">
          We will help you to think differently
          <br /> about your space
        </p>
      </div>
      {/* <div>
        <Carousel pause={false}>
          <Carousel.Item >
          <div style={{height:"100vh", width:"100vw"}}>
            <img
              className="d-block"
              src={Img1}
              alt="First slide"
              style={{objectFit:"contain", width:"100vw"}}
            />
            </div>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Img2}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Img3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div> */}
    </div>
  );
};

export default Home;
