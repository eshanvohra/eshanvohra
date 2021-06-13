import React from "react";
import { Carousel } from "3d-react-carousal";



import codekaze from "../images/codekaze.png";
import ninja from "../images/ninja.png";
import NQT1 from "../images/NQT1.png";
import NQT2 from "../images/NQT2.png";
import GOS from "../images/GOS.png";
import GFG from "../images/GFG.jpg";
import GFG1 from "../images/GFG1.jpg";

const Certification = () => {
  let slides = [
    <img src={codekaze} className="img-fluid" alt="1" />,
    <img src={ninja} className="img-fluid" alt="2" />,
    <img src={NQT1} className="img-fluid" alt="3" />,
    <img src={NQT2} className="img-fluid" alt="4" />,
    <img src={GOS}  className="img-fluid" alt="5" />,
    <img src={GFG}  className="img-fluid" alt="6" />,
    <img src={GFG1} className="img-fluid" alt="7" />,
  ];
  return (
    <div className="mycarousel mt-5 mb-5 ">
      <h1 className="mt-5 mb-5 text-center titles">My Achievements</h1>
      <Carousel className="" slides={slides} autoplay={true} interval={4000} />
    </div>

     

  );
  
};

export default Certification;
