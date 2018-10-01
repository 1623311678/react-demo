import React from "react";
import CustomerForm from "components/customer-form";
import "font/iconfont.css";
import "./ios-login.less";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class IosLogin extends React.Component {
  render() {
    return (
      <div className="ios-login">
        <div className="ios-box">
          <div className="ios-customer-box">
            <div className="iconfont icon-yonghu3" />
            <div className="ios-customer">
              <CustomerForm
                type={"text"}
                value1=""
                placeholder="请输入用户名"
              />
            </div>
          </div>
          <div className="ios-password-box">
            <div className="iconfont icon-suo" />
            <div className="ios-password">
              <CustomerForm
                type={"password"}
                value1=""
                placeholder="请输入密码"
              />
            </div>
          </div>
          <div className="ios-submit-box">
            <div className="form-submit">
              <Link to="/Recognize">
                <CustomerForm
                  type={"submit"}
                  value1="点击登陆"
                  placeholder=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IosLogin;
