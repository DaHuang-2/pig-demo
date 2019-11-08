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
      .post(
        "https://m.hua.com/home/GetProductListPrice",
        {
          itemcodes: [
            9010966,
            9012177,
            9010011,
            9012437,
            9012154,
            9012009,
            9010855,
            9012089,
            9012201,
            9012440,
            9012332,
            9012092,
            9012441,
            9012201,
            1073264,
            1073185,
            1073033,
            1073263,
            5602016,
            9092114,
            5010023,
            5602045,
            1060038,
            1073247,
            1077029,
            1076062,
            3010004,
            1207010,
            1204042,
            1201003
          ]
        },
        {
          transformRequest(data) {
            console.log(data)
            let arr = []
            for (let key in data) {
              arr.push(`${key}=${data[key]}`)
            }
            return arr.join("&")
          }
        }
      )
      .then(response => {
        let result = response.data

        console.log(result.Datas.ProductPrices)
        this.setState({
          getFlowers: result.Datas.ProductPrices
        })
      })
  }

  render() {
    const { getFlowers } = this.state
    return (
      <div className='ww-carts'>
        <h3>送恋人/爱情鲜花</h3>

        {/* title 下面所有 */}
        {/* <div className="box"></div> */}
        <div className='loves'>
          {/* 爱美人还是鲜花 */}
          {getFlowers.map((item, index) => {
            return (
              <div className='beauty' key={index}>
                <a href='http://localhost:3000/#/cart'>
                  <img
                    src={`https://img01.hua.com/uploadpic/newpic/${item.ItemCode}.jpg_220x240.jpg`}
                  />
                </a>

                {/* 添加进入购物车 */}
                <a className='right' href='http://localhost:3000/#/cart'>
                  <p className='love-you'>{item.Cpmc}</p>
                  <p className='wuForgetMe'>
                    {/* 精品玫瑰礼盒：19枝红玫瑰，勿忘我0.1扎！ */}
                    {item.Instro}
                  </p>
                  <div className='chimpion'>经典爆款，年销售冠军！</div>

                  {/* 看中了哪种？下单吧！ */}
                  <div className='sale'>
                    <div className='west'>
                      <p>
                        <strong>{item.Price}</strong>
                        <s>{item.LinePrice}</s>
                      </p>
                      <p>已销售6.1万件</p>
                    </div>

                    {/* 购物车图标 */}
                    <div className='east'>
                      <i
                        className='iconfont icon-gouwuche'
                        onClick={() => {
                          let ItemCode = item.ItemCode
                          let Cpmc = item.Cpmc
                          let cart = window.localStorage.setItem("getFlowers", {
                            ItemCode,
                            Cpmc
                            // Instro,
                            // Price,
                            // LinePrice
                          })
                          return cart
                        }}
                      ></i>
                    </div>
                  </div>
                </a>
              </div>
            )
          })}
        </div>

        {/* ================================加载更多============================================= */}
        <div className='button'>
          <div className='loading'>
            <a href=''>查看更多</a>
          </div>
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
