import "./TimelineItem.css";
import { Popover, OverlayTrigger } from "react-bootstrap";
import { getIconSvg } from "../utils/iconUtil";
import DetailPanel from "./DetailPanel";
import {
  formattedYearDetails,
  formattedDateSingleLine,
} from "../utils/dateUtil";
import CharacterPopover from "./CharacterPopover";
import characterData from "../data/CharacterData";
const reactStringReplace = require("react-string-replace");

const TimelineItem = ({ item, time }) => {
  // Year detail popover
  const yearDetail = formattedYearDetails(item.year);
  const yearPopover = (
    <Popover id="year-popover">
      <Popover.Content>{yearDetail}</Popover.Content>
    </Popover>
  );

  // Character detail popover
  let event = item.event;
  let detail = item.detail?.replace(/\\n/g, "\n");
  let key = 0;
  characterData.forEach((character, idx) => {
    event = reactStringReplace(event, character.name, () => (
      <CharacterPopover
        character={character}
        year={item.year}
        id={item.id}
        key={key++}
      />
    ));
    item.detail &&
      (detail = reactStringReplace(detail, character.name, () => (
        <CharacterPopover
          character={character}
          year={item.year}
          id={item.id}
          key={key++}
        />
      )));
  });

  // Image view model
  const imageInfos = () => {
    if (!item.image) return undefined;
    const imageNames = Array.isArray(item.image) ? item.image : [item.image];
    const imageAuthors = Array.isArray(item.imageAuthor)
      ? item.imageAuthor
      : [item.imageAuthor];
    const imageSources = Array.isArray(item.imageSource)
      ? item.imageSource
      : [item.imageSource];

    return imageNames.map((_, index) => {
      return {
        name: imageNames[index],
        title: formattedDateSingleLine(item.year, item.month, item.date),
        path: require(`../images/${imageNames[index]}`).default,
        author: imageAuthors[index],
        link: imageSources[index],
      };
    });
  };

  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        {/* <span className="tag" style={{ background: item.category.color }}>
         item.category.tag}
      </span> */}
        <OverlayTrigger placement="top-end" overlay={yearPopover}>
          <time className="popover-link">{time}</time>
        </OverlayTrigger>
        <p> {event}</p>
        {(item.detail || item.image) && (
          <DetailPanel detail={detail} imageInfos={imageInfos()}></DetailPanel>
        )}
        <span className="circle">{getIconSvg(item.category)}</span>
      </div>
    </div>
  );
};
export default TimelineItem;
