import React from "react";
import "./Singlephotopage.css";
import family from "./family.jpg";

const Singlephotopage = () => {
  return (
    <div className="single-photo-page">
      <div className="single-photo-container">
        <img src={family} alt="family" />
      </div>
    </div>
  );
};

export default Singlephotopage;
