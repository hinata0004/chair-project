import React from "react";
import "./wave-separator.css";
import Container from "./container";
import { Body } from "./body";

interface WaveSeparatorProps {
  bottomColor?: string;
}

const WaveSeparator: React.FC<WaveSeparatorProps> = ({
  bottomColor = "black",
}) => {
  return (
    <div className="wave-container flex flex-col gap-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1280 100"
        className="w-full block"
        // opacity="80%"
      >
        <path
          d="M -640 50 Q -480 50 -320 25 Q 0 -25 320 25 Q 480 50 640 50 Q 800 50 960 25 Q 1280 -25 1600 25 Q 1760 50 1920 50 L 1280 100 L 0 100 Z"
          fill={bottomColor}
        ></path>
      </svg>
      <Container>
        <Body />
      </Container>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1280 100"
        className="w-full block"
        opacity="80%"
      >
        <path
          d="M 0 50 Q 80 50 160 75 Q 320 125 480 75 Q 560 50 640 50 Q 720 50 800 75 Q 960 125 1120 75 Q 1200 50 1280 50 L 1280 0 L 0 0 Z"
          fill={bottomColor}
        ></path>
      </svg>
    </div>
  );
};

export default WaveSeparator;
