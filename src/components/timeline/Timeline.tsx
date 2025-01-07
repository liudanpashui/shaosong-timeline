import React from "react";
import { formattedDateMultipleLines } from "../../utils/dateUtil";
import { TimelineDataItem } from "../../utils/fileUtil";
import "./Timeline.css";
import TimelineItem from "./TimelineItem";

type TimelineProps = {
  timelineData: TimelineDataItem[];
};

export const Timeline: React.FC<TimelineProps> = ({ timelineData }) =>
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

function displayedDate(
  timelineData: TimelineDataItem[],
  item: TimelineDataItem,
  idx: number
): string {
  let year = item.year;
  let month = item.month;
  let date = item.date;
  if (idx > 0) {
    const previousDate = timelineData[idx - 1];
    previousDate.year === year && (year = "");
    previousDate.month === month && previousDate.date === date && (month = "");
    previousDate.date === date && (date = "");
  }
  return formattedDateMultipleLines(year, month || "", date || "");
}

export default Timeline;
