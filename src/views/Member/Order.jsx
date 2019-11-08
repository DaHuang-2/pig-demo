import React from "react";
import { NavBar, Tabs, Icon, Button } from "antd-mobile";
import { Link } from "react-router-dom";
import "./Order.less";

class Order extends React.PureComponent {
  render() {
    const tabs = [
      { title: "全部" },
      { title: "待付款" },
      { title: "今日配送" },
      { title: "待评价" }
    ];
    return (
      <div className="page-order">
        <div className="navbar">
          <NavBar
            mode="light"
            icon={
              <Icon
                type="left"
                color="#000"
                onClick={() => {
                  this.props.history.push("/center");
                }}
              />
            }
          >
            我的订单
          </NavBar>
        </div>
        <div className="tabs">
          <Tabs tabs={tabs} initialPage={2} tabBarActiveTextColor="#ff734c">
            <div className="tabs-item">
              <div className="tabs-img">
                <img src="https://img02.hua.com/m/order_empty.png" alt="" />
                <p>还没有相关的订单哦....</p>
              </div>
              <div className="tabs-btn">
                <Link to="/first">
                  <Button
                    type="warning"
                    style={{
                      height: "36px",
                      lineHeight: "36px",
                      width: "100px",
                      fontSize: "15px",
                      borderRadius: "50px",
                      backgroundColor: "#ff734c"
                    }}
                  >
                    去首页看看
                  </Button>
                </Link>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    );
  }
}
export default Order;
