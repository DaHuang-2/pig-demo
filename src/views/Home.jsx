import React from "react"
import { TabBar } from "antd-mobile"
import { Switch, Route, Redirect } from "react-router-dom"
import "./Home.less"
// 引入各模块组件
import HomeFirst from "./HomeFirst"
import HomeClassify from "./HomeClassify"
import HomeCart from "./HomeCart"
import HomeCenter from "./HomeCenter"

class Home extends React.PureComponent {
  state = {
    curItem: this.props.location.pathname.substr(1)
  }
  TableItems = [
    { title: "首页", id: "first", content: "首页" },
    { title: "分类", id: "classify", content: "分类" },
    { title: "购物车", id: "cart", content: "购物车" },
    { title: "我的", id: "center", content: "我的" }
  ]
  static getDerivedStateFromProps(props, state) {
    return {
      curItem: props.location.pathname.substr(1)
    }
  }
  render() {
    return (
      <div className='page-home'>
        {/* <h1>首页</h1> */}

        <Switch>
          <Route path='/first' component={HomeFirst}></Route>
          <Route path='/classify' component={HomeClassify}></Route>
          <Route path='/cart' component={HomeCart}></Route>
          <Route path='/center' component={HomeCenter}></Route>
          <Redirect to='./first'></Redirect>
        </Switch>
        <TabBar
          unselectedTintColor='#949494'
          tintColor='coral'
          barTintColor='white'
        >
          {this.TableItems.map(item => {
            return (
              <TabBar.Item
                title={item.title}
                key={item.id}
                icon={<i className={`iconfont icon-${item.id}`}></i>}
                selectedIcon={<i className={`iconfont icon-${item.id}`}></i>}
                selected={this.state.curItem === item.id}
                onPress={() => {
                  this.setState({
                    curItem: item.id
                  })

                  // 路由的跳转
                  this.props.history.push(`/${item.id}`)
                }}
              >
                {/* {item.content} */}
              </TabBar.Item>
            )
          })}
        </TabBar>
        {/* <Tabbar className="tabbar">
          <Tabbar.Item
            icon={<i className="iconfont icon-home"></i>}
            text="首页"
          ></Tabbar.Item>
          <Tabbar.Item
            icon={
              <i className="iconfont icon-dongbawen-yindao_xietongbangong"></i>
            }
            text="办公"
          ></Tabbar.Item>
          <Tabbar.Item
            icon={<i className="iconfont icon-huodong-copy"></i>}
            text="活动"
          ></Tabbar.Item>
          <Tabbar.Item
            icon={<i className="iconfont icon-wode1"></i>}
            text="我的"
          ></Tabbar.Item>
        </Tabbar> */}
      </div>
    )
  }
}

export default Home
