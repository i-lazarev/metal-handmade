import React from "react";
import Image1 from "../Images/Bedroom/architect_steel_bed_frame-anthracite-metallic-only-overstock.png";
import Image2 from "../Images/Bedroom/canopy.jpg";
import Image3 from "../Images/Bedroom/Contemporary-Modern-Metal-Bed.jpg"
import Image4 from "../Images/Bedroom/d13steelglassendtable-1.jpg"
import Image5 from "../Images/Bedroom/P16.jpg"
import Image6 from "../Images/Bedroom/rgb-boltz2-3850-s_2.jpg"
import "../Styles/LivingRoom.css"
const Bedroom = () => {
  return (
    <div>
      <h1>Bedroom</h1>
      <div id="images-living" style={{display:"flex", flexDirection:"row",flexWrap:"wrap"}}>
      <div><img src={Image2} alt=""/></div>
     <div><img src={Image3} alt=""/></div>
     <div><img src={Image4} alt=""/></div>
     <div><img src={Image5} alt=""/></div>
     <div><img src={Image6} alt=""/></div>
    
     </div>
    </div>
  );
};

export default Bedroom;
