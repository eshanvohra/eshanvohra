import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import PositionCard from "./PositionCard";
import gfg from "../images/gfg.png";
import gfgnewlogo from "../images/gfgnewlogo.png";
import AOS from "aos";
import "aos/dist/aos.css";


const Positions = () => {
  return (
      
      <div className='container mt-5 mb-5'  data-aos="flip-left" data-aos-duration="2000">
          <h1 className="text-center titles">Positions of Responsibility</h1>
      <PositionCard 
        title="GeeksforGeeks Student Ambassador"
        description="It is the most prominent student ambassador program across all Indian colleges and universities. In this program, GeeksforGeeks appoints a campus ambassador after reviewing and interviewing all applicants and provides them with a task to make a group of students who are willing to learn and teach computer science fundamentals, conduct events and seminars, spread awareness about geeksforgeeks.org and implement some marketing plans as well."
        duration="June, 2020 to June 2021"
        image={gfg}
        data-aos-easing="ease-out-cubic"
     data-aos-duration="6000"/>
      <PositionCard 
        title={"GeeksforGeeks-GNDU Student Chapter Lead"}
        description={`Worked as a student chapter lead of Guru Nanak Dev University , one among 40 Student Chapters established by GeeksforGeeks for first time PAN India. Worked in handling and organizing events like "Game of Source-An Open Source event" and various other events conducted at Campus and PAN India level.`}
        duration="November, 2020 to June, 2021"
        image={gfgnewlogo}
        data-aos-easing="ease-out-cubic"
     data-aos-duration="8000"/>
    
    </div>
  );
};

export default Positions;
