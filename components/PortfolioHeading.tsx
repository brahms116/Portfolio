import colors from "../styles/colors";

export default function PortfolioHeading(props: {
  heading: string;
  items: string[];
  alternateColors?: {
    heading: string;
    item: string;
  };
}) {
  return (
    <div className="portfolio_heading">
      <h5 className="heading">{props.heading}</h5>
      <ul>
        {props.items.map((x, i) => {
          return <li key={i}>{x}</li>;
        })}
      </ul>
      <style jsx>{`
        .portfolio_heading {
          margin-top: ${52 / 16}rem;
        }
        .heading {
          font-size: 1.125rem;
          color: ${props.alternateColors
            ? props.alternateColors.heading
            : colors.primary};
          margin-bottom: ${22 / 16}rem;
        }
        li {
          list-style: none;
          font-size: 1.125rem;
          font-family: "Montserrat", sans-serif;
          color: ${props.alternateColors
            ? props.alternateColors.item
            : colors.text};
          margin-top: 0.875rem;
        }
        @media (min-width: 768px) {
          .portfolio_heading {
            margin-right: ${68 / 16}rem;
          }
        }
      `}</style>
    </div>
  );
}
