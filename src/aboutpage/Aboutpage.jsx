import React from "react";
import "./Aboutpage.css";
import Aboutgrid from "./components/Aboutgrid";
import { aboutMeContext } from "../data/Data";

const Aboutpage = ({ targetAboutRef }) => {
  return (
    <div className="about-page" ref={targetAboutRef}>
      <div className="about-page-grid-container">
        <div>
          <h1>About Me</h1>
          <a
            href="https://www.facebook.com/hao.zhou.33633/"
            target="_blank"
            rel="Hao Facebook"
          >
            <h2>Sell All</h2>
          </a>
        </div>
        <div className="about-photo1-container">
          {/* <img
            src={aboutphoto}
            alt="aboutphoto"
            style={{ height: "240px", width: "480px" }}
          /> */}
        </div>
        <div className="about-context1-container">
          <h4>
            Amber Township, Mi<span>01 Oct 2022</span>
          </h4>
          <h3>A Problem Solver</h3>
          <p>
            I'm A Problem Solver, passionate about untangling challenges through
            creative solutions. With a robust analytical and collaborative
            approach, I contribute positively wherever I'm engaged. Eager to
            connect and create together for impactful outcomes.
          </p>
        </div>
        {aboutMeContext.map(({ id, img, h4, span, h3, p }) => (
          <Aboutgrid key={id} img={img} h4={h4} span={span} h3={h3} p={p} />
        ))}
        {/* <Aboutgrid />
        <Aboutgrid /> */}
      </div>
    </div>
  );
};

export default Aboutpage;
