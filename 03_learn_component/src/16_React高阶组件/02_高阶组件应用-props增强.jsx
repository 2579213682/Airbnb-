/* eslint-disable react/jsx-no-undef */
import React, { PureComponent } from 'react'
import enhancedUserInfo from './hoc/enhanced_props'
import About from './pages/About'
// const userInfo={
//   name:"coderwhy",
//   level:99
// }


const Home=enhancedUserInfo(function(props){
  return <h1>Home:{props.name}-{props.level}-{props.banners}</h1>
})


const Profile=enhancedUserInfo(function(props){
  return <h1>Profile</h1>
})

const HelloFriend=enhancedUserInfo(function(props){
  return <h1>hello friend</h1>
})

export class App extends PureComponent {
  render() {
    return (
      <div>
        <Home banners={['zh','gmy']}/>
        <Profile/>
        <HelloFriend/>
        <About/>
      </div>
    )
  }
}

export default App
