import React, { PureComponent} from 'react'

export class Home extends PureComponent {

  constructor(props){
    super(props)

    this.state={
      friends:[]
    }
  }

  // shouldComponentUpdate(nextProps,newState)  {
  //   // 自己对比state是否发生改变:this.state和nextState
  //   if(this.props.message!==nextProps.message){
  //     return true
  //   }
  //   return false
  // };
  
  render() {
    console.log("home render")
    return (
      <div>
        <h2>Home Page:{this.props.message}</h2>
      </div>
    )
  }
}

export default Home
