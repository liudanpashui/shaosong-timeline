import { Popover, OverlayTrigger } from "react-bootstrap";
import { age } from "../utils/dateUtil";

const CharacterPopover = ({ character, year, id }) => {
  const ageText = character.yearOfBirth
    ? `（${age(character.yearOfBirth, year)}岁）`
    : "";

  let previousPosition;
  let newPosition;
  const positionDict = character.position;
  if (positionDict) {
    for (let key in positionDict) {
      if (id < key) {
        break;
      } else if (id === key) {
        newPosition = positionDict[key].join("，");
        break;
      } else {
        previousPosition = positionDict[key].join("，");
      }
    }
  }
  const popover = (
    <Popover>
      <Popover.Body>
        <span className="character-detail name">{`${character.name}${ageText}`}</span>
        {character.position &&
          (newPosition ? (
            <>
              <br />
              <span className="character-detail previous">
                {previousPosition}
              </span>
              <br />
              <span className="character-detail new">{newPosition}</span>
            </>
          ) : (
            <>
              <br />
              <span className="character-detail now">{previousPosition}</span>
            </>
          ))}
      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger placement="auto" overlay={popover}>
      <span className="popover-link">{character.name}</span>
    </OverlayTrigger>
  );
};

export default CharacterPopover;
