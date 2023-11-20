import "./index.css";
//import hero_photo from "./hero-photo.png";

export default function Photo({ src, name }) {
  return <img src={src} alt={name} className="photo" />;
}
