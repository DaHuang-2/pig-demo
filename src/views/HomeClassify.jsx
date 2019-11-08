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

          <div className='page-content'>
            <div className='headerbar-content-left'>
              <i className='iconfont icon-sousuo'></i>
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
    <div style={{ height: 555 }}>
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

                 <div className="zp-pic-i" style={{textAlign:"center",width:"33.3%",height:"80px",marginTop:"10px"}}>
                  <img src={item.pic} alt="" style={{width:"56px",height:"56px",marginBottom:"10px"}}/>
                  <p style={{fontSize: "16px",fontWeight:"300",}}>{item.title}</p>
                  </div>

                  <div className="zp-pic-i" style={{textAlign:"center",width:"33.3%",height:"80px",marginTop:"10px"}}>
                  <img src={item.pic01} alt="" style={{width:"56px",height:"56px",marginBottom:"10px"}}/>
                  <p style={{fontSize: "16px",fontWeight:"300",}}>{item.title}</p>
                  </div>

                  <div className="zp-pic-i" style={{textAlign:"center",width:"33.3%",height:"80px",marginTop:"10px"}}>
                  <img src={item.pic02} alt="" style={{width:"56px",height:"56px",marginBottom:"10px"}}/>
                  <p style={{fontSize: "16px",fontWeight:"300",}}>{item.title}</p>
                  </div>
                  {/* <img src={item.pic} alt=""  style={{width:"56px",height:"56px",marginTop: "5px",
   marginLeft:"15px"}}/>
                  <p style={{fontSize: "16px",fontWeight:"300",}}>{item.title}</p> */}

                  </div>


            </div>
          )


        })}


      </Tabs>
    </div>
  )
}

export default HomeClassify

//  {
/* <div>
        <img className="bigimage" src="https://img02.hua.com/slider/19_day1111_all.jpg" alt=""/>
     <nav className="catebox-details-list ">
        <div className="catebox-details-item">

        <img className="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_hot_Lover.png" alt="送恋人鲜花"/>
        <p className="catebox-word">爱情鲜花</p>
        </div>
        <div className="catebox-details-item" >

        <img className="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_hot_Elder.png" alt="送长辈鲜花"/>
        <p className="catebox-word">长辈鲜花</p>
        </div>
        <div className="catebox-details-item" >

        <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_hot_Birthday.png" alt="生日鲜花"/>
        <p className="catebox-word">生日鲜花</p>
        </div>

    </nav>
   <section>
        <div className="catebox-details-item">

        <img className="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_hot_Boxedflowers.png" alt="礼盒鲜花"/>
              <p className="catebox-word">礼盒鲜花</p>
        </div>
        <div className="catebox-details-item">

        <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_hot_PPF.png" alt="永生花"/>
              <p className="catebox-word" style={{textAlign:"center"}}>永生花</p>
   </div>
   <div className="catebox-details-item">

       <img className="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_hot_Lover.png" alt="送恋人鲜花"/>
       <p className="catebox-word" style={{textAlign:"center"}}>蛋糕</p>
    </div>

   </section>
   <article>
   <div className="catebox-details-item">

   <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_hot_Cake_ganso.png" alt="元祖蛋糕"/>
            <p className="catebox-word">元祖蛋糕</p>
  </div>

    <div className="catebox-details-item">

    <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_hot_Goldfoilflower.png" alt="金箔花"/>
    <p className="catebox-word" style={{textAlign:"center"}}>金箔花</p>
    </div>

   <div className="catebox-details-item">

   <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_hot_Jewelry.png" alt="首饰"/>
    <p className="catebox-word" style={{textAlign:"center"}}>首饰</p>
</div>

   </article>
  <aside>
   <div className="catebox-details-item">

   <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_hot_Chocolate_qiaoluo.png" alt="巧罗巧克力"/>
            <p className="catebox-word">巧罗克力</p>
      </div>
      <div className="catebox-details-item">

      <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_hot_CreativeGifts.png" alt="创意礼品"/>
            <p className="catebox-word" style={{textAlign:"center"}}>创意礼品</p>
      </div>
      <div className="catebox-details-item">

      <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_hot_Groupbuy.png" alt="企业团购"/>
      <p className="catebox-word" style={{textAlign:"center"}}>企业团购</p>
</div>

   </aside>
   <aside>
   <div className="catebox-details-item">

   <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_hot_Chocolate_qiaoluo.png" alt="巧罗巧克力"/>
            <p className="catebox-word">巧罗克力</p>
      </div>
      <div className="catebox-details-item">

      <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_hot_CreativeGifts.png" alt="创意礼品"/>
            <p className="catebox-word" style={{textAlign:"center"}}>创意礼品</p>
      </div>
      <div className="catebox-details-item">

      <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_hot_Groupbuy.png" alt="企业团购"/>
      <p className="catebox-word" style={{textAlign:"center"}}>企业团购</p>
</div>

   </aside>
   <aside>
   <div className="catebox-details-item">

   <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_hot_Chocolate_qiaoluo.png" alt="巧罗巧克力"/>
            <p className="catebox-word">巧罗克力</p>
      </div>
      <div className="catebox-details-item">

      <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_hot_CreativeGifts.png" alt="创意礼品"/>
            <p className="catebox-word" style={{textAlign:"center"}}>创意礼品</p>
      </div>
      <div className="catebox-details-item">

      <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_hot_Groupbuy.png" alt="企业团购"/>
      <p className="catebox-word" style={{textAlign:"center"}}>企业团购</p>
</div>

   </aside>
   <aside>
   <div className="catebox-details-item">

   <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_hot_Chocolate_qiaoluo.png" alt="巧罗巧克力"/>
            <p className="catebox-word">巧罗克力</p>
      </div>
      <div className="catebox-details-item">

      <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_hot_CreativeGifts.png" alt="创意礼品"/>
            <p className="catebox-word" style={{textAlign:"center"}}>创意礼品</p>
      </div>
      <div className="catebox-details-item">

      <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_hot_Groupbuy.png" alt="企业团购"/>
      <p className="catebox-word" style={{textAlign:"center"}}>企业团购</p>
</div>

   </aside>

   </div>  */
// }
