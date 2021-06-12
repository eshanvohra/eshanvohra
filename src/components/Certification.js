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
    <img src={codekaze} alt="1" />,
    <img src={ninja} alt="2" />,
    <img src={NQT1} alt="3" />,
    <img src={NQT2} alt="4" />,
    <img src={GOS} alt="5" />,
    <img src={GFG} alt="5" />,
    <img src={GFG1} alt="5" />,
  ];
  return (
    <div className="container mt-5 mb-5">
      <h1 className="mt-5 mb-5 text-center titles">My Achievements</h1>
      <Carousel slides={slides} autoplay={true} interval={4000} />
    </div>
  );
};

export default Certification;
