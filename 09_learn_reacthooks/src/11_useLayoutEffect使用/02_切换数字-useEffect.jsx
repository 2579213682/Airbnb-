import React, { memo, useEffect, useLayoutEffect, useState } from "react";

const App = memo(() => {
  const [count, setCount] = useState(100);
  // useLayoutEffect(() => {
  //   console.log("useLayoutEffect");

  // });

  useEffect(() => {
    console.log("uesEffect");
    if (count === 0) {
      setCount(Math.random() + 99);
    }
  });

  console.log("app render");

  return (
    <div>
      <h2>count :{count}</h2>
      <button onClick={(e) => setCount(0)}>设置为0</button>
    </div>
  );
});

export default App;
