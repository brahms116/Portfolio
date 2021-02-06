import { useRouter } from "next/router";
import React, { useContext } from "react";
import IPortfolioItem from "../models/IPortfolioItem";
import { dataContext } from "../pages/_app";
import Button from "./Button";
import PortfolioHeading from "./PortfolioHeading";
import PortofolioHeadingContainer from "./PortfolioHeadingContainer";
import PortfolioMarker from "./PortfolioMarker";
import PortfolioSubtitle from "./PortfolioSubtitle";
import PortfolioTitle from "./PortfolioTitle";

export default function PortfolioItem(props: {
  isFirst?: boolean;
  item: IPortfolioItem;
}) {
  const router = useRouter();
  const appData = useContext(dataContext);
  return (
    <div className="portfolio_item">
      <PortfolioMarker isFirst={props.isFirst} />
      <PortfolioTitle
        title={props.item.title}
        onClick={() => {
          appData.setId(props.item.id);
          router.push("/items/" + props.item.id);
        }}
      />
      <PortfolioSubtitle subtitle={props.item.subtitle} />
      <PortofolioHeadingContainer>
        <PortfolioHeading
          heading="TECHNOLOGIES"
          items={props.item.technologies}
        />
        <PortfolioHeading heading="LANGUAGES" items={props.item.languages} />
      </PortofolioHeadingContainer>
      <div className="button_container">
        <Button
          onClick={() => {
            appData.setId(props.item.id);
            router.push("/items/" + props.item.id);
          }}
          label="VIEW MORE"
        />
      </div>
      <style jsx>{`
        .button_container {
          grid-area: buttonA;
          display: flex;
        }
        .portfolio_item {
          padding-bottom: 11rem;
          display: grid;
          grid-template:
            "markerA titleA" auto
            ". ." ${22 / 16}rem
            ". subtitleA" auto
            ". ." ${56 / 16}rem
            ". headingsA" auto
            ". buttonA" auto/ 16vw 1fr;
        }

        @media (min-width: 1000px) {
          .portfolio_item {
            grid-template:
              "markerA titleA" auto
              ". ." ${22 / 16}rem
              ". subtitleA" auto
              ". ." ${56 / 16}rem
              ". headingsA" auto
              ". buttonA" auto/ ${88 / 16}rem 1fr;
          }
        }
      `}</style>
    </div>
  );
}
