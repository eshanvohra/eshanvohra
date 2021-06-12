import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const Contact = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center ">
      <div>
        <h2>Contacting Me</h2>
        <img
          src="https://image.flaticon.com/icons/png/512/2076/2076218.png"
          style={{ width: "4rem", height: "3rem" }}
        />
        <p>
          Feel free to talk to me about anything that bothers you. 
                  </p><p>If you need a
                  helping hand, please don't hesitate to contact me.
        </p>
        <img
          src="https://img.icons8.com/wired/100/000000/phone.png"
          style={{ width: "2rem" }}
        />
        <span className="p-3">82830-89459</span>
        <img
          src="https://img.icons8.com/ios/50/000000/apple-mail.png"
          style={{ width: "2rem" }}
        />
        <span className="p-3">eshanvohra@gmail.com</span>
        <img
          src="https://img.icons8.com/pastel-glyph/64/000000/worldwide-location--v2.png"
          style={{ width: "2rem" }}
        />
        <span className="p-3">Firozpur, Punjab, India</span>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column">
          <a href="https://drive.google.com/file/d/1f1ZJWMg1emGhNiPBFFP3Qdg1hXmNPbWR/view"><img src="https://img.icons8.com/dotty/64/000000/open-resume.png" alt="My Resume"/></a>
              <h3 className="titles">My Resume</h3>
          </div>
    </div>
  );
};

export default Contact;
