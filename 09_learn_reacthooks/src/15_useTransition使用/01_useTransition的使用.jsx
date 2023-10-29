import React, { memo, useState, useTransition } from "react";
import namesArray from "./namesArray";

const App = memo(() => {
  const [showNames, setShowNames] = useState(namesArray);
  const [pending, startTransition] = useTransition();

  function valueChangeHandle(event) {
    // console.log(event.target.value);
    // 优先执行核心主要的代码，将startTransition优先级推后
    startTransition(() => {
      const keyword = event.target.value;
      const filterShowNames = namesArray.filter((item) =>
        item.includes(keyword)
      );
      setShowNames(filterShowNames);
    });
  }

  return (
    <div>
      <input type="text" onInput={(e) => valueChangeHandle(e)} />
      <h2>用户名列表:{pending && <span>data loading</span>}</h2>
      <ul>
        {showNames.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
});

export default App;
