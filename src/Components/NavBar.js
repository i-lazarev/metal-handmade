import React from "react";
import { Link } from "react-router-dom";
import "../Styles/NavBar.css";
import { faHome, faBed, faCouch, faChair} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  return (
    <div id="navContainer">
      <div id="categories-container">
        <Link
          id="home"
          className="categorie animate__animated animate__fadeIn"
          to="/"
        >
         <FontAwesomeIcon className="icon" icon={faHome}/>

        </Link>
        <Link
          id="bedroom"
          className="categorie animate__animated animate__fadeIn"
          to="/bedroom"
        >
        <FontAwesomeIcon className="icon" icon={faBed}/>
         
        </Link>
        <Link
          id="livingroom"
          className="categorie animate__animated animate__fadeIn"
          to="/livingroom"
        >
        <FontAwesomeIcon className="icon" icon={faCouch}/>
        </Link>
        <Link
          id="decor"
          className="categorie animate__animated animate__fadeIn"
          to="/decor"
        >
        <FontAwesomeIcon className="icon" icon={faChair}/>
         
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
