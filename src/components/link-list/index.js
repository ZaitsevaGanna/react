import { Fragment } from "react";
import "./index.css";
import Box from "../box";
import Heading from "../heading";

export default function LinkList({ list }) {
  return (
    <Box shadow>
      <Heading border>Пам'ятки поблизу</Heading>
      <div className="list_block">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Link {...rest} />
          </Fragment>
        ))}
      </div>
    </Box>
  );
}

function Link({ link, border = true, name }) {
  return (
    <div>
      <a href={link} className="linking">
        {name}
      </a>

      <div className={`${border ? "linking_border" : ""}`}></div>
    </div>
  );
}
// function Item({ type, pricePerNight: price, currency, capacity }) {
//   return (
//     <Box className="room">
//       <span className="room_title">{type}</span>
//       <span className="room_info">Кількість гостей: {capacity}</span>
//       <span className="room_title">
//         {currency}
//         {price}
//       </span>
//     </Box>
//   );
// }
