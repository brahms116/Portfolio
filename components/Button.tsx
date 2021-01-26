export default function Button(props: {
  label: string;
  className?: string;
  onClick: () => void;
  alternateColors?: {
    background: { idle: string; hover: string; pressed: string };
    text: string;
  };
}) {
  return (
    <button className={props.className}>
      {props.label}
      <style jsx>{``}</style>
    </button>
  );
}
