import colors from "../styles/colors";

export default function PortfolioMarker(props: { isFirst?: boolean }) {
  return (
    <div className={props.isFirst ? "first_marker" : "marker"}>
      <style jsx>{`
        .first_marker {
          background: ${colors.background};
          z-index: 1;
          grid-area: markerA;
          height: 90%;
          width: ${10 / 16}rem;

          position: relative;
        }
        .first_marker:before {
          position: absolute;
          content: "*";
          color: ${colors.primary};
          height: 1.5rem;
          width: ${34 / 16}rem;
          background: ${colors.primary};
          bottom: 0rem;
        }
        .marker {
          position: relative;
          top: -0.8rem;
          align-self: end;
          grid-area: markerA;
          height: 1.5rem;
          width: ${34 / 16}rem;
          background: ${colors.primary};
        }
      `}</style>
    </div>
  );
}
