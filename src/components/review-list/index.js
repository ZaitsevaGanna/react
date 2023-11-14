import "./index.css";

import Heading from "../heading";
import { Fragment } from "react";
import Box from "../box";

export default function ReviewList({ list }) {
  return (
    <div className="room_block">
      <Heading>Відгуки клієнтів</Heading>

      <div className="room_list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Review {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Review({ rating, guestName, review }) {
  return (
    <Box className="room">
      <div className="review_double">
        <span className="review_title">{guestName}</span>
        <span className="review_info">Рейтинг: {rating}</span>
      </div>
      <span className="review_info">{review}</span>
    </Box>
  );
}
