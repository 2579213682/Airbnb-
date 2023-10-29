import React, { memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  addNumberAction,
  changeMessageAction,
  subNumberAction,
} from "./store/modules/counter";

// memo高阶组件包裹起来的组件有对应的特点，只有props发生改变时，才会重新渲染
const Home = memo((props) => {
  const { message } = useSelector(
    (state) => ({
      message: state.counter.message,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  function changeMessageHandle() {
    dispatch(changeMessageAction("你好呀，诸和老婆"));
  }
  console.log("Home render");
  return (
    <div>
      <h2>Home:{message}</h2>
      <button onClick={(e) => changeMessageHandle()}>修改message</button>
    </div>
  );
});

const App = memo((props) => {
  // 1.使用useSelector将redux中的数据映射到组件内
  const { count } = useSelector(
    (state) => ({
      count: state.counter.count,
    }),
    shallowEqual
  );

  // 2.使用dispatch直接派发action
  const dispatch = useDispatch();
  function addNumberHandle(num, isAdd = true) {
    if (isAdd) {
      dispatch(addNumberAction(num));
    } else {
      dispatch(subNumberAction(num));
    }
  }
  console.log("app render");
  return (
    <div>
      <h2>app:{count}</h2>
      <button onClick={(e) => addNumberHandle(1)}>+1</button>
      <button onClick={(e) => addNumberHandle(5)}>+5</button>
      <button onClick={(e) => addNumberHandle(5, false)}>-5</button>
      <Home />
    </div>
  );
});

export default App;
