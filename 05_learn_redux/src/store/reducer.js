const { ADD_NUMBER, CHANGE_NAME } = require("./constants")
// 初始化的数据
const initialState = {
  name: "why",
  counter: 100
}


// 定义reducer函数：纯函数
function reducer (state = initialState, action) {
  // console.log("reducer:",state,action)
  // 有新数据进行更新的时候,那么返回一个新的state
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.name }
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num }
    default:
      return state
  }

  // 没有新数据更新,那么返回之前的state
  // return state
}

module.exports=reducer