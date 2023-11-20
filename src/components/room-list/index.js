import "./index.css";

import Heading from "../heading";
import { Fragment } from "react";
import Box from "../box";

export default function RoomList({ list }) {
  return (
    <div className="room_block">
      <Heading>Типи номерів</Heading>

      <div className="room_list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ type, pricePerNight: price, currency, capacity }) {
  return (
    <Box className="room">
      <span className="room_title">{type}</span>
      <span className="room_info">Кількість гостей: {capacity}</span>
      <span className="room_title">
        {currency}
        {price}
      </span>
    </Box>
  );
}
