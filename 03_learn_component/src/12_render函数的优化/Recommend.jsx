import React, { PureComponent } from 'react'

export class Recommend extends PureComponent {

  // shouldComponentUpdate = (nextProps, nextState) => {
  //   if(this.props.counter!==nextProps.counter){
  //     return true
  //   }
  //   return false
  // };
  
  render() {
    console.log("recommend render")

    return (
      <div>
        recommend:{this.props.counter}
      </div>
    )
  }
}

export default Recommend
