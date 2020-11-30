import React from "react";
import TimelineItem from "./TimelineItem";
import "./Timeline.css";
import { formatDate } from "../utils/dateUtil";

const Timeline = ({ timelineData }) =>
  timelineData.length > 0 && (
    <div className="timeline-container">
      {timelineData.map((item, idx) => (
        <TimelineItem
          item={item}
          time={displayedDate(timelineData, item, idx)}
          key={idx}
        />
      ))}
    </div>
  );

function displayedDate(timelineData, item, idx) {
  let year = item.year;
  let month = item.month;
  let date = item.date;
  if (idx > 0) {
    const previousDate = timelineData[idx - 1];
    previousDate.year === year && (year = "");
    previousDate.month === month && previousDate.date === date && (month = "");
    previousDate.date === date && (date = "");
  }
  return formatDate(year, month, date);
}

export default Timeline;
