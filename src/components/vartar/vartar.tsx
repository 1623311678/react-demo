import React from "react";
import "./vartar.less";
import { Switch } from "react-router";
import { HashRouter as Router, Route, Link } from "react-router-dom";
interface VartarProps {}
interface VartarState {
  list: Array<{ id: number; item: string; location: string; image: string }>;
  isVartarClick: boolean;
  currentIndex: number;
}
class Vartar extends React.Component<VartarProps, VartarState> {
  constructor(props: VartarProps) {
    super(props);
    this.state = {
      list: [
        {
          id: 0,
          image: require("./1.jpg"),
          item: "若这个世界凋谢我会守在你身边",
          location: "北京"
        },
        {
          id: 1,
          image: require("./2.jpg"),
          item: "用沉默坚决对抗万语千言",
          location: "上海"
        },
        {
          id: 2,
          image: require("./3.jpg"),
          item: "倘若这世界一切都在无情的崩裂",
          location: "广州"
        },
        {
          id: 3,
          image: require("./4.jpg"),
          item: "我会用手中的线为你逢源",
          location: "深圳"
        },
        {
          id: 4,
          image: require("./5.jpg"),
          item: "陪你看日升月潜",
          location: "杭州"
        }
      ],
      isVartarClick: false,
      currentIndex: 0
    };
  }
  private onVartarClick = () => {
    this.setState({
      isVartarClick: true
    });
  };
  render() {
    const { list: data } = this.state;
    return (
      <div className="vartar">
        <div className="vartar-back">
          <div className="vartar-header">
            <Link to="/DetailInformation">
              <div className="vartar-laststep iconfont icon-shangyigeshi" />
            </Link>
            <div className="vartar-header-icon iconfont icon-iconset0193" />
            <div className="vartar-header-title">users</div>
          </div>
        </div>
        <div className="vartar-content">
          {data.map((item: any, index: number) => {
            return (
              <div key={index} className="vartar-content-information">
                <div className="vartar-image">
                  <img src={item.image} alt="" />
                </div>
                <div className="vartar-item">{item.item}</div>
                <div className="vartar-icon iconfont icon-location" />
                <div className="vartar-location">{item.location}</div>
              </div>
            );
          })}
        </div>

        {this.state.isVartarClick ? (
          <div>
            <div className="vartar-content">
              {data.map((item: any, index: number) => {
                return (
                  <div>
                    <div key={item.id} className="vartar-content-information">
                      <div className="vartar-image">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="vartar-item">{item.item}</div>
                      <div className="vartar-icon iconfont icon-location" />
                      <div className="vartar-location">{item.location}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="vartar-footer" onClick={this.onVartarClick}>
          点击加载更多
        </div>
      </div>
    );
  }
}

export default Vartar;
