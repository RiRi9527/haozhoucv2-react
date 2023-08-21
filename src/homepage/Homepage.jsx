import React from "react";
import "./Homepage.css";
import { displayNextCharacterForHomePageData } from "../data/Data";
import TextAnimation from "../components/TextAnimation";

const Homepage = ({
  scrollToContactDiv,
  scrollToPortfolioDiv,
  targetHomeRef,
}) => {
  return (
    <div className="home-page" ref={targetHomeRef}>
      <div className="home-left-container">
        <h3>Hello, I'm</h3>
        <h1>Hao Zhou</h1>
        <div className="animation-text-container">
          <TextAnimation texts={displayNextCharacterForHomePageData} />
        </div>
        <button onClick={scrollToContactDiv}>Hire me</button>
        <p onClick={scrollToPortfolioDiv}>view my portfolio</p>
      </div>
      <div className="home-right-container"></div>
    </div>
  );
};

export default Homepage;
