import React from "react";
import IPortfolioItem from "../models/IPortfolioItem";
import Button from "./Button";
import PortfolioHeading from "./PortfolioHeading";
import PortofolioHeadingContainer from "./PortfolioHeadingContainer";
import PortfolioSubtitle from "./PortfolioSubtitle";
import PortfolioTitle from "./PortfolioTitle";

export default function PortfolioDetailsHeadingSection(props: {
  item: IPortfolioItem;
}) {
  return (
    <div className="section">
      <style jsx>{`
        .section {
        }
      `}</style>
    </div>
  );
}
