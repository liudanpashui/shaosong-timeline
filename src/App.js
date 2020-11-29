import React, { Component } from "react";
import Timeline from "./components/Timeline";
import "./App.css";

class App extends Component {
  state = {
    timelineData: [
      {
        text:
          "可达鸭夺舍赵构。井皇帝出世。嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎。",
        date: "建炎二年\n八月",
        category: {
          tag: "人事",
          color: "#018f69",
        },
      },
      {
        text: "金军第三次南侵",
        date: "九月",
        category: {
          tag: "军事",
          color: "#018f69",
        },
        link: {
          url: "",
          text: "展开",
        },
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <Timeline timelineData={this.state.timelineData} />
      </div>
    );
  }
}

export default App;
