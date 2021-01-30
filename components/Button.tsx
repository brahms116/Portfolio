import colors from "../styles/colors";

export default function Button(props: {
  label: string;
  onClick: () => void;
  alternateColors?: {
    background: { idle: string; hover: string; pressed: string };
    text: string;
  };
}) {
  return (
    <div className="button" onClick={props.onClick}>
      {props.label}
      <style jsx>{`
        .button {
          grid-area: buttonA;
          box-sizing: border-box;
          padding: 0.8rem ${28 / 16}rem;
          text-align: center;
          border-radius: ${10 / 16}rem;
          color: ${props.alternateColors
            ? props.alternateColors.text
            : colors.primary};
          background: ${props.alternateColors
            ? props.alternateColors.background.idle
            : colors.button};
          cursor: pointer;
        }

        .button:hover {
          background: ${props.alternateColors
            ? props.alternateColors.background.hover
            : colors.buttonHover};
        }

        .button:active {
          background: ${props.alternateColors
            ? props.alternateColors.background.pressed
            : colors.buttonDown};
        }
      `}</style>
    </div>
  );
}
