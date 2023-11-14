import "./index.css";

export default function ListItem({
  children,
  imageSrc,
  title,
  visible = true,
}) {
  return (
    <li className={`list_item_none ${visible ? "list_item" : ""} `}>
      {imageSrc && <img height={24} width={24} src={imageSrc} alt="Icon" />}
      <div className="list_item_block">
        {title && <strong className="list_title_item">{title}</strong>}
        <div className="list_item_content">{children}</div>
      </div>
    </li>
  );
}
