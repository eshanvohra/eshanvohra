import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Cards = (props) => {
  const { title, img, link, text } = props;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div
        className="bg-image hover-overlay ripple"
        data-mdb-ripple-color="light"
      >
        <img src={img} className="img-fluid" />
        <a href="#!">
          <div
            className="mask"
            style={{ backgroundColor: "rgba(251, 251, 251, 0.15);" }}
          ></div>
        </a>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href={link} className="btn btn-primary">
          Go to Code
        </a>
      </div>
    </div>
  );
};

export default Cards;
