const store = require("./store")


console.log(store.getState())


// 修改store中的数据,必须action

const nameAction = { type: "change_name", name: "kobe" }
store.dispatch(nameAction)
console.log(store.getState())

const nameAction1 = { type: "change_name", name: "zhuhe" }
store.dispatch(nameAction1)
console.log(store.getState())

const counterAction = { type: "add_number", num: 10 }
store.dispatch(counterAction)
console.log(store.getState())


