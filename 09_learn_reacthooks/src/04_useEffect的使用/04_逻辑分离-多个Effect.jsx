import React, { memo, useEffect, useState } from "react";

const App = memo(() => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 1.修改document的title
    console.log("修改title");
  });

  // 一个函数时组件中，可以存在多个useeffect

  useEffect(() => {
    // 2.对redux中数据变化监听
    console.log("监听redux中的数据");
    return () => {
      // 取消redux中数据的监听
    };
  });
  useEffect(() => {
    // 3.监听eventBus中的why事件
    console.log("监听eventBus的why事件");
    return () => {
      // 取消eventBus中的why事件监听
    };
  });
  return (
    <div>
      <button onClick={(e) => setCount(count + 1)}>+1 {count}</button>
    </div>
  );
});

export default App;
