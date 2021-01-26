import React from "react";
import colors from "../styles/colors";
import Button from "./Button";

export default function LandingSection() {
  return (
    <div className="section">
      <img src="" alt="" className="cover_image" />
      <div className="title_section">
        <h1 className="title">DAVID KWONG</h1>
        <h2 className="subtitle">WEB DEV</h2>
        <Button label="VIEW MY WORK" onClick={() => {}}></Button>
      </div>
      <style jsx>{`
        .section {
          justify-items: center;
          display: grid;
          width: 100vw;
          min-height: 100vh;
          grid-template:
            "." ${78 / 16}rem
            "imageA" auto
            "." 4rem
            "title_sectionA" auto
            "." 1.25rem / auto;
        }

        @media (min-width: 768px) {
          grid-template: ". title_sectionA . imageA ." 100%/ 10% auto 1fr auto 10%;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
