import { compose, createStore, combineReducers } from "redux";
// import thunk from "redux-thunk";
import counterReducer from "./counter";
import homeReducer from "./home";
import { log, thunk, applyMiddleware } from "./middleware";
import userReducer from "./user";
// import reducer from "./counter";

// 将两个reducer合并到一起

const reducer = combineReducers({
  counter: counterReducer,
  home: homeReducer,
  user: userReducer,
});

// combineReducers实现原理
// function reducer (state = {}, action) {
//   // 返回一个对象,store的state
//   return {
//     counter: counterReducer(state.counter, action),
//     home: homeReducer(state.home, action),
//     user: userReducer(state.user, action)
//   }
// }

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;
// const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
const store = createStore(reducer);

// 对每次派发的action进行拦截，进行日志打印

// log(store);

// store.dispatch({ type: "add_number", num: 100 });

// Thunk(store);
applyMiddleware(store, log, thunk);

// store.dispatch(function(dispatch) {
//     // dipatch({ })
//     dispatch(function() {});
// });

export default store;
