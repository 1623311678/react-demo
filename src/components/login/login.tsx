import React from "react";
import "./login.less";
import "font/iconfont.css";
import CustomerForm from "components/customer-form"


class Login extends React.Component {
  render() {
    return (
      <div className="demo20-login">
        <div className="login-top">
          <div className="login-text">LOGIN</div>
        </div>

        <div className="login-customer">
          <span className="icon-customer">
            <span className="icon-box">
              <span className="iconfont icon-yonghu3" />
            </span>
          </span>
          <span>
            <CustomerForm type={"text"} value1=""placeholder="请输入用户名" />
          </span>
        </div>

        <div className="login-password">
        <span className="icon-password">
            <span className="icon-box">
              <span className="iconfont icon-suo" />
            </span>
          </span>
          <span className="password-text">
            <CustomerForm type={"password"} value1="" placeholder="请输入密码"/>
          </span>
        </div>
        <div className="login-bottom">
          <div className="login-signin">
            <div className="sigin">
            <span className="iconfont icon-kaishi" />
              <CustomerForm type={"submit"} value1="点击登陆" placeholder=""/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
