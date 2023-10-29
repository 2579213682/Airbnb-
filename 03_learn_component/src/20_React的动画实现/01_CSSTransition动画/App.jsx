import React, { PureComponent } from 'react'
import { CSSTransition } from 'react-transition-group'
import './style.css'
export class App extends PureComponent {
  constructor(props){
    super(props)

    this.state={
      isShow:false
    }
  }
  render() {
    const {isShow}=this.state
    return (
      <div>
        <button onClick={e=>this.setState({isShow:!isShow})}>切换</button>
        {/* {isShow && <h2>hahaha</h2>} */}
        <CSSTransition
         in={isShow}
          unmountOnExit={true} 
          classNames='why'
           timeout={2000}
           appear
           onEnter={e=>console.log("开始进入动画")}
           onEntering={e=>console.log("执行进入动画")}
           onEntered={e=>console.log("执行进入动画结束")}
           onExit={e=>console.log('开始离开动画')}
           onExiting={e=>console.log("正在离开动画")}
           onExited={e=>console.log("离开动画结束")}
           >
          <div className='section'>
            <h2>hhaha</h2>
            <p>内容</p>
          </div>
        </CSSTransition>
      </div>
    )
  }
}

export default App
