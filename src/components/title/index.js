import "./index.css";

export default function Title({
  title,
  rating,
  review,
  city,
  country,
  superhost,
}) {
  return (
    <div className="title">
      <h1 className="title_text">{title}</h1>
      <div className="title_sub_block">
        <span className="title_sub_value">{rating} рейтинг</span>
        <span className="title_sub_value">{review} відгуків</span>
        <span className="title_sub_value">
          {city}, {country}
        </span>
        {superhost && <span className="title_sub_value">Супер-хост</span>}
      </div>
    </div>
  );
}
