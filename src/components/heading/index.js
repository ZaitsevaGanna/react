import { Fragment } from "react";
import "./index.css";

export default function Heading({ children, border }) {
  return (
    <Fragment>
      <span className={`heading`}>{children}</span>
      <div className={`${border ? "heading_border" : ""}`}></div>
    </Fragment>
  );
}
