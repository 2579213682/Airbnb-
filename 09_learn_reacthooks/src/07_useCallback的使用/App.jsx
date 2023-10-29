import React, { memo, useCallback, useRef, useState } from "react";

// props中的属性发生改变时，组件本身就会被重新渲染
const HYIncrement = memo(function (props) {
  const { increment } = props;
  console.log("hyincrement被渲染");

  return (
    <div>
      <button onClick={increment}>increment+1</button>
    </div>
  );
});

const App = memo(() => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("nihao zhuhe");

  // const increment = (e) => {
  //   setCount(count + 1);
  // };
  // 闭包陷阱：useCallback
  // const increment = useCallback(
  //   function () {
  //     console.log("increment");
  //     setCount(count + 1);
  //   },
  //   [count]
  // );

  // 进一步的优化：当count发生改变时，也使用同一个函数
  // 做法一：将count依赖移除掉，缺点：闭包陷阱
  // 做法二：useRef,在组件多次渲染中，返回的是同一个值
  const countRef = useRef();
  countRef.current = count;
  const increment = useCallback(function () {
    console.log("increment");
    setCount(countRef.current + 1);
  }, []);

  // 普通的函数
  // const increment = () => {
  //   setCount(count + 1);
  // };

  return (
    <div>
      <h2>计数：{count}</h2>
      <button onClick={increment}>+1</button>
      <HYIncrement increment={increment} />

      <h2>message:{message}</h2>
      <button onClick={(e) => setMessage(Math.random())}>修改message</button>
    </div>
  );
});

export default App;
