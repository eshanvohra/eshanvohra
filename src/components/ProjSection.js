import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Cards from "./Cards";
import esb from '../images/esb.png'
import examproj from '../images/examproj.png'
import covid from '../images/covid.png'

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();






const ProjSection = () => {
  return (
    <div className="container mt-5 p-5">
      <h1 className="text-center">My Projects</h1>
          <div className="cards d-flex ">
              
              {/* **************************CARDS START***************************** */}
             <div data-aos="fade-right"  data-aos-duration="3000"> <Cards title="ESmartBanker" img={esb} link="https://github.com/eshanvohra/ESmartBanker_ASP_Project" text="This is a internet banking web application designed in ASP.NET"  /></div>
              
             <div data-aos="fade-up"  data-aos-duration="3000"> <Cards title="Online Examination System" img={examproj} link="https://github.com/eshanvohra/Online_Examination_CPP" text="This is a MCQ based examination platform designed in C++"/></div>
             <div data-aos="fade-left"  data-aos-duration="3000"> <Cards title="Covid-19 Tracker" img={covid} link="https://eshanvohra.github.io/covid-19-tracker/" text="This is a SPA of Covid-19 Tracker in ReactJS"/></div>
               {/* **************************CARDS END***************************** */}
      </div>
    </div>
  );
};

export default ProjSection;
