import React, { Component } from "react";
import Timeline from "./components/Timeline";
import "./App.css";
import { parseTimelineData } from "./utils/csvUtil";
import timelineData from "./data/TimelineData.csv";

class App extends Component {
  state = {
    timelineData: [],
  };

  render() {
    this.state.timelineData.length === 0 &&
      fetch(timelineData)
        .then((r) => r.text())
        .then((text) => {
          const parsedData = parseTimelineData(text);
          this.setState({ timelineData: parsedData });
        });
    return (
      <div className="App">
        <Timeline timelineData={this.state.timelineData} />
      </div>
    );
  }
}

export default App;
