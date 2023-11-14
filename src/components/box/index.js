import "./index.css";

export default function Box({ children, className, shadow }) {
  return (
    <div className={`box ${shadow ? "box_shadow" : ""} ${className}`}>
      {children}
    </div>
  );
}
