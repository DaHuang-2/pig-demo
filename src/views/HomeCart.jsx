import React from "react"
import "./HomeCart.less"
import {Link} from 'react-router-dom'
import CartList from './Cart/ListCart'
import EmptyCart from "./Cart/EmptyCart"
class HomeCart extends React.Component {



  constructor() {
    super()
    this.state = {
      cartList: [],
      isBigger:false
    }
    let a = window.localStorage.getItem("getFlowers")
    console.log(a)
  }

  render() {
    let userInfo

    return (

      <div className='cart'>
        {/* 购物车标题 */}
        <div className='cart-header'>
          <Link to="/">
            <i className="iconfont icon-fanhui"></i>
          </Link>
          <div className='header-center'>购物车</div>
        </div>
        <section className='main'>
          {
           this.state.cartList.length > 0 ? <CartList></CartList> : <EmptyCart></EmptyCart>
          }

        </section>
      </div>
    )
  }
}


export default HomeCart
