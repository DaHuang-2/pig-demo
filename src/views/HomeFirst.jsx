import React from "react"
import { NavBar, Carousel } from "antd-mobile"
import "./HomeFirst.less"
import Product from "./Product"

// ==========================================================================================================

class HomeFirst extends React.PureComponent {
  // state 及其他数据
  state = {
    data: [
      "18_youflower_m.jpg?830",
      "19_day1111_m.jpg",
      "17_banner_tx_m.jpg",
      "18_birthday_m.jpg?830"
    ],
    flows: [
      { pic: "new2", tit: "新品来袭" },
      { pic: "quality2", tit: "品味之选" },
      { pic: "you2", tit: "设计师臻选" }
    ],
    loves: [
      { pic: "birthday", tit: "生日祝福" },
      { pic: "profess", tit: "表白求婚" },
      { pic: "business", tit: "开业商务" },
      { pic: "anniversary", tit: "周年纪念" }
    ],
    friends: [
      { pic: "lover", tit: "恋人" },
      { pic: "elder", tit: "长辈" },
      { pic: "friends", tit: "朋友" }
    ],
    picts: [
      { pic: "meiguihua", tit: "玫瑰花" },
      { pic: "yongshenghua", tit: "永生花" },
      { pic: "shengri-dangao", tit: "蛋糕" },
      { pic: "-fen-", tit: "礼品" },
      { pic: "chocolate", tit: "巧克力" }
    ]
  }

  // ============================================================================================

  handlelink = e => {
    let value = e.target.value
    console.log(value)
    e.preventDefault()
  }
  render() {
    const { data, flows, loves, friends, picts } = this.state
    return (
      <div className='page-first'>
        {/* <h1>第一个页面</h1> */}

        {/* 导航栏 */}
        <NavBar
          className='ww-nav'
          mode='light'
          icon={<i className='iconfont icon-009'></i>}
          onLeftClick={() => console.log("onLeftClick")}
          rightContent={[<i className='iconfont icon-kefu'></i>]}
        >
          <div className='picture'>
            <img
              src='https://m.hua.com/content/vue/login/static/img/m_hualogo.png'
              alt=''
            />
          </div>
        </NavBar>

        {/* 轮播图 */}
        <Carousel className='banner' autoplay infinite>
          {data.map((item, index) => (
            <a href='' key={index} onClick={this.handlelink}>
              <img
                src={`https://img02.hua.com/slider/${item}`}
                alt='设计师鲜花'
              />
            </a>
          ))}

          {/* <img src="" alt=""/> */}
        </Carousel>

        {/* 标记栏 */}
        <ul className='meta'>
          <li>
            <i className='iconfont icon-dui'></i>
            <span>认证龙头企</span>
          </li>
          <li>
            <i className='iconfont icon-dui'></i>
            <span>14年品牌</span>
          </li>
          <li>
            <i className='iconfont icon-dui'></i>
            <span>3小时送达</span>
          </li>
          <li>
            <i className='iconfont icon-dui'></i>
            <span>最近 338244 条好评</span>
          </li>
        </ul>

        {/* 分类 */}
        <div className='sorts'>
          {picts.map((item, index) => (
            <dl key={index}>
              <dt className={`iconfont icon-${item.pic}`}></dt>
              <dd>{item.tit}</dd>
            </dl>
          ))}
        </div>

        {/* =================================================================================================== */}

        {/* 我是从 一秒选花 开始到 新品来袭 的 父元素 */}
        <div className='all'>
          {/* 一秒选花 */}
          <div className='title'>
            <i></i>一秒选花
          </div>

          {/* 送花给亲朋好友 */}
          <div className='friends'>
            {friends.map((pop, index) => (
              <a href='' key={index}>
                <img
                  src={`https://img02.hua.com/m/home/img/m_home_use_${pop.pic}.png`}
                />
                <span>送{pop.tit}</span>
              </a>
            ))}
          </div>

          {/* 节日送花 */}
          <div className='active'>
            {loves.map((pop, index) => (
              <a className='newFlower' href='' key={index}>
                <img
                  src={`https://img02.hua.com/m/home/img/m_home_use_${pop.pic}2.png`}
                />
                <span>{pop.tit}</span>
              </a>
            ))}
          </div>

          {/* hot 热销 */}
          <div className='ww-hot'> 
            <a href=''>
              <p>热销榜</p>
              <p>集万千宠爱</p>
              <div className='hot-bottom'>
                <span>大家都在买</span>
                <span>热销10.9万束</span>
              </div>
            </a>
            <a href=''>
              <p>特价专区</p>
              <p>超值好货</p>
              <div className='hot-bottom'>
                <span>限时直降</span>
                <span>
                  <strong style={{ color: "orange" }}>￥132</strong>
                  <s style={{ color: "#ccc" }}>￥188</s>
                </span>
              </div>
            </a>
          </div>

          {/* 新品来袭 */}
          <div className='news'>
            {flows.map((pop, index) => (
              <a className='newFlower' href='' key={index}>
                <img
                  src={`https://img02.hua.com/m/home/img/m_home_category_${pop.pic}.png`}
                />
                <span>{pop.tit}</span>
              </a>
            ))}
          </div>
        </div>

        {/* ==================================================================================================== */}

        <Product></Product>
      </div>
    )
  }
}
export default HomeFirst
