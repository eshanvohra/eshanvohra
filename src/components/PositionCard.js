import React from "react";
const PositionCard = (props) => {
  const { title, description, duration,image } = props;
  return (
    <div className="container d-flex align-items-center justify-content-center mt-5 mb-5">
      <div className="card" style={{ width: "1020px" }}>
        <div className="position-content">
          <img
            className="card-img-top"
            src={image}
            alt="Card image cap"
            style={{ width: "13rem" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <div className="d-flex justify-content-end">
              <h3>{duration}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PositionCard;
