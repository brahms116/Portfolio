import colors from "../styles/colors";

export default function PortfolioSubtitle(props: {
  subtitle: string;
  alternateColor?: string;
}) {
  return (
    <div className="portfolio_subtitle">
      <h4>{props.subtitle}</h4>
      <style jsx>{`
        .portfolio_subtitle {
          grid-area: subtitleA;
          color: ${props.alternateColor
            ? props.alternateColor
            : colors.primary};
        }
        h4 {
          font-size: 1.5rem;
        }
      `}</style>
    </div>
  );
}
