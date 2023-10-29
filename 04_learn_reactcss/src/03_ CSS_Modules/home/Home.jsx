import React, { PureComponent } from 'react'
import homeStyle from './Home.module.css'
export class Home extends PureComponent {
  render() {
    return (
      <div className={homeStyle.section}>
        <div className={homeStyle.title}>home标题</div>
      </div>
    )
  }
}

export default Home
