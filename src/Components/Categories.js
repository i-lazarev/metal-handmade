import React from "react";
import Bedroom from "../Images/Contemporary-Modern-Metal-Bed.jpg";
import LivingRoom from "../Images/livingroomtable.jpg";
import Decor from "../Images/architectBookcase_2.jpg";
import "../Styles/Categories.css"

const Categories = () => {
  return (
    <div
    id="categories-container"
    >
      <div id="bedroom" className="categorie">
      <h3>Bedroom</h3>
        {/* <img
          src={Bedroom}
          alt="Bedroom"
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
        /> */}
      </div>
      <div id="livingroom" className="categorie">
      <h3>Living Room</h3>
        {/* <img
          src={LivingRoom}
          alt="Living Room"
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
        /> */}
      </div>
      <div id="decor" className="categorie">
      <h3>Decor</h3>
        {/* <img
          src={Decor}
          alt="Book shelf"
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
        /> */}
      </div>
    </div>
  );
};

export default Categories;
