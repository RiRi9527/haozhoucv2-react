import React from "react";
import "./Portfoliopage.css";

import Portfoliocontext from "./componets/Portfoliocontext";
import { portfolioContext } from "../data/Data";
import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";

const Portfoliopage = ({ targetPortfolioRef }) => {
  return (
    <div className="portfolio-page" ref={targetPortfolioRef}>
      <div className="portfolio-title">
        <VscTriangleRight />
        <h1>Portfolio</h1>
        <VscTriangleLeft />
      </div>
      {portfolioContext.map(
        ({ id, src, height, h2, p, keyWord1, keyWord2, codeLink }) => (
          <Portfoliocontext
            key={id}
            src={src}
            height={height}
            h2={h2}
            p={p}
            keyWord1={keyWord1}
            keyWord2={keyWord2}
            codeLink={codeLink}
          />
        )
      )}
    </div>
  );
};

export default Portfoliopage;
