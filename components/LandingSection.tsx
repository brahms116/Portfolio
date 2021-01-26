import React from "react";
import colors from "../styles/colors";
import Button from "./Button";
import coverImage from "../media/Cover.svg";

export default function LandingSection() {
  return (
    <div className="section">
      <img src={coverImage} alt="cover_image" className="cover_image" />
      <div className="title_section">
        <h1 className="title">DAVID KWONG</h1>
        <h2 className="subtitle">WEB DEV</h2>
        <div className="button_container">
          <Button label="VIEW MY WORK" onClick={() => {}}></Button>
        </div>
      </div>
      <style jsx>{`
        .section {
          background: none;
          justify-items: center;
          display: grid;
          width: 100vw;
          min-height: 100vh;
          grid-template:
            "." ${78 / 16}rem
            "imageA" auto
            "." 4rem
            "title_sectionA" auto
            "." 1fr / auto;
        }

        .cover_image {
          grid-area: imageA;
        }

        .title_section {
          text-align: center;
          color: ${colors.primary};
          display: flex;
          flex-direction: column;
          align-items: center;
          grid-area: title_sectionA;
          width: ${400 / 16}rem;
        }

        .title {
          font-size: ${72 / 16}rem;
          margin-bottom: 1.175rem;
        }

        .subtitle {
          font-size: 1.175rem;
          margin-bottom: ${46 / 16}rem;
        }
        .button_container {
          width: 80%;
        }
        @media (min-width: 768px) {
          .section {
            grid-template: ". title_sectionA . imageA ." 100%/ 10% auto 1fr auto 10%;
            align-items: center;
          }
          .title_section {
            text-align: left;
            align-items: start;
          }
          .button_container {
            width: auto;
          }
        }
        @media (min-width: 1000px) {
          .title_section {
            width: auto;
          }
        }
        @media (min-width: 1400px) {
          .section {
            grid-template: ". title_sectionA . imageA ." 100%/ 20% auto 1fr auto 20%;
          }
        }
      `}</style>
    </div>
  );
}
