import React from "react";
import "./detail-information.less";
import { Switch } from "react-router";
import InformationMenu from "components/information-menu";
import { HashRouter as Router, Route, Link } from "react-router-dom";
interface DetailInformationProps {}
interface DetailInformationState {
  isClick: boolean;
  isLastStepClick: boolean;
}

class DetailInformation extends React.Component<
  DetailInformationProps,
  DetailInformationState
> {
  constructor(props: DetailInformationProps) {
    super(props);
    this.state = {
      isClick: false,
      isLastStepClick: false
    };
  }
  onMenuClick = () => {
    this.setState({
      isClick: !this.state.isClick
    });
  };
  onLastStepClick = () => {
    this.setState({
      isLastStepClick: !this.state.isLastStepClick
    });
  };
  getLastStep() {
    return this.state.isClick ? "information-click" : "";
  }

  render(): any {
    return (
      <div className="detail-information">
        <div className="information-header">
          <div
            className="iconfont icon-iconset0193 information-menu "
            onClick={this.onMenuClick}
          />
          <div className="information-name">Talon Thorley</div>
          <div className="iconfont icon-tianjia1 information-add" />
        </div>
        <div className="information-image">
          <img src={require("./1.jpg")} alt="" />
        </div>
        <div className="information-content">
          <div className="content-left">Talon Thorley</div>
          <div className="information-location iconfont icon-location">
            Beijing China
          </div>
          <div className="content-right">
            <span className="iconfont icon-diqiu" />
            <span className="iconfont icon-lianshu" />
            <span className="iconfont icon-tuitetwitter43" />
          </div>
        </div>
        <ul className="content-footer">
          <li>想看你笑，想和你闹，想用你入我怀抱</li>
          <li>上一秒，红着脸在争吵，下一秒转身就能和好</li>
          <li>不怕你哭，你怕你叫，因为你是我的骄傲</li>
          <li>一双眼睛追着你乱跑，一颗心早已经准备好</li>
          <li>
            一次就好，我带你去看天荒地老，在没有烦恼的角落里停止寻找，在自由在在的空气里吵吵闹闹
          </li>
        </ul>
        <div className="information-footer">
          <Link to="DetailInformation/Vartar">CONTINUE</Link>
        </div>
        <div className="information-menu">
          <InformationMenu
            isClick={this.state.isClick}
            isLastStepClick={this.state.isLastStepClick}
          />
          <div className={this.getLastStep()} onClick={this.onMenuClick} />
        </div>
      </div>
    );
  }
}

export default DetailInformation;
