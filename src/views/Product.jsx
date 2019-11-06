import React from "react"
import "./Product.less"
import axios from "axios"

// =====================================================================================

class Product extends React.PureComponent {
  state = {
    getFlowers: []
  }

  getFlowerList() {
    axios
      .post(" /home/GetProductListPrice", {
        // headers: {
        //   "Content-Type": " application/x-www-form-urlencoded; charset=UTF-8"
        // }
      })
      .then(response => {
        let result = response.data
        console.log(result)
        let getFlowers = []
        if (result.Status === 0) {
          this.setState({
            getFlowers: result.Datas
          })
        }

        console.log(getFlowers)
      })
  }
  render() {
    return (
      <div className='ww-carts'>
        <h3>送恋人/爱情鲜花</h3>

        {/* title 下面所有 */}
        <div className='loves'>
          {/* 爱美人还是鲜花 */}
          <a className='beauty'>
            <div>
              <img
                src='https://img01.hua.com/uploadpic/newpic/9010966.jpg_220x240.jpg'
                alt='一往情深'
              />
            </div>

            {/* 添加进入购物车 */}
            <div className='right'>
              <p className='love-you'>一往情深</p>
              <p className='wuForgetMe'>
                精品玫瑰礼盒：19枝红玫瑰，勿忘我0.1扎！
              </p>
              <div className='chimpion'>经典爆款，年销售冠军！</div>

              {/* 看中了哪种？下单吧！ */}
              <div className='sale'>
                <div className='west'>
                  <p>
                    <strong>￥539</strong>
                    <s>￥766</s>
                  </p>
                  <p>已销售6.1万件</p>
                </div>

                {/* 购物车图标 */}
                <div className='east'>
                  <i className='iconfont icon-gouwuche'></i>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    )
  }

  //
  componentDidMount() {
    this.getFlowerList()
  }
}

export default Product
