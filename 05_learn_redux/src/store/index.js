const { createStore } = require("redux")
const reducer = require("./reducer")
// const { ADD_NUMBER, CHANGE_NAME } = require("./constants")
// // 初始化的数据
// const initialState = {
//   name: "why",
//   counter: 100
// }


// // 定义reducer函数：纯函数
// // 两个参数:
// // 参数一:store中目前保存的state
// // 返回值:它的返回值之前存储的state
// function reducer (state = initialState, action) {
//   // console.log("reducer:",state,action)
//   // 有新数据进行更新的时候,那么返回一个新的state
//   switch (action.type) {
//     case CHANGE_NAME:
//       return { ...state, name: action.name }
//     case ADD_NUMBER:
//       return { ...state, counter: state.counter + action.num }
//     default:
//       return state
//   }

//   // 没有新数据更新,那么返回之前的state
//   return state
// }

const store = createStore(reducer)

module.exports = store