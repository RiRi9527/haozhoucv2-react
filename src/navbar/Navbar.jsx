import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = ({
  scrollToHomeDiv,
  scrollToAboutDiv,
  scrollToPortfolioDiv,
  scrollToContactDiv,
  display,
  position,
  padding,
  background,
}) => {
  const [displayShow, setDisplayShow] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleDisplayShow = () => {
    setDisplayShow(!displayShow);
  };
  // show and unshow sidebar
  const handleScroll = () => {
    // Check if the scroll position is beyond one screen height
    if (window.scrollY > window.innerHeight) {
      setShowSidebar(true);
    } else {
      setShowSidebar(false);
    }
  };

  useEffect(() => {
    // Add a scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts to avoid memory leaks
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // when window-with >600 navbar-pulldown-Menu display to none
  const handleResize = () => {
    if (window.innerWidth > 700) {
      setDisplayShow(false);
    }
  };

  useEffect(() => {
    // Add window resize event listener
    window.addEventListener("resize", handleResize);

    // Run once on initialization
    handleResize();

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty array means it only runs on mount and unmount

  return (
    <div
      className="navbar-container"
      style={{
        display: display ? "flex" : showSidebar ? "flex" : "none",
        position: position,
        padding: padding,
        background: background,
      }}
    >
      <div className="left-name">
        <h1 onClick={scrollToHomeDiv}>hzdev</h1>
      </div>
      <div className="right-lists">
        <button onClick={scrollToHomeDiv}>Home</button>
        <button onClick={scrollToAboutDiv}>About</button>
        <button onClick={scrollToPortfolioDiv}>Portfolio</button>
        <button onClick={scrollToContactDiv}>Contact</button>
      </div>
      <div className="right-button" onClick={handleDisplayShow}>
        <AiOutlineMenu />
      </div>
      <div
        className="navbar-pulldown-Menu"
        style={{ display: displayShow ? "flex" : "none" }}
      >
        <button
          onClick={() => {
            handleDisplayShow();
            scrollToHomeDiv();
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            handleDisplayShow();
            scrollToAboutDiv();
          }}
        >
          About
        </button>
        <button
          onClick={() => {
            handleDisplayShow();
            scrollToPortfolioDiv();
          }}
        >
          Portfolio
        </button>
        <button
          onClick={() => {
            handleDisplayShow();
            scrollToContactDiv();
          }}
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;
