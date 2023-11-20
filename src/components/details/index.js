import "./index.css";
import Guests from "./ic_round-people.svg";
import Bedrooms from "./material-symbols_bedroom-parent-sharp.svg";
import Beds from "./bed.svg";
import Baths from "./cil_bathroom.svg";

import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";

export default function Details({ title, guests, bedrooms, beds, baths }) {
  return (
    <Box shadow>
      <Heading border>{title}</Heading>

      <ListItem imageSrc={Guests}>{guests} гості</ListItem>
      <ListItem imageSrc={Bedrooms}>{bedrooms} спальня</ListItem>
      <ListItem imageSrc={Beds}>{beds} ліжко</ListItem>
      <ListItem imageSrc={Baths}>{baths} ванна кімната</ListItem>
    </Box>
  );
}
