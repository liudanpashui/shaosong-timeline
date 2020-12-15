import { Popover, OverlayTrigger } from "react-bootstrap";
import { age } from "../utils/dateUtil";

const CharacterPopover = ({ character, year, id }) => {
  const ageText =
    character.yearOfBirth > 0
      ? `（${age(character.yearOfBirth, year)}岁）`
      : "";
  const popover = (
    <Popover>
      <Popover.Content>{`${character.name}${ageText}`}</Popover.Content>
    </Popover>
  );
  return (
    <OverlayTrigger placement="auto" overlay={popover}>
      <span className="popover-link">{character.name}</span>
    </OverlayTrigger>
  );
};

export default CharacterPopover;
