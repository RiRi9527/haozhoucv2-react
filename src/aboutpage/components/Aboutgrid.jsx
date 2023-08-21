import React from "react";
import aboutphoto from "../../aboutpage/aboutphoto.png";

const Aboutgrid = ({ img, h4, span, h3, p }) => {
  return (
    <div className="about-grid-context">
      <img
        src={img}
        alt="aboutmephoto2"
        style={{ height: "240px", width: "480px", borderRadius: "20px" }}
      />
      <h4>
        {h4}
        <span>{span}</span>
      </h4>
      <h3>{h3}</h3>
      <p>{p}</p>
    </div>
  );
};

export default Aboutgrid;
