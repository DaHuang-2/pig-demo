import React from 'react'

class EmptyCart extends React.Component{
  // 购物车为空时的列表
  emptylist = [
    {
      src: "9010966",
      name: "一往情深",
      desc: "精品玫瑰盒:19支红玫瑰，勿忘我0.1扎",
      price: 269
    },
    {
      src: "9012154",
      name: "甜美公主",
      desc: "白玫瑰22支，粉佳人粉玫瑰14支，粉色桔梗5支",
      price: 368
    },
    {
      src: "9010011",
      name: "一心一意",
      desc: "玫瑰11枝，粉色勿忘我0.3扎",
      price: 139
    },
    {
      src: "9012177",
      name: "不变的承诺",
      desc: "99支红玫瑰",
      price: 569
    },
    {
      src: "9010877",
      name: "致美丽的你",
      desc: "红玫瑰11枝，满天星0.3扎，栀子叶0.5扎",
      price: 138
    },
    {
      src: "9012112",
      name: "温柔如你",
      desc: "戴安娜粉玫瑰12枝，石竹梅7枝",
      price: 202
    }
  ]
  render(){
    return(
      <div>
            <div className = 'emptyCart'>
              <img className = 'img' src = {'https://img02.hua.com/m/images/m_emptycart.png'} alt = ''/>
              <p className = 'text'>这里什么都没有呀...</p>
            </div>
            <div className = 'guss'>
              <div className = 'guss-title'>
                猜你喜欢
            </div>
              {/* 猜你喜欢列表 */}
            <div className = 'guss-list'>
              {/* 展示的每一项 */}
            {this.emptylist.map((item,index)=>{
                      return (<div className = 'guss-item' key={index}>
                      <a href = 'http://baidu.com'>
                        <div className = 'guss-item-img'>
                          <img className='img' src = {`https://img01.hua.com/uploadpic/newpic/${item.src}.jpg`} alt = ''/>
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
            </div>
        </div>

    )
  }
}
export default EmptyCart