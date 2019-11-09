import React from 'react'
import { Tabs } from "antd-mobile"
import {withRouter} from "react-router-dom";


class ListCart extends React.Component{
  commendlist1 = [
    {
      src: "https://img01.hua.com/uploadpic/newpic/9010949.jpg_80x87.jpg",
      name: "天使之恋",
      price: 119
    },
    {
      src: "https://img01.hua.com/uploadpic/newpic/1073247.jpg_80x87.jpg",
      name: "花好月圆永生花台灯",
      price: 298
    },
    {
      src: "https://img01.hua.com/uploadpic/newpic/1073243.jpg_80x87.jpg",
      name: "花好月圆永生花台灯",
      price: 298
    },

    {
      src: "https://img01.hua.com/uploadpic/newpic/1073140.jpg_80x87.jpg",
      name: "花好月圆永生花台灯",
      price: 298
    }
  ]
  commendlist2 = [
    {
      src: "https://img01.hua.com/uploadpic/newpic/3010005.jpg_80x87.jpg",
      name: "费列罗榛果威化糖果巧克力礼盒8粒心形装",
      price: 68
    },
    {
      src: "https://img01.hua.com/uploadpic/newpic/3010006.jpg_80x87.jpg",
      name: "费列罗榛果威化糖果巧克力礼盒16粒",
      price: 98
    },
    {
      src: "https://img01.hua.com/uploadpic/newpic/3010006.jpg_80x87.jpg",
      name: "费列罗榛果威化糖果巧克力礼盒16粒",
      price: 98
    },
    {
      src: "https://img01.hua.com/uploadpic/newpic/1070076.jpg_80x87.jpg",
      name: "费列罗榛果威化糖果巧克力礼盒16粒",
      price: 98
    }
  ]
  tabs = [{ title: "购买该商品的还购买了" }, { title: "巧克力/花瓶" }]
  hasLogin = () => {
    let users = localStorage.getItem('users')
    console.log(users)
    if(users){
      this.props.history.push('/cartdetail')
    }else{
      this.props.history.push('/login')
    }
  }
  render(){
    return(
    <div>
      {/* 购物车列表 */}
      <div className='cart-list'>
          <div className='cart-item'>
            <div className='cart-item-left'>
              <div className='cart-item-checkout'>
                <input type='checkbox' className='input' defaultChecked />
                <span className='label'></span>
              </div>
            </div>
            <div className='cart-item-right'>
              <div className='item-img'>
                <img
                  className='img'
                  src='https:/img01.hua.com/uploadpic/newpic/9010011.jpg_220x240.jpg'
                  alt='一心一意'
                />
              </div>
              <div className='item-tatil'>
                <p className='item-title'>[鲜花]一心一意</p>
                <div className='item-input'>
                  <span>数量</span>
                  <div className='item-setnum'>
                    <span className='num-red'>
                      <i className='reduce'>-</i>
                    </span>
                    <input
                      className='num-count'
                      text='tel'
                      defaultValue='1'
                      maxLength='3'
                    />
                    <span className='num-add'>
                      <i className='add'>+</i>
                    </span>
                  </div>
                </div>
                <p className='item-price'>
                  ￥<span>369</span>
                </p>
              </div>
            </div>
          </div>
          <div className='cart-item'>
        <div className='cart-item-left'>
          <div className='cart-item-checkout'>
            <input type='checkbox' className='input' defaultChecked />
            <span className='label'></span>
          </div>
        </div>
        <div className='cart-item-right'>
          <div className='item-img'>
            <img
              className='img'
              src='https:/img01.hua.com/uploadpic/newpic/9010011.jpg_220x240.jpg'
              alt='一心一意'
            />
          </div>
          <div className='item-tatil'>
            <p className='item-title'>[鲜花]一心一意</p>
            <div className='item-input'>
              <span>数量</span>
              <div className='item-setnum'>
                <span className='num-red'>
                  <i className='reduce'>-</i>
                </span>
                <input
                  className='num-count'
                  text='tel'
                  defaultValue='1'
                  maxLength='3'
                />
                <span className='num-add'>
                  <i className='add'>+</i>
                </span>
              </div>
            </div>
            <p className='item-price'>
              ￥<span>369</span>
            </p>
          </div>
        </div>
      </div>
      </div>
      {/* 推荐购买 */}
      <div className='commend'>
      <Tabs tabs={this.tabs} initialPage={0} swipeable={false}>
        <div>
          <ul className='commend-tab'>
            {this.commendlist1.map((item, index) => {
              return (
                <li className='dev' key={index}>
                  <div>
                    <img className='commend-pic' src={item.src} alt='' />
                  </div>
                  <p className='name'>{item.name}</p>
                  <p className='price'>￥{item.price}</p>
                </li>
              )
            })}
          </ul>
        </div>
        <div>
          <ul className='commend-tab'>
            {this.commendlist2.map((item, index) => {
              return (
                <li className='dev' key={index}>
                  <div>
                    <img className='commend-pic' src={item.src} alt='' />
                  </div>
                  <p className='name'>{item.name}</p>
                  <p className='price'>￥{item.price}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </Tabs>
    </div>
      {/* 底部结算 */}
      <div className='footer'>
          <span className='footer-left'>
            <span className='com'>合计:</span>
            <span className='num'>￥xxx</span>
          </span>
          <button className='footer-right' type='button' onClick={()=>{
            this.hasLogin()
          }}>
            去结算
          </button>
      </div>
    </div>

    )
  }
}
export default withRouter(ListCart)