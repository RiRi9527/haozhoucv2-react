import React, { useRef } from "react";
import "./Contactpage.css";
import { FaFacebookF } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { BiLogoLinkedin } from "react-icons/bi";
import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";

const Contactpage = ({ targetContactRef }) => {
  return (
    <div className="contact-page" ref={targetContactRef}>
      <div className="contact-title">
        <VscTriangleRight />
        <h1>hzdev</h1>
        <VscTriangleLeft />
      </div>
      <div className="contact-icons">
        <a
          href="https://www.facebook.com/hao.zhou.33633/"
          target="_blank"
          rel="Hao Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.linkedin.com/in/hao-zhou-7218321a1/"
          target="_blank"
          rel="Hao Facebook"
        >
          <SiIndeed />
        </a>
      </div>
      <p>All right reserved © 2023 Hao Zhou </p>
    </div>
  );
};

export default Contactpage;
