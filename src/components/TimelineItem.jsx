import "./TimelineItem.css";
import { getIconSvg } from "../utils/iconUtils";

const TimelineItem = ({ item, time }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      {/* <span className="tag" style={{ background: item.category.color }}>
         item.category.tag}
      </span> */}
      <time>{time}</time>
      <p> {item.event}</p>
      {/*  item.link && <a href= item.link.url}> item.link.text}</a>} */}
      <span className="circle">{getIconSvg(item.category)}</span>
    </div>
  </div>
);
export default TimelineItem;
