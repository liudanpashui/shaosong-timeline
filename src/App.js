import React, { Component } from "react";
import Timeline from "./components/Timeline";
import "./App.css";
import { parseTimelineData } from "./utils/fileUtil";
import timelineData from "./data/TimelineData.csv";
import { Popover, OverlayTrigger } from "react-bootstrap";

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
        <table className="about">
          <tr>
            <td colspan="2">
              《绍宋》榴弹怕水 著（
              <a
                href="https://book.qidian.com/info/1017281778"
                rel="noreferrer"
                target="_blank"
              >
                起点正版阅读
              </a>
              ）
            </td>
          </tr>
          <tr>
            <td>年表作者：</td>
            <td>
              <a
                href="https://h5.if.qidian.com/h5/share/post/base?circleId=15610037104915904&postId=481512730717716480"
                rel="noreferrer"
                target="_blank"
              >
                rottenweed（至建炎九年十月)
              </a>

              <a
                href="https://h5.if.qidian.com/h5/share/post/base?circleId=15610037104915904&postId=598539036679798784"
                rel="noreferrer"
                target="_blank"
              >
                （建炎九年十一月起）
              </a>
            </td>
          </tr>
          <tr>
            <td>地图绘制：</td>
            <td>
              <a
                href="https://h5.if.qidian.com/h5/share/post/base?circleId=15610037104915904&postId=545540574627889152"
                rel="noreferrer"
                target="_blank"
              >
                悦冻窝心
              </a>
              ，
              <a
                href="https://h5.if.qidian.com/h5/share/post/base?circleId=15610037104915904&postId=545773599232032768"
                rel="noreferrer"
                target="_blank"
              >
                一往无前张德远
              </a>
              ，
              <a
                href="https://bbs.nga.cn/read.php?tid=24008898"
                rel="noreferrer"
                target="_blank"
              >
                逐日金痕
              </a>
              ，
              <a
                href="https://h5.if.qidian.com/h5/share/post/base?circleId=15610037104915904&postId=578188066485960704"
                rel="noreferrer"
                target="_blank"
              >
                floydluo
              </a>
              ，
              <a
                href="https://bbs.nga.cn/read.php?tid=25621895"
                rel="noreferrer"
                target="_blank"
              >
                wangxiaochaun
              </a>
              ，
              <a
                href="https://bbs.nga.cn/read.php?tid=26081223"
                rel="noreferrer"
                target="_blank"
              >
                Nsity
              </a>
              ，
              <a
                href="https://bbs.nga.cn/read.php?tid=27129490"
                rel="noreferrer"
                target="_blank"
              >
                焉支山_M
              </a>
            </td>
          </tr>
          <tr>
            <td>年龄考据：</td>
            <td>
              <a
                href="https://bbs.nga.cn/read.php?tid=24298333"
                rel="noreferrer"
                target="_blank"
              >
                Melissa兰
              </a>
            </td>
          </tr>
          <tr>
            <td>网页制作：</td>
            <td>
              夏侯宁远 （
              <a
                href="https://github.com/liudanpashui/shaosong-timeline"
                rel="noreferrer"
                target="_blank"
              >
                Github源码
              </a>
              ）
            </td>
          </tr>
          <tr>
            <td>更新日志：</td>
            <td>2021.8.2 更新至建炎十年八月，可达鸭祭于明道宫，正文完。</td>
          </tr>
          <tr>
            <td></td>
            <td>
              2024.3.21 更新番外时间线：建炎十八年（
              <a
                href="https://www.qidian.com/chapter/1017281778/665198046/"
                rel="noreferrer"
                target="_blank"
              >
                番外1
              </a>
              ，
              <a
                href="https://www.qidian.com/chapter/1017281778/666939303/"
                rel="noreferrer"
                target="_blank"
              >
                番外2
              </a>
              ，
              <OverlayTrigger
                placement="auto"
                overlay={
                  <Popover>
                    <Popover.Content>
                      不在正文内，手机app搜索单独书名《绍宋：番外》，作者：榴弹怕水，网页版看不到
                    </Popover.Content>
                  </Popover>
                }
              >
                <span className="popover-link">《绍宋：番外》</span>
              </OverlayTrigger>
              ），
              <OverlayTrigger
                placement="auto"
                overlay={
                  <Popover>
                    <Popover.Content>
                      手机app《绍宋》最新章，网页版看不到
                    </Popover.Content>
                  </Popover>
                }
              >
                <span className="popover-link">建炎三十六年</span>
              </OverlayTrigger>
              。
            </td>
          </tr>
        </table>

        <Timeline timelineData={this.state.timelineData} />
      </div>
    );
  }
}

export default App;
