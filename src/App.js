import React, { Component } from "react";
import Timeline from "./components/Timeline";
import "./App.css";
import { parseTimelineData } from "./utils/csvUtil";
import timelineData from "./data/TimelineData.csv";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timelineData: [],
    };
  }
  componentDidMount() {
    fetch(timelineData)
      .then((r) => r.text())
      .then((text) => {
        const parsedData = parseTimelineData(text);
        this.setState({ timelineData: parsedData });
      });
  }

  render() {
    return (
      <div className="App">
        <p>
          【年表文字作者：
          <a href="https://h5.if.qidian.com/h5/share/post/base?circleId=15610037104915904&postId=481512730717716480">
            rottenweed
          </a>
          】
        </p>
        <p>这只是个草稿，被蛋灵帝泄密了，地图大佬还在画，更多内容敬请期待</p>
        <Timeline timelineData={this.state.timelineData} />
      </div>
    );
  }
}

export default App;
