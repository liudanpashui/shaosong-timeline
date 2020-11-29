import "./TimelineItem.css";
import { ReactComponent as BookIcon } from "../icons/book.svg";

const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      {/* <span className="tag" style={{ background: data.category.color }}>
        {data.category.tag}
      </span> */}
      <time>{data.date}</time>
      <p>{data.text}</p>
      {data.link && <a href={data.link.url}>{data.link.text}</a>}
      <span className="circle">
        <BookIcon />
      </span>
    </div>
  </div>
);
export default TimelineItem;
