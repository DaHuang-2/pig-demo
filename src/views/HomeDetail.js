import React from "react"
import "./HomeDetail.less"
import { Tabs, WhiteSpace, Popover, NavBar, Icon} from "antd-mobile"

import axios from "axios"
const Item = Popover.Item;
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
class Detail extends React.Component{
    constructor(){
        super()
        this.state = {
            visible: false,
            selected: '',
            flowersbrr:[],
          };
    }
    onSelect = (opt) => {
      // console.log(opt.props.value);
      this.setState({
        visible: false,
        selected: opt.props.value,
      });
    };
      handleVisibleChange = (visible) => {
        this.setState({
          visible,
        });
      };

render(){
  const {flowersbrr}= this.state;  
 
    return(

        <div>

  <NavBar
        mode="light"
        rightContent={
          <Popover mask
            overlayClassName="fortest"
            overlayStyle={{ color: 'currentColor' }}
            visible={this.state.visible}
       
            overlay={[
              (<Item key="4" value="scan" data-seed="logId">首页</Item>),
              (<Item key="5" value="special"  style={{ whiteSpace: 'nowrap' }}>购物车</Item>),
              (<Item key="6" value="button ct">
                <span style={{ marginRight: 5 }}>我的</span>
              </Item>),
            ]}
           
          >
            <div>
        
          {/* <Icon type= "loading"/> */}
          <span className="iconfont icon-liebiao"></span>
         
            </div>
          </Popover>
        }
      >
       <header className="topBar">
    {/* <div className="topBar-left"> */}
    <div className="topBar-left" style={{width:"88px",height:"44px",lineHeight:"44px",textAlign:"left"}}>
    <div>
      
       <i className="iconfont icon-fanhui"></i> 
    </div>
    </div>
    <div className="topBar-center" style={{width:"199.2px",height:"44px",textAlign:"center",lineHeight:"44px"}} >
    {/* <div className="topBar-center"  > */}
    <p className="topBar-content" style={{fontSize:"16px"}}>爱情鲜花</p>
    </div>
    {/* <div className="topBar-right" > */}
    <div className="topBar-right" style={{width:"44px",height:"44px",textAlign:"center",lineHeight:"44px"}}>
    <div>
        <i className="iconfont icon-kefu" style={{fontSize:"20px"}}></i>
    </div>
    </div>
  
   
    </header>
      </NavBar>
<nav className="filter">
<div className="filter-item">
<a>综合</a>
</div>
<div className="filter-item">
<a>销量</a>
</div>
<div className="filter-item">
<a>价格</a>
</div>
<div className="filter-item">
<a>新品</a>
</div>
    </nav>
    <nav className="purpose">
    <div className="purpose-list">
    <div className="purpose-item">
    <a>送女友</a> 
    </div>
    <div className="purpose-item">
    <a>送男友</a> 
    </div>
    <div className="purpose-item">
    <a>送老人</a> 
    </div>
    <div className="purpose-item">
    <a>送长辈</a> 
    </div>
    <div className="purpose-item-active">
    <a>帅选 
    <i className=" iconfont icon-sanjiaoxing"></i>   
    </a>
    </div>
    </div>

    </nav>
    <div style={{display:"flex"}}>
    <artice>
    <div className="flowers-A">

    { 
      flowersbrr.map (item=> {
      return(
    
        <img src={`https://img01.hua.com/uploadpic/newpic/${flowersbrr.item}.jpg_220x240.jpg`} alt=""/>
       
      )
    
 })
}
       </div>
       <div  className="flowers-word">
       <p className="flowers-word-info">甜美公主·白玫瑰22枝，粉佳人
         <br/>
         粉玫瑰14枝，粉色桔梗5枝</p>
         <div className="flowers-word-info-price">
           <p className="flowers-word-info-priceinfo">
          <strong style={{ color:"#FF734C",paddingLeft:"5px"}}> ￥358</strong>
           </p>
          
         </div>
    </div>

    </artice>
    </div>
    
    </div>
    )
}
componentDidMount(){
  axios.post("https://m.hua.com/home/GetProductListPrice",{
    itemcodes: [9012154,9012177,9012009,9010966,9012243,9010011,9012089,9012011,9010731,9012175,9012125,9012060],
  },
  {
    transformRequest(data) {
      console.log(data)
       //这里是输出formdata中的数据转换为json格式的数据
      let arr = []
      for (let key in data) {
        arr.push(`${key}=${data[key]}`)
      }
      return arr.join("&")
    }

  }
  
  
  ).then(response=>{
   let result=response.data;
  this.setState({
    flowersbrr:result.Datas.ProductPrices
  })
 

  }
   )

}
}

export default Detail