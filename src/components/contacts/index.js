import "./index.css";

export default function Contacts({
  name,
  phone,
  response_time,
  rate,
  info,
  image,
}) {
  return (
    <div className="title">
      <div className="title_double">
        <img
          src={image}
          alt="photo"
          width={80}
          height={80}
          className="circle"
        />
        <div className="title">
          <h1 className="title_text">Господар -{name}</h1>
          <div className="title_sub_block">
            <span className="title_sub_value">{phone}</span>
            <span className="title_sub_value">{response_time}</span>
            <span className="title_sub_value">
              {rate}% відсотків швидкості відгуку
            </span>
          </div>
        </div>
      </div>
      <p>{info}</p>
    </div>
  );
}
