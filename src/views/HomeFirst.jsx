import React from "react"
import { NavBar, Carousel } from "antd-mobile"
import "./HomeFirst.less"

class HomeFirst extends React.PureComponent {
  state = {
    // data: ["17_banner_tx_m", "19_day1111_m", "18_youflower_m.jpg?830"],
    data: ["1", "2", "3"],

    imgHeight: 180
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [
          "AiyWuByWklrrUDlFignR",
          "TekJlZRVCjLFexlOCuWn",
          "IJOtIlfsYdTyaDTRVrLI"
        ]
      })
    }, 100)
  }
  render() {
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
          <h3>Hua.com 花礼网</h3>
        </NavBar>

        {/* 轮播图 */}
        <Carousel
          autoplay
          infinite
          // beforeChange={(from, to) =>
          //   console.log(`slide from ${from} to ${to}`)
          // }
          afterChange={index => console.log("slide to", index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href='http://www.alipay.com'
              style={{
                display: "inline-block",
                width: "100%",
                height: "auto"
              }}
            >
              {/* <img src="https://img02.hua.com/slider/.jpg" alt="星座"></img> */}
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                // src={`https://img02.hua.com/slider/${val}.jpg`}
                alt=''
                style={{ width: "100%", height: "180px" }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event("resize"))
                  this.setState({ imgHeight: "180px" })
                }}
              />
            </a>
          ))}
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
          <dl>
            <dt className='iconfont icon-meiguihua'></dt>
            <dd>鲜花</dd>
          </dl>
          <dl>
            <dt className='iconfont icon-yongshenghua'></dt>
            <dd>永生花</dd>
          </dl>
          <dl>
            <dt className='iconfont icon-shengri-dangao'></dt>
            <dd>蛋糕</dd>
          </dl>
          <dl>
            <dt className='iconfont icon--fen-'></dt>
            <dd>礼品</dd>
          </dl>
          <dl>
            <dt className='iconfont icon-chocolate'></dt>
            <dd>巧克力</dd>
          </dl>
        </div>

        {/* 一秒选花 */}
        <div className='title'>
          <i></i>一秒选花
        </div>

        {/* 送花给亲朋好友 */}
        <div className='friends'>
          <div className='flower'>
            <p>
              <img src='https://img02.hua.com/m/home/img/m_home_use_lover.png' />
            </p>
            <span>送恋人</span>
          </div>

          <div className='flower'>
            <p>
              <img
                src='https://img02.hua.com/m/home/img/m_home_use_elder.png'
                alt='送长辈'
              />
            </p>
            <span>送长辈</span>
          </div>
          <div className='flower'>
            <p>
              <img
                src='https://img02.hua.com/m/home/img/m_home_use_friends.png'
                alt='送朋友'
              />
            </p>
            <span>送朋友</span>
          </div>
        </div>

        {/* 节日送花 */}
        <div className='active'>
          <a href=''>
            <img
              src='https://img02.hua.com/m/home/img/m_home_use_anniversary2.png'
              alt='周年纪念'
            />
            <span>生日祝福</span>
          </a>

          <a href=''>
            <img
              src='https://img02.hua.com/m/home/img/m_home_use_anniversary2.png'
              alt='周年纪念'
            />
            <span>生日祝福</span>
          </a>
          <a href=''>
            <img
              src='https://img02.hua.com/m/home/img/m_home_use_anniversary2.png'
              alt='周年纪念'
            />
            <span>生日祝福</span>
          </a>
          <a href=''>
            <img
              src='https://img02.hua.com/m/home/img/m_home_use_anniversary2.png'
              alt='周年纪念'
            />
            <span>生日祝福</span>
          </a>
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
            <p>热销榜</p>
            <p>集万千宠爱</p>
            <div className='hot-bottom'>
              <span>限时直降</span>
              <span>限时直销</span>
            </div>
          </a>
        </div>
      </div>
    )
  }
}
export default HomeFirst
