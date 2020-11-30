import { ReactComponent as BookIcon } from "../icons/book.svg";
import { ReactComponent as BattleIcon } from "../icons/battle.svg";
import { ReactComponent as PersonIcon } from "../icons/person.svg";

export function getIconSvg(category) {
  if (category === "0") {
    return <PersonIcon />;
  } else if (category === "1") {
    return <BattleIcon />;
  } else {
    return <BookIcon />;
  }
}
