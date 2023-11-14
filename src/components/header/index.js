import "./index.css";
import logo from "./Logo.svg";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" height={32}></img>
    </header>
  );
}
