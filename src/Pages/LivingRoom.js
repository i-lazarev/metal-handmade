import React from "react";
import Image1 from "../Images/Living/living1.jpg";
import Image2 from "../Images/Living/living2.jpg";
import Image3 from "../Images/Living/living3.jpg";
import Image4 from "../Images/Living/living4.jpg";
import Image5 from "../Images/Living/living5.jpg";
import Image6 from "../Images/Living/living6.jpg";
import Image7 from "../Images/Living/living7.jpg";
import Image8 from "../Images/Living/living8.jpg";
import "../Styles/LivingRoom.css"


const LivingRoom = () => {

  return (
    <div>
      <h1>Living Room</h1>
      <div id="images-living" style={{display:"flex", flexDirection:"row",flexWrap:"wrap"}}>
     {/* <img src={Image1} alt=""/> */}
     <div><img src={Image2} alt=""/></div>
     <div><img src={Image3} alt=""/></div>
     <div><img src={Image4} alt=""/></div>
     <div><img src={Image5} alt=""/></div>
     <div><img src={Image6} alt=""/></div>
     <div><img src={Image7} alt=""/></div>
     <div><img src={Image8} alt=""/></div>
      </div>
    </div>
  );
};

export default LivingRoom;
