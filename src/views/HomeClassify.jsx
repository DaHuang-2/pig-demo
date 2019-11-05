import React from "react"
import "./HomeClassify.less"

const HomeClassify = () => {
  return (
    <div className='page-classify'>
      {/* <h1>分类页面</h1> */}
      <div className='big'>
        <div className='left'>
          <i className='iconfont icon-fanhui'></i>
        </div>
        <div className='right'>
          <i className='iconfont icon-sousuo'></i>
          <input type='text' placeholder='搜索鲜花、蛋糕、礼品' />
        </div>
      </div>
    </div>
  )
}
export default HomeClassify
