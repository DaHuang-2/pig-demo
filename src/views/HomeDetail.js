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
          };
    }
    onSelect = (opt) => {
        // console.log(opt.props.value);
        this.setState({
          visible: true,
          selected: opt.props.value,
        });
      };
      handleVisibleChange = (visible) => {
        this.setState({
          visible,
        });
      };

render(){
   

   
    return(

        <div>
    
  {/* filter */}
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
    
    </div>
    )
}
}

export default Detail