import React, { Component } from 'react'

export class AddCounter extends Component {

  AddCount(count){
    // console.log('count:',count)
    this.props.addClick(count)
  }

  render() {
    return (
      <div>
        <button onClick={e=>{this.AddCount(1)}}>+1</button>
        <button onClick={e=>{this.AddCount(5)}}>+5</button>
        <button onClick={e=>{this.AddCount(10)}}>+10</button>
      </div>
    )
  }
}

export default AddCounter
