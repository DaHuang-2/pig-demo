import React from "react";
import { Button } from "antd-mobile";
import "./Login.less";

class Login extends React.PureComponent {
  render() {
    return (
      <div className="page-login">
        {/* 头部 */}
        <div className="headerbar">
          <i className="iconfont icon-cha"></i>
        </div>
        {/* 内容 */}
        <div className="container">
          <div className="hualogo">
            <img
              src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png"
              alt=""
            />
          </div>
          <div className="formgroup">
            <div className="formgroup-input">
              <input type="text" placeholder="请输入手机号" />
            </div>
          </div>
          <div className="formgroup">
            <div className="formgroup-input">
              <input type="password" placeholder="请输入短信验证码" />
              <div className="formgroup-btn">获取验证码</div>
            </div>
          </div>
          <div className="form-btn">
            <Button
              type="warning"
              style={{
                "border-radius": "50px",
                backgroundColor: "#ff734c"
              }}
            >
              手机登录/注册
            </Button>
          </div>
          <div className="flex">
            <div className="flex-left">
              账号密码登录
              <i className="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></i>
            </div>
            <div className="flex-right">
              注册
              <i className="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></i>
            </div>
          </div>
        </div>
        {/* 其他登录方式 */}
        <div className="other">
          <div className="other-item inline">
            <a href="">
              <i className="iconfont icon-QQ"></i>
              <span>QQ</span>
            </a>
          </div>
          <div className="other-item">
            <span>|</span>
          </div>
          <div className="other-item">
            <a href="">
              <i className="iconfont icon-zhifubao"></i>
              <span>支付宝</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
