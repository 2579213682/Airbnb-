import React, { Component } from 'react'
import PropTypes from "prop-types"

export class MainBanner extends Component {
  // es13写法
  // static defaultProps={
  //   banners:[],
  //   title:"默认标题"
  // }
  constructor(props){
    // console.log(props)
    super(props)
  this.state={}
  }
  render() {
    const {title,banners}=this.props

    return (
      <div>
        <h2>封装一个轮播图:{title}</h2>
        <ul>
          {
            banners.map(item=>{
              return <li key={item.acm}>{item.title}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

MainBanner.propTypes={
  banners:PropTypes.array.isRequired,
  title:PropTypes.string
}
// MainBanner传入的props的默认值
MainBanner.defaultProps={
  banners:[],
  title:"默认标题"
}

export default MainBanner
