/*
*redux代码优化:
*1.将派发的action生成过程放到一个actionCreators函数中
*2.将定义的所有actionCreators的函数,放到一个独立的文件中:actionCreators.js
*3.actionCreators和reducer函数中使用的字符串常量是一致的,所以将常量抽取到一个独立constants的文件中
*4.将reducer和默认值(initialState)放到一个独立的reducer.js文件中,而不是在index,js中
*/


const store = require("./store")
const { changeNameAction, addNumeberAction } = require("./store/actionCreators")


const unsubscribe = store.subscribe(() => {
  console.log("订阅数据的变化:", store.getState())
})

// actionCreators:帮助我们创建action
// const changeNameAction = (name) => ({
//   type: "change_name",
//   name
// })

// 修改store中的数据,必须action
store.dispatch(changeNameAction("kobe"))
store.dispatch(changeNameAction("zhuhe"))
store.dispatch(changeNameAction("gmy"))

// unsubscribe()
// 修改counter
// const addNumeberAction = (num) => ({
//   type: "add_number",
//   num
// })
store.dispatch(addNumeberAction(10))
store.dispatch(addNumeberAction(20))
store.dispatch(addNumeberAction(30))
store.dispatch(addNumeberAction(100))



