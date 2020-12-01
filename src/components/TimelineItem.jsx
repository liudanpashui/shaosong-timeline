import "./TimelineItem.css";
import { getIconSvg } from "../utils/iconUtil";
import DetailPanel from "./DetailPanel";

const TimelineItem = ({ item, time }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      {/* <span className="tag" style={{ background: item.category.color }}>
         item.category.tag}
      </span> */}
      <time>{time}</time>
      <p> {item.event}</p>
      {(item.detail || item.image) && <DetailPanel item={item}></DetailPanel>}
      <span className="circle">{getIconSvg(item.category)}</span>
    </div>
  </div>
);
export default TimelineItem;
