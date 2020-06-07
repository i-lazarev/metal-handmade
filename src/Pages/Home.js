import React from "react";
import "../Styles/Home.css";

const Home = () => {
  return (
    <div id="home-container">
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
    </div>
  );
};

export default Home;
