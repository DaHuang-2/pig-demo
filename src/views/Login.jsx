import React from "react";
import { Button } from "antd-mobile";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Login.less";

class Login extends React.PureComponent {
  render() {
    return (
      <div className="page-login">
        {/* 头部 */}
        <div className="headerbar">
          <Link to="/center">
            <i className="iconfont icon-cha"></i>
          </Link>
        </div>

        {/* 内容 */}
        <LoginRegister></LoginRegister>

        {/* 其他登录方式 */}
        <div className="other">
          <div className="other-item inline">
            <a href="https://m.hua.com/Passport/QQ/Login">
              <i className="iconfont icon-QQ"></i>
              <span>QQ</span>
            </a>
          </div>
          <div className="other-item">
            <span>|</span>
          </div>
          <div className="other-item">
            <a href="https://m.hua.com/Passport/Alipay/Login">
              <i className="iconfont icon-zhifubao"></i>
              <span>支付宝</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

class LoginRegister extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="container">
          <div className="hualogo">
            <img
              src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png"
              alt=""
            />
          </div>
          <div className="formgroup">
            <div className="formgroup-input">
              <input type="text" placeholder="请输入账号" />
            </div>
          </div>
          <div className="formgroup">
            <div className="formgroup-input">
              <input type="password" placeholder="请输入密码" />
            </div>
          </div>
          <div className="form-btn">
            <Button
              type="warning"
              style={{
                borderRadius: "50px",
                backgroundColor: "#ff734c"
              }}
            >
              登录
            </Button>
          </div>
          <div className="flex">
            {/* <div className="flex-left">
              账号密码登录
              <i className="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></i>
            </div> */}
            <div className="flex-right">
              <Link to="/register">没有账号，去注册</Link>
              <i className="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
