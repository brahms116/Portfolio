import React from "react";

export default function PortofolioHeadingContainer(props: {
  children: React.ReactNode;
}) {
  const count = React.Children.count(props.children);
  return (
    <div className="container">
      {React.Children.map(props.children, (child, i) => {
        if (i < count - 1) {
          return <div>{child}</div>;
        } else {
          return <div className="padded">{child}</div>;
        }
      })}
      <style jsx>{`
        .container {
          grid-area: headingsA;
        }
        .padded {
          margin-bottom: ${56 / 16}rem;
        }

        @media (min-width: 768px) {
          .container {
            display: flex;
            margin-bottom: ${56 / 16}rem;
          }
        }
      `}</style>
    </div>
  );
}
