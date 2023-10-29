import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor(){
  super()
  
  this.state={
    username:'coderwhy'
  }
  }
  inpurChange(event){
    console.log("inputChange",event.target.value)
    this.setState({username:event.target.value},()=>{
      console.log(this.state.username)
    })
  }
  render() {
    const {username}=this.state
    return (
      <div>
        {/* 受控组件 */}
        <input type="text" value={username} onChange={e=>this.inpurChange(e)}/>4
        {/* 非受控组件 */}
        <input type="text" />
        <h2>username:{username}</h2>
      </div>
    )
  }
}

export default App
