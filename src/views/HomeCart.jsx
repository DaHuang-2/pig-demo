import React from 'react'
import './HomeCart.less'
import { Tabs } from 'antd-mobile'
class HomeCart extends React.Component{
// 购物车为空时的列表
emptylist = [{src:'//img01.hua.com/uploadpic/newpic/9010966.jpg',name:'一往情深',desc:'精品玫瑰盒:19支红玫瑰，勿忘我0.1扎',price:269},
            {src:'//img01.hua.com/uploadpic/newpic/9012154.jpg',name:'甜美公主',desc:'白玫瑰22支，粉佳人粉玫瑰14支，粉色桔梗5支',price:368},
            {src:'//img01.hua.com/uploadpic/newpic/9010011.jpg',name:'一心一意',desc:'玫瑰11枝，粉色勿忘我0.3扎',price:139},
            {src:'//img01.hua.com/uploadpic/newpic/9012177.jpg',name:'不变的承诺',desc:'99支红玫瑰',price:569},
            {src:'//img01.hua.com/uploadpic/newpic/9010877.jpg',name:'致美丽的你',desc:'红玫瑰11枝，满天星0.3扎，栀子叶0.5扎',price:138},
            {src:'//img01.hua.com/uploadpic/newpic/9012112.jpg',name:'温柔如你',desc:'戴安娜粉玫瑰12枝，石竹梅7枝',price:202},
]
tabs=[{title:'购买该商品的还购买了'},{title:'巧克力/花瓶'}]
commendlist1 = [{src:'//img01.hua.com/uploadpic/newpic/9010949.jpg_80x87.jpg',name:'天使之               恋',price:119},
              {src:'//img01.hua.com/uploadpic/newpic/1073247.jpg_80x87.jpg',name:'花好月圆永生花台灯',price:298},
              {src:'//img01.hua.com/uploadpic/newpic/1073243.jpg_80x87.jpg',name:'花好月圆永生花台灯',price:298},

              {src:'//img01.hua.com/uploadpic/newpic/1073140.jpg_80x87.jpg',name:'花好月圆永生花台灯',price:298},

]
commendlist2 = [{src:'//img01.hua.com/uploadpic/newpic/3010005.jpg_80x87.jpg',name:'费列                 罗榛果威化糖果巧克力礼盒8粒心形装',price:68},
               {src:'//img01.hua.com/uploadpic/newpic/3010006.jpg_80x87.jpg',name:'费列罗榛果威化糖果巧克力礼盒16粒',price:98},
               {src:'//img01.hua.com/uploadpic/newpic/3010006.jpg_80x87.jpg',name:'费列罗榛果威化糖果巧克力礼盒16粒',price:98},
               {src:'//img01.hua.com/uploadpic/newpic/1070076.jpg_80x87.jpg',name:'费列罗榛果威化糖果巧克力礼盒16粒',price:98},
]

constructor(){
  super()
  this.state = {
    cartList:[]
  }
}
  render(){
  return (
    <div className='cart'>
      {/* 购物车标题 */}
      <div className = 'cart-header'>
        <div className = 'iconfont icon-fanhui'></div>
        <div className = 'header-center'>购物车</div>
      </div>
      <section className = 'main'>
        {/* 添加商品之后 */}
        <div className='cart-list'>
          <div className='cart-item'>
            <div className='cart-item-left'>
                <div className='cart-item-checkout'>
                  <input type='checkbox' className='input' defaultChecked />
                  <span className='label' ></span>
                </div>
            </div>
            <div className='cart-item-right'>
              <div className='item-img'>
                <img className='img' src='//img01.hua.com/uploadpic/newpic/9010011.jpg_220x240.jpg' alt='一心一意'/>
              </div>
              <div className='item-tatil'>
                 <p className='item-title'>[鲜花]一心一意</p>
                 <div className='item-input'>
                    <span>数量</span>
                    <div className='item-setnum'>
                       <span className='num-red'>
                         <i className='reduce'>-</i>
                       </span>
                       <input className='num-count' text='tel' defaultValue='1' maxLength='3'/>
                       <span className='num-add'>
                         <i className='add'>+</i>
                       </span>
                    </div>
                 </div>
                 <p className='item-price'>
                   ￥
                   <span>369</span>
                 </p>
              </div>
            </div>
          </div>
          <div className='cart-item'>
            <div className='cart-item-left'>
                <div className='cart-item-checkout'>
                  <input type='checkbox' className='input' defaultChecked />
                  <span className='label' ></span>
                </div>
            </div>
            <div className='cart-item-right'>
              <div className='item-img'>
                <img className='img' src='//img01.hua.com/uploadpic/newpic/9010011.jpg_220x240.jpg' alt='一心一意'/>
              </div>
              <div className='item-tatil'>
                 <p className='item-title'>[鲜花]一心一意</p>
                 <div className='item-input'>
                    <span>数量</span>
                    <div className='item-setnum'>
                       <span className='num-red'>
                         <i className='reduce'>-</i>
                       </span>
                       <input className='num-count' text='tel' defaultValue='1' maxLength='3'/>
                       <span className='num-add'>
                         <i className='add'>+</i>
                       </span>
                    </div>
                 </div>
                 <p className='item-price'>
                   ￥
                   <span>369</span>
                 </p>
              </div>
            </div>
          </div>
          {/* 这里 */}
        </div>
        {/* 推荐购买 */}
        <div className='commend'>
          <Tabs tabs={this.tabs} initialPage={0} swipeable={false}>
             <div>
               <ul className='commend-tab'>
                 {this.commendlist1.map((item,index)=>{
                   return (<li className='dev' key={index}>
                   <div>
                     <img className='commend-pic' src={item.src} alt=''/>
                   </div>
                   <p className='name'>{item.name}</p>
                   <p className='price'>￥{item.price}</p>
                 </li>)
                 })}
               </ul>
             </div>
             <div>
             <ul className='commend-tab'>
                 {this.commendlist2.map((item,index)=>{
                   return (<li className='dev' key={index}>
                   <div>
                     <img className='commend-pic' src={item.src} alt=''/>
                   </div>
                   <p className='name'>{item.name}</p>
                   <p className='price'>￥{item.price}</p>
                 </li>)
                 })}
               </ul>
             </div>
          </Tabs>
        </div>
        {/* 结算 */}
        <div className='footer'>
          <span className='footer-left'>
             <span className='com'>合计:</span>
             <span className='num'>￥xxx</span>
          </span>
          <button className='footer-right' type='button'>
            去结算
          </button>
        </div>
        {/* 当购物车为空时 */}
        {/* <div className = 'emptyCart'>
          <img className = 'img' src = '//img02.hua.com/m/images/m_emptycart.png' alt = ''/>
          <p className = 'text'>这里什么都没有呀...</p>
        </div>
        <div className = 'guss'>
          <div className = 'guss-title'>
            猜你喜欢
          </div>
          {/* 猜你喜欢列表 */}
          {/* <div className = 'guss-list'> */}
                {/* 展示的每一项 */}
                {/* {this.emptylist.map((item,index)=>{
                   return (<div className = 'guss-item' key={index}>
                   <a href = 'http://baidu.com'>
                     <div className = 'guss-item-img'>
                       <img className='img' src = {item.src} alt = ''/>
                     </div>
                     <div className = 'guss-item-detail'>
                       <div className = 'guss-item-info'>
                         <span className='name'>{item.name}</span>"."
                         <span className='desc'>{item.desc}</span>
                       </div>
                       <div className ='guss-item-price'>￥{item.price}</div>
                     </div>
                   </a>
                 </div>)
                })}
          </div>
          <div className = 'guss-bottom'>
            <span>已经到底喽...</span>
          </div>
        </div> */}
      </section>
    </div>
  )
 }
}

export default HomeCart
