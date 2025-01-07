import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { AboutPanel } from "./components/about/AboutPanel";
import { UrlPanel } from "./components/about/UrlPanel";
import ImageModal from "./components/detail/ImageModal";
import Timeline from "./components/timeline/Timeline";
import { ImageInfo, parseImageInfos } from "./data/ImageData";
import timelineDataText from "./data/TimelineData.csv";
import { parseTimelineData, TimelineDataItem } from "./utils/fileUtil";

const App: React.FC = () => {
  const [timelineData, setTimelineData] = useState<TimelineDataItem[]>([]);
  const [allImageInfos, setAllImageInfos] = useState<ImageInfo[]>([]);

  useEffect(() => {
    fetch(timelineDataText)
      .then((r) => r.text())
      .then((text) => {
        const parsedData = parseTimelineData(text);
        setTimelineData(parsedData);
        const imageInfos = parsedData.flatMap(
          (item) => parseImageInfos(item) || []
        );
        setAllImageInfos(imageInfos);
      });
  }, []);

  return (
    <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <div className="App">
        <UrlPanel />
        <AboutPanel />
        <Timeline timelineData={timelineData} />
        <Routes>
          <Route path="*" element={null} />
          {allImageInfos.map((image) => (
            <Route
              key={image.name}
              path={`/${image.name}`}
              element={<ImageModal image={image} />}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
