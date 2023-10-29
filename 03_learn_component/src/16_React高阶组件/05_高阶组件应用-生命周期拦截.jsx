import React, { PureComponent } from 'react'
import Detail from './pages/Detail'

export class App extends PureComponent {

  // UNSAFE_componentWillMount(){
  //   this.beginTime=new Date().getTime()
  // }

  // componentDidMount () {
  //   this.endTime=new Date().getTime()
  //   const interval=this.endTime-this.beginTime
  //   console.log(`当前页面花费${interval}ms渲染完成`)
  // };
  

  render() {
    return (
      <div>
        <Detail/>
      </div>
    )
  }
}

export default App
