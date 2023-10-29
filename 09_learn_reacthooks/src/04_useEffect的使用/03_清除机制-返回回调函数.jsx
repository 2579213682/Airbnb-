import React, { memo, useEffect, useState } from "react";

const App = memo(() => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("监听redux中数据变量，监听eventBus中的why事件");
// 返回值：回调函数=>组件被重新渲染或者组件卸载的时候执行
    return () => {
      console.log("监听redux中数据变化，取消监听eventBus中的why事件");
    };
  });

  return (
    <div>
      <button onClick={(e) => setCount(count + 1)}>+1 {count}</button>
    </div>
  );
});

export default App;
