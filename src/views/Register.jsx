import React from "react";
import { Button } from "antd-mobile";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Register.less";

class Register extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      username: "", //账号
      pwd: "" // 密码
    };
  }

  //去登录
  handleGoLogin() {
    this.props.history.push("/login");
  }
  //绑定表单值
  handleChange(key, val) {
    this.setState({
      [key]: val
    });
  }
  render() {
    return (
      <div className="page-register">
        {/* 头部 */}
        <div className="headerbar">
          <Link to="/center">
            <i className="iconfont icon-cha"></i>
          </Link>
        </div>

        {/* 内容 */}
        <div className="container">
          <div className="hualogo">
            <p>手机号注册</p>
          </div>
          <div className="formgroup">
            <div className="formgroup-input">
              <input
                type="text"
                placeholder="请输入手机号"
                onChange={value => this.handleChange("username", value)}
              />
            </div>
          </div>
          {/* <div className="formgroup">
            <div className="formgroup-input">
              <input type="text" placeholder="请输入短信验证码" />
              <div className="formgroup-btn">获取验证码</div>
            </div>
          </div> */}
          <div className="formgroup">
            <div className="formgroup-input">
              <input
                type="password"
                placeholder="请设置密码"
                onChange={value => this.handleChange("pwd", value)}
              />
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
              注册
            </Button>
          </div>
          <div className="flex">
            {/* <div className="flex-left">
              账号密码登录
              <i className="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></i>
            </div> */}
            <div className="flex-right">
              <Link to="/login">已有帐号，去登录</Link>
              <i className="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></i>
            </div>
          </div>
        </div>

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

export default Register;
