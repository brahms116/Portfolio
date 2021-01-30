import colors from "../styles/colors";

export default function PortfolioTitle(props: {
  title: string;
  alternateColor?: string;
}) {
  return (
    <div className="portfolio_title">
      <h3>{props.title}</h3>
      <style jsx>{`
        .portfolio_title {
          align-self: end;
          grid-area: titleA;
          color: ${props.alternateColor
            ? props.alternateColor
            : colors.primary};
        }
        h3 {
          font-size: 3.5rem;
        }
      `}</style>
    </div>
  );
}
