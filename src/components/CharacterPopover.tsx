import { OverlayTrigger, Popover } from "react-bootstrap";
import { Character } from "../data/CharacterData";
import { age } from "../utils/dateUtil";

type CharacterPopoverProps = {
  character: Character;
  year: string;
  id: number;
};

const CharacterPopover: React.FC<CharacterPopoverProps> = ({
  character,
  year,
  id,
}) => {
  const ageText = character.yearOfBirth
    ? `（${age(character.yearOfBirth, year)}岁）`
    : "";

  let previousPosition;
  let newPosition;
  const positionDict = character.position;
  if (positionDict) {
    for (let key in positionDict) {
      const keyAsNumber = Number(key);
      if (id < keyAsNumber) {
        break;
      } else if (id === keyAsNumber) {
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
