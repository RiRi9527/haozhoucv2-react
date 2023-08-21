import React, { useRef } from "react";
import "./App.css";
import Navbar from "./navbar/Navbar";
import Homepage from "./homepage/Homepage";
import Aboutpage from "./aboutpage/Aboutpage";
import Portfoliopage from "./portfolio/Portfoliopage";
import Singlephotopage from "./singlephotopage/Singlephotopage";
import Contactpage from "./contactpage/Contactpage";

const App = () => {
  const targetHomeRef = useRef(null);
  const scrollToHomeDiv = () => {
    if (targetHomeRef.current) {
      targetHomeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const targetAboutRef = useRef(null);
  const scrollToAboutDiv = () => {
    if (targetAboutRef.current) {
      targetAboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const targetPortfolioRef = useRef(null);
  const scrollToPortfolioDiv = () => {
    if (targetPortfolioRef.current) {
      targetPortfolioRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const targetContactRef = useRef(null);
  const scrollToContactDiv = () => {
    if (targetContactRef.current) {
      targetContactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="app-container">
      <Navbar
        scrollToHomeDiv={scrollToHomeDiv}
        scrollToAboutDiv={scrollToAboutDiv}
        scrollToPortfolioDiv={scrollToPortfolioDiv}
        scrollToContactDiv={scrollToContactDiv}
        display={true}
        position="absolute"
        background="linear-gradient(180deg, #fff2c5 0%, rgba(250, 250, 250, 0) 100%)"
        padding="25px 50px"
      />
      <Homepage
        scrollToContactDiv={scrollToContactDiv}
        scrollToPortfolioDiv={scrollToPortfolioDiv}
        targetHomeRef={targetHomeRef}
      />
      <Navbar
        scrollToHomeDiv={scrollToHomeDiv}
        scrollToAboutDiv={scrollToAboutDiv}
        scrollToPortfolioDiv={scrollToPortfolioDiv}
        scrollToContactDiv={scrollToContactDiv}
        display={false}
        position="sticky"
        padding="10px 50px"
        background="#fff"
      />
      <Aboutpage targetAboutRef={targetAboutRef} />
      <Portfoliopage targetPortfolioRef={targetPortfolioRef} />
      <Singlephotopage />
      <Contactpage targetContactRef={targetContactRef} />
    </div>
  );
};

export default App;
