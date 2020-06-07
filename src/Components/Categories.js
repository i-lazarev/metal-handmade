import React from "react";
import "../Styles/Categories.css";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div id="categories-container">
      <Link
        id="bedroom"
        className="categorie animate__animated animate__fadeIn"
        to="/bedroom"
      >
        Bedroom
      </Link>
      <Link
        id="livingroom"
        className="categorie animate__animated animate__fadeIn"
        to="/livingroom"
      >
        Living Room
      </Link>
      <Link
        id="decor"
        className="categorie animate__animated animate__fadeIn"
        to="/decor"
      >
        Decor
      </Link>
    </div>
  );
};

export default Categories;
