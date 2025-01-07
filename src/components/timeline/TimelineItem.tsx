import { OverlayTrigger, Popover } from "react-bootstrap";
import characterData from "../../data/CharacterData";
import { formattedYearDetails } from "../../utils/dateUtil";
import { TimelineDataItem } from "../../utils/fileUtil";
import { getIconSvg } from "../../utils/iconUtil";
import CharacterPopover from "../CharacterPopover";
import "./TimelineItem.css";

import { ReactNode } from "react";
import reactStringReplace from "react-string-replace";
import { parseImageInfos } from "../../data/ImageData";
import DetailPanel from "../detail/DetailPanel";

type TimelineItemProps = {
  item: TimelineDataItem;
  time: string;
};

const TimelineItem: React.FC<TimelineItemProps> = ({ item, time }) => {
  // Year detail popover
  const yearDetail = formattedYearDetails(item.year);
  const yearPopover = (
    <Popover id="year-popover">
      <Popover.Body>{yearDetail}</Popover.Body>
    </Popover>
  );

  // Character detail popover

  let event: string | ReactNode[] = item.event;
  let detail: string | ReactNode[] | undefined = item.detail?.replace(
    /\\n/g,
    "\n"
  );
  let key = 0;
  characterData.forEach((character) => {
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
          <DetailPanel
            detail={detail}
            imageInfos={parseImageInfos(item)}
          ></DetailPanel>
        )}
        <span className="circle">{getIconSvg(item.category)}</span>
      </div>
    </div>
  );
};
export default TimelineItem;
