import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Education = () => {
  return (
    <div className="container text-center education">
      <h1 className="text-center mb-5" style={{ fontSize: "3rem" }}>
        Education
      </h1>
      <div className="box d-flex">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1a/Guru_Nanak_Dev_University_Logo.png/220px-Guru_Nanak_Dev_University_Logo.png"
          style={{ width: "150px" }}
          className="img-fluid"
        />

        <div
          className="education_details"
          data-aos="zoom-out-right"
          data-aos-duration="3000"
        >
          <ul style={{ listStyleType: "none" }}>
            <h2>Bachelors of Technology</h2>
            <li>
              <h3>Computer Science and Engineering</h3>
            </li>
            <li>
              <h3>Current CGPA: 8.43</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
