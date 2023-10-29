import React, { PureComponent ,Fragment} from 'react'

export class App extends PureComponent {
  constructor(){
    super()

    this.state={
      sections:[
        {title:"hahhah",content:"wrhfaf"},
        {title:"gag",content:"gag"},
        {title:"gawg",content:"gas"},
        {title:"hewhsd",content:"gags"},
      ]
    }
  }
  render() {
    const {sections}=this.state
    return (
      // Fragment的语法糖：<></> 直接省略不写
      <Fragment>
        <h2>我是app的标签</h2>
        <p>我是app的内容：哈哈哈</p>
        <hr />
        {
          sections.map(item=>{
            return(
              // 如果我们需要往Fragment中添加key，就不能使用语法糖
              <Fragment key={item.title}>
                <h2>{item.title}</h2>
                <p>{item.content}</p>
              </Fragment>
            )
          })
        }
      </Fragment>
    )
  }
}

export default App
