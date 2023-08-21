import React, { useState, useEffect } from "react";

const TextAnimation = ({ texts }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [increasing, setIncreasing] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (increasing) {
        if (currentIndex < texts[currentPhraseIndex].length) {
          setDisplayText(
            texts[currentPhraseIndex].substring(0, currentIndex + 1)
          );
          setCurrentIndex(currentIndex + 1);
        } else {
          setIncreasing(false);
        }
      } else {
        if (currentIndex > 0) {
          setDisplayText(
            texts[currentPhraseIndex].substring(0, currentIndex - 1)
          );
          setCurrentIndex(currentIndex - 1);
        } else {
          setIncreasing(true);
          setCurrentPhraseIndex((currentPhraseIndex + 1) % texts.length);
        }
      }
    }, 150);

    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex, increasing, currentPhraseIndex]);

  return (
    <div>
      <div className="animation-text">{displayText}</div>
    </div>
  );
};

export default TextAnimation;
