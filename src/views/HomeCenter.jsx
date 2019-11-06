import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./HomeCenter.less";

const HomeCenter = () => {
  return (
    <div className="HomeCenter">
      {/* 头部 */}
      <div className="headerbar">
        <div className="headerbar-left">
          <Link to="/">
            <i className="iconfont icon-fanhui"></i>
          </Link>
        </div>
        <div className="headerbar-center">
          <p>个人中心</p>
        </div>
        <div className="headerbar-right"></div>
      </div>

      {/* 中间登录入口 */}
      <div className="isLogin">
        <div className="noLogin">
          <p className="noLogin-hi">Hi~欢迎来到花礼网</p>
          <p className="noLogin-btn">
            <Link to="/login">登录/注册</Link>
          </p>
        </div>
      </div>

      {/* 内容部分 */}
      <div className="main">
        <div className="panel-top">
          <div className="panel-top-header">
            <div className="panel-top-title">我的订单</div>
            <div className="panel-top-right">
              <a>
                全部订单
                <i className="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></i>
              </a>
            </div>
          </div>
          <div className="panel-top-body">
            <div className="order">
              <div className="order-item">
                <a>
                  <i className="iconfont icon-daifukuan"></i>
                </a>
                <p>待付款</p>
              </div>
              <div className="order-item">
                <a>
                  <i className="iconfont icon-truck"></i>
                </a>
                <p>今日配送</p>
              </div>
              <div className="order-item">
                <a>
                  <i className="iconfont icon-daipingjia"></i>
                </a>
                <p>待评价</p>
              </div>
            </div>
          </div>
        </div>
        <div className="panel-center">
          <div className="linkbox">
            <div className="linkbox-item">
              <a>
                <i className="iconfont icon-youhuijuan"></i>
              </a>
              <p>优惠卷</p>
            </div>
            <div className="linkbox-item">
              <a>
                <i className="iconfont icon-quanyiqia"></i>
              </a>
              <p>权益卡</p>
            </div>
            <div className="linkbox-item">
              <a>
                <i className="iconfont icon-yue"></i>
              </a>
              <p>余额</p>
            </div>
            <div className="linkbox-item">
              <a>
                <i className="iconfont icon-uEA-ste-service-"></i>
              </a>
              <p>会员积分</p>
            </div>
          </div>
          <div className="linkbox">
            <div className="linkbox-item">
              <a>
                <i className="iconfont icon-dizhi"></i>
              </a>
              <p>收货地址</p>
            </div>
            <div className="linkbox-item">
              <a>
                <i className="iconfont icon-naozhong"></i>
              </a>
              <p>生日提醒</p>
            </div>
            <div className="linkbox-item">
              <a>
                <i className="iconfont icon-wuxiaoxing-kong"></i>
              </a>
              <p>我的收藏</p>
            </div>
            <div className="linkbox-item">
              <a>
                <i className="iconfont icon-liulanjilu"></i>
              </a>
              <p>浏览记录</p>
            </div>
          </div>
        </div>
        <div className="panel-bottom">
          <div className="linkbox-bottom">
            <div className="linkbox-bottom-item">
              <a>
                <i className="iconfont icon-kefu"></i>
              </a>
              <p>联系客服</p>
            </div>
            <div className="linkbox-bottom-item">
              <a>
                <i className="iconfont icon-bangzhuzhongxin"></i>
              </a>
              <p>帮助中心</p>
            </div>
            <div className="linkbox-bottom-item">
              <a>
                <i className="iconfont icon-guanyu"></i>
              </a>
              <p>关于花礼</p>
            </div>
            <div className="linkbox-bottom-item">
              <a>
                <i className="iconfont icon-shezhi"></i>
              </a>
              <p>设置</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeCenter;
