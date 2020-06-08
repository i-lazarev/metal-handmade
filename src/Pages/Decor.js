import React from "react";
import Image1 from "../Images/Decor/8c3e0a7b5ad80bb9ea4dd40527e19b95.jpg";
import Image2 from "../Images/Decor/9.jpg";
import Image3 from "../Images/Decor/9c46539d216c174e231bea42df98cfb6.jpg";
import Image4 from "../Images/Decor/black-metal-wood-round-wall-shelf_MM27422.jpg";
import Image5 from "../Images/Decor/decor1.jpg";
import Image6 from "../Images/Decor/233445.jpg";
import "../Styles/LivingRoom.css"

const Decor = () => {
  return (
    <div>
      <h2>Decor</h2>
      <div id="images-living" style={{display:"flex", flexDirection:"row",flexWrap:"wrap"}}>
      <div><img src={Image1} alt=""/></div>
      <div><img src={Image2} alt=""/></div>
     <div><img src={Image3} alt=""/></div>
     <div><img src={Image4} alt=""/></div>
     <div><img src={Image5} alt=""/></div>
     <div><img src={Image6} alt=""/></div>
   
     </div>
    </div>
  );
};

export default Decor;
