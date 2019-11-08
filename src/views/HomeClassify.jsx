import React from "react"
import "./HomeClassify.less"
import { Tabs, WhiteSpace } from "antd-mobile"
import HomeDetail from "./HomeDetail"
import { Route, Switch } from "react-router-dom"
import axios from "axios"

const tabs = [
  { title: "热门推荐" },
  { title: "鲜花" },
  { title: "永生花" },
  { title: "蛋糕" },
  { title: "特色礼品" },
  { title: "礼篮" }
]

class HomeClassify extends React.Component {
  state = {
    flowersList: []
  }
  render() {
    return (
      <div className='page-Classify'>
        <header>
          <div className='headerBar'>
            <span className='iconfont  icon-fanhui'></span>
          </div>

          <div className="page-content "style={{ borderRadius:"20px",marginRight:"5px",padding:"0px 20px"}}>
            <div className="headerbar-content-left" >
              <i className="iconfont icon-sousuo"></i>
            </div>
            <div className='headerbar-content-center'>
              <input
                type='search'
                placeholder='蛋糕，搜索，礼品'
                maxLength={8}
               
               
              />
            </div>
          </div>
        </header>

        <TabExample bar={this.state.flowersList}></TabExample>
      </div>
    )
  }

  componentDidMount() {
    axios.get("/posts").then(response => {
      let result = response.data
      // console.log(result)
      this.setState({
        flowersList: result
      })
    })
  }
}

const TabExample = props => {
  console.log(props.bar)
  return (
    <div style={{ height: 555}}>
      <WhiteSpace />
      <Tabs
        tabs={tabs}
        tabBarPosition='left'
        tabDirection='vertical'
        onChange={(tab, index) => {
          console.log("onChange", index, tab)
        }}
        onTabClick={(tab, index) => {
          console.log("onTabClick", index, tab)
        }}
      >
        {props.bar.map(item => {
          return (
            <div
              style={{
                // display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fff"
              }}
            >
               <div className="zp-all">
                <img src={item.url} alt=""/>
                </div>
               <div className="zp-pic">
                {/* 第一竖列 */}
                 <div className="zp-pic-i" style={{textAlign:"center",width:"33.3%",height:"80px",marginTop:"10px"}}>
                  <img src={item.pic} alt="" style={{width:"56px",height:"56px",marginBottom:"10px"}}/>
                  <p style={{fontSize: "16px",fontWeight:"300",}}>{item.title}</p>
                  <img src={item.pic02} alt="" style={{width:"56px",height:"56px",marginBottom:"10px",marginTop:"10px"}}/>
                  <p style={{fontSize: "16px",fontWeight:"300",}}>{item.title02}</p>
                  <img src={item.pic03} alt="" style={{width:"56px",height:"56px",marginBottom:"10px",marginTop:"10px"}}/>
                  <p style={{fontSize: "16px",fontWeight:"300",}}>{item.title03}</p>
                  <img src={item.pic02} alt="" style={{width:"56px",height:"56px",marginBottom:"10px",marginTop:"10Px"}}/>
                  <p style={{fontSize: "16px",fontWeight:"300",}}>{item.title02}</p>
                  <img src={item.pic02} alt="" style={{width:"56px",height:"56px",marginBottom:"10px",marginTop:"10px"}}/>
                  <p style={{fontSize: "16px",fontWeight:"300",}}>{item.title02}</p>
                  <img src={item.pic02} alt="" style={{width:"56px",height:"56px",marginBottom:"10px",marginTop:"10px"}}/>
                  <p style={{fontSize: "16px",fontWeight:"300",}}>{item.title02}</p>
                  <img src={item.pic02} alt="" style={{width:"56px",height:"56px",marginBottom:"10px",marginTop:"10px"}}/>
                  <p style={{fontSize: "16px",fontWeight:"300",}}>{item.title02}</p>
                  </div>
                  


                  {/* 第二竖列 */}
                  <div className="zp-pic-i" style={{textAlign:"center",width:"33.3%",height:"80px",marginTop:"10px"}}>
                  <img src={item.pic01} alt="" style={{width:"56px",height:"56px",marginBottom:"10px"}}/>
                  <p style={{fontSize: "16px",fontWeight:"300",}}>{item.title01}</p>
                  <img src={item.pic02} alt="" style={{width:"56px",height:"56px",marginBottom:"10px",marginTop:"10px"}}/>
                  <p style={{fontSize: "16px",fontWeight:"300",}}>{item.title02}</p>
                  <img src={item.pic04} alt="" style={{width:"56px",height:"56px",marginBottom:"10px",marginTop:"10px"}}/>
                  <p style={{fontSize: "16px",fontWeight:"300",}}>{item.title04}</p>
                  <img src={item.pic02} alt="" style={{width:"56px",height:"56px",marginBottom:"10px",marginTop:"10px"}}/>
                  <p style={{fontSize: "16px",fontWeight:"300",}}>{item.title02}</p>
                  <img src={item.pic02} alt="" style={{width:"56px",height:"56px",marginBottom:"10px",marginTop:"10px"}}/>
                  <p style={{fontSize: "16px",fontWeight:"300",}}>{item.title02}</p>
                  <img src={item.pic02} alt="" style={{width:"56px",height:"56px",marginBottom:"10px",marginTop:"10px"}}/>
                  <p style={{fontSize: "16px",fontWeight:"300",}}>{item.title02}</p>
                  <img src={item.pic02} alt="" style={{width:"56px",height:"56px",marginBottom:"10px",marginTop:"10px"}}/>
                  <p style={{fontSize: "16px",fontWeight:"300",}}>{item.title02}</p>
                  </div>
               {/* 第三竖列 */}
                  <div className="zp-pic-i" style={{textAlign:"center",width:"33.3%",height:"80px",marginTop:"5px"}}>
                  <img src={item.pic02} alt="" style={{width:"56px",height:"56px",marginBottom:"10px",marginTop:"5px"}}/>
                  <p style={{fontSize: "16px",fontWeight:"300"}}>{item.title02}</p>
                  <img src={item.pic02} alt="" style={{width:"56px",height:"56px",marginBottom:"10px",marginTop:"10px"}}/>
                  <p style={{fontSize: "16px",fontWeight:"300"}}>{item.title02}</p>
                  <img src={item.pic02} alt="" style={{width:"56px",height:"56px",marginTop:"10px",marginBottom:"10px"}}/>
                  <p style={{fontSize: "16px",fontWeight:"300"}}>{item.title02}</p>
                  <img src={item.pic02} alt="" style={{width:"56px",height:"56px",marginTop:"10px",marginBottom:"10px"}}/>
                  <p style={{fontSize: "16px",fontWeight:"300"}}>{item.title02}</p>
                  <img src={item.pic02} alt="" style={{width:"56px",height:"56px",marginTop:"10px",marginBottom:"10px"}}/>
                  <p style={{fontSize: "16px",fontWeight:"300"}}>{item.title02}</p>
                  <img src={item.pic02} alt="" style={{width:"56px",height:"56px",marginTop:"10px",marginBottom:"10px"}}/>
                  <p style={{fontSize: "16px",fontWeight:"300"}}>{item.title02}</p>
                  <img src={item.pic02} alt="" style={{width:"56px",height:"56px",marginTop:"10px",marginBottom:"10px"}}/>
                  <p style={{fontSize: "16px",fontWeight:"300"}}>{item.title02}</p>
                  </div> 
                 
                 
                 
                 
                  </div>


            </div>
          )


        })}


      </Tabs>
    </div>
  )
}

export default HomeClassify
