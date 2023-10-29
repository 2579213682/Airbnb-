import React, { memo, useDeferredValue, useState, } from "react";
import namesArray from "./namesArray";

const App = memo(() => {
  const [showNames, setShowNames] = useState(namesArray);
  const deferedShowNames=useDeferredValue(showNames)

  function valueChangeHandle(event) {
    // console.log(event.target.value);
    // 优先执行核心主要的代码，将startTransition优先级推后
    const keyword = event.target.value;
    const filterShowNames = namesArray.filter((item) => item.includes(keyword));
    setShowNames(filterShowNames);
  }

  return (
    <div>
      <input type="text" onInput={(e) => valueChangeHandle(e)} />
      <h2>用户名列表:</h2>
      <ul>
        {deferedShowNames.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
});

export default App;
