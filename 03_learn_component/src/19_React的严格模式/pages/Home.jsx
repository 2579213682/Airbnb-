import React, { PureComponent } from 'react'

export class Home extends PureComponent {
  // 3.检查意外的副作用，这个组件的constructor会被调用两次
  // 在生产环境中，是不会被调用两次的
  // 4.使用废弃的findDOMNode方法
  // 在之前的ReactAPI中，可以通过findDOMNode来获取DOM 现在已经不建议使用了
  // 5.检测过时的context API
  constructor(){
    super()
    console.log("home constructor")
  }
  componentDidMount(){
    console.log("home componentdidmount")
  }
  // 严格模式检查的是什么：1.识别不安全的生命周期
  // UNSAFE_componentWillMount(){
  //   console.log("unsafe")
  // }
  render() {
    console.log("home render")
    return (
      <div>
        {/* 2.检查过时的ref API */}
        {/* <h2 ref='title'>home title</h2> */}
        home
      </div>
    )
  }
}

export default Home
