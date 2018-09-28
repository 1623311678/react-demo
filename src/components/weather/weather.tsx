import React from "react";
import "./weather.less";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class Weather extends React.Component {
  render() {
    return (
      <div className="weather">
        <div className="weather-icon">
          <Link to="/">
            <li className="shangyibu">上一步</li>
          </Link>
          <li>葫芦岛</li>

          <Link to="/City">
            <li> 切换</li>
          </Link>
        </div>
        <div className="tempeature">32°C</div>
        <div className="date">
          <li>8月11日周六</li>
          <li>农历七月初一</li>
        </div>
        <div className="weather-detail">
          <li>今天白天</li>
          <li>多云</li>
          <li className="max-weather">最高：33°C</li>
          <li>今日夜雨</li>
          <li>阵雨</li>
          <li className="min-weather">最低：23°C</li>
        </div>
        <div className="wind">
          <li>风向：南风</li>
          <li>风力：2级</li>
          <li>湿度：52%</li>
          <li>紫外线强度：中等</li>
          <li>日出：04：57 </li>
          <li>日落：19：01</li>
        </div>
        <div className="tips">
          <li>天气炎热 建议穿薄衬衫短裤等夏装。</li>
          <li>建议带伞 短时外出可以不带伞。</li>
          <li>少发感冒 发生感冒机率较低。</li>
          <li>晚上下雨 别忘记带伞哦！</li>
          <li>较不宜晨练 受天气影响，较不宜称晨练</li>
          <li>紫外线中等 外出需要涂抹数倍防晒霜</li>
        </div>
      </div>
    );
  }
}

export default Weather;
