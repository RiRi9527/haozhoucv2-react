import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { RiExternalLinkLine } from "react-icons/ri";

const Portfoliocontext = ({
  src,
  height,
  h2,
  p,
  keyWord1,
  keyWord2,
  codeLink,
}) => {
  const handleIframeClick = () => {
    // Perform the action of jumping to an external webpage here
    window.open(src, "_blank");
  };
  return (
    <div className="portfolio-context">
      <div className="project-container" onClick={handleIframeClick}>
        <iframe
          // do not use same className Double check!!!!
          className={h2}
          // do not use same className Double check!!!!
          title="External Website"
          src={src}
          width="100%"
          // go to CSS and change .project-container:hover .{h2} then can roll
          height={height}
          // go to CSS and change .project-container:hover .{h2}then can roll
        ></iframe>
      </div>
      <div className="intro-container">
        <h2>{h2}</h2>
        <p>{p}</p>
        <div className="intro-skills-container">
          <div>{keyWord1}</div>
          <div>{keyWord2}</div>
        </div>
        <div className="intro-links-container">
          <a href={codeLink} target="_blank" rel="Hao">
            <div>
              Code <AiFillGithub />
            </div>
          </a>
          <a href={src} target="_blank" rel="Hao">
            <div>
              Live Demo <RiExternalLinkLine />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfoliocontext;
