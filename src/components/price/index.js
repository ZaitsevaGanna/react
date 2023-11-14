import "./index.css";
import Box from "../box";
import ListItem from "../list-item";

export default function Price({ price, discount, currency, ...rest }) {
  return (
    <Box className="price">
      <div className="price_header">
        <span
          className={`price_value ${
            discount ? "price_value_has_discount" : ""
          }`}
        >
          {currency}
          {price}
        </span>
        {discount && (
          <span className={"price_value"}>
            {currency}
            {discount}
          </span>
        )}
      </div>
      <List {...rest} currency={currency} />
    </Box>
  );
}
function List({ currency, cleaning = 0, service = 0, checkin, checkout }) {
  return (
    <ul className="price_list">
      <ListItem visible>
        <span>Плата за прибирання:</span>
        <span>
          {currency}
          {cleaning}
        </span>
      </ListItem>

      <ListItem visible>
        <span>Сервісний збір:</span>
        <span>
          {currency}
          {service}
        </span>
      </ListItem>

      <ListItem visible>
        <span>Дата прибуття:</span>
        <span>{checkin}</span>
      </ListItem>

      <ListItem visible>
        <span>Дата від'їзду:</span>
        <span>{checkout}</span>
      </ListItem>
    </ul>
  );
}
