import IPortfolioItem from "../models/IPortfolioItem";
import colors from "../styles/colors";
import { Element, scroller } from "react-scroll";
import PortfolioItem from "./PortfolioItem";
import { useContext, useEffect } from "react";
import { dataContext } from "../pages/_app";

export default function PortfolioSection(props: { items: IPortfolioItem[] }) {
  const appData = useContext(dataContext);

  useEffect(() => {
    if (appData.id !== "initial") {
      scroller.scrollTo(appData.id, {
        duration: 1600,
        smooth: "easeInOutCubic",
      });
    }
  }, []);
  return (
    <div className="section">
      <div className="left_banner" />
      {props.items.map((x, i) => {
        return i === 0 ? (
          <Element name={x.id} key={x.id}>
            <PortfolioItem isFirst item={x} />
          </Element>
        ) : (
          <Element name={x.id} key={x.id}>
            <PortfolioItem item={x} />
          </Element>
        );
      })}

      <style jsx>
        {`
          .section {
            box-sizing: border-box;
            position: relative;
            max-width: 100vw;
          }
          .left_banner {
            position: absolute;
            width: ${10 / 16}rem;
            height: 98%;
            background: ${colors.primary};
          }

          @media (min-width: 1000px) {
            .section {
              margin-left: ${100 / 16}rem;
            }
          }
        `}
      </style>
    </div>
  );
}
