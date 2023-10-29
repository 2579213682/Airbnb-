import React, { memo } from "react";
import CounterClass from "./CounterClass";
import CounterHook from "./CounterHook";

export default memo(() => {
  return (
    <div>
      <h1> App Component</h1>
      <CounterClass />
      <CounterHook />
    </div>
  );
});
