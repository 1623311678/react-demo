import React from "react";
import "./recognize.less";
import { HashRouter as Router, Route, Link } from "react-router-dom";

interface RecognizeState {
  list: Array<{ id: number; image: string; item: string; item1: string }>;
  isTouch: boolean;
  index: number;
  currentIndex: number;
  startX: any;
  endX: any;
  isMove: boolean;
}

interface Recognizeprops {}

const MIN_TOUCH_DISTENCE = 50;

class Recognize extends React.Component<Recognizeprops, RecognizeState> {
  constructor(props: Recognizeprops) {
    super(props);
    this.state = {
      list: [
        {
          id: 0,
          image: require("./1.jpg"),
          item: "若这个世界凋谢我会守在你身边",
          item1: "全都会化作永远"
        },
        {
          id: 1,
          image: require("./2.jpg"),
          item: "用沉默坚决对抗万语千言",
          item1: "我曾也不曾后退"
        },
        {
          id: 2,
          image: require("./3.jpg"),
          item: "倘若这世界一切都在无情的崩裂",
          item1: "在你心上，度过每个黑夜"
        },
        {
          id: 3,
          image: require("./4.jpg"),
          item: "我会用手中的线为你逢源",
          item1: "这是缘，亦是命中最美的相见"
        },
        {
          id: 4,
          image: require("./5.jpg"),
          item: "陪你看日升月潜",
          item1: "别恨天，笑容更适合你的脸"
        },
        {
          id: 5,
          image: require("./6.jpg"),
          item: "陪你看沧海变迁",
          item1: "再一遍，记起从前的一滴一点"
        },
        {
          id: 6,
          image: require("./7.jpg"),
          item: "陪你踱天明的街",
          item1: "别怨我不再身边"
        },
        {
          id: 7,
          image: require("./8.jpg"),
          item: "陪你一字又一言",
          item1: "十七层因我而有的笑脸"
        },
        {
          id: 8,
          image: require("./9.jpg"),
          item: "谱下回忆的诗篇",
          item1: "我会在你心间做你"
        },
        {
          id: 9,
          image: require("./10.jpg"),
          item: "我们过的那些年，",
          item1: "做你心头血"
        }
      ],
      isTouch: false,
      index: 0,
      currentIndex: 0,
      startX: "",
      endX: "",
      isMove: false
    };
  }
  OnClickScreen = () => {
    this.setState({
      isTouch: true,
      index:
        this.state.index === this.state.list.length - 1
          ? 1
          : this.state.index + 1
    });
  };
  getMove() {
    return this.state.isMove ? "isMoveClass" : "noMove";
  }
  /*handleTouchStart = (e: any) => {
    this.setState({
      startX: e.changedTouches[0].pageX,
      isTouch: true,
      index:
        this.state.index === this.state.list.length - 1
          ? 1
          : this.state.index + 1
    });
    console.log("start======" + this.state.startX);
  };
  handleTouchMove = (e: any) => {
    this.setState({ isMove: true });
  };
  handleTouchEnd(e: any, index: number) {
    if (this.state.endX - this.state.startX > 20) {
      // alert('点击左');
      this.clickLeft(index);
    } else if (this.state.startX - this.state.endX > 20) {
      // alert('点击右');
      this.clickRight();
    }

    this.setState({
      endX: e.changedTouches[0].pageX
    });
    console.log("end======" + this.state.endX);
  }
  clickLeft(indexParam: any) {
    const index = indexParam || this.state.index;
    console.log(index);
    this.setState({
      index: index === 0 ? this.state.list.length - 1 : index - 1
    });
  }

  clickRight() {
    const index = this.state.index;
    this.setState({
      index: index === this.state.list.length - 1 ? 0 : index + 1
    });
  }*/

  render() {
    let { list: data, isTouch, index } = this.state;

    return (
      <div className=" recognize">
        <div key={index} className="recognize-image">
          {isTouch ? (
            <img src={data[index].image} alt="" className={this.getMove()} />
          ) : (
            <img src={require("./1.jpg")} alt="" className={this.getMove()} />
          )}
        </div>

        <ul className="recognize-text">
          <li>{data[index].item}</li>
          <li>{data[index].item1}</li>
          <li>{data[index].item}</li>
          <li>{data[index].item1}</li>
          <li>{data[index].item}</li>
          <li>{data[index].item1}</li>
        </ul>
        <div className="recognize-footer" onClick={this.OnClickScreen}>
          加载更多图片
          <div className="iconfont icon-moreunfold recognize-icon" />
        </div>

        <div className="recognize-button">
          <Link to="/DetailInformation">点击查看详情 </Link>
        </div>
      </div>
    );
  }
}

export default Recognize;
