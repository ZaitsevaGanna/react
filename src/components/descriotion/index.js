import "./index.css";

import Heading from "../heading";

export default function Description({ title, children }) {
  return (
    <div className="description">
      <Heading>{title}</Heading>
      <p className="description_text">{children}</p>
    </div>
  );
}
