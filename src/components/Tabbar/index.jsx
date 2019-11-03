import React from 'react'
import './style.less'

const Tabbar = props => {
  return <div className="ww-tabbar">{props.children}</div>
}

Tabbar.Item = props => {
  return (
    <div className="ww-tabbar_item">
      {props.icon}
      <span>{props.text}</span>
    </div>
  )
}

export default Tabbar
