import React, { forwardRef, memo, useImperativeHandle, useRef } from "react";

const HelloWorld = memo(
  forwardRef((props, ref) => {
    const inputRef = useRef();

    // 子组件对父组件传入的ref进行处理
    useImperativeHandle(ref, () => {
      return {
        focus() {
          console.log("focus");
          inputRef.current.focus();
        },
        setValue(value) {
          inputRef.current.value = value;
        },
      };
    });
    return <input type="text" ref={inputRef} />;
  })
);

const App = memo(() => {
  const titleRef = useRef();
  const inputRef = useRef();

  function handleDom() {
    console.log(inputRef.current);
    inputRef.current.focus();
    // inputRef.current.value = "";
    inputRef.current.setValue("hahaha");
  }
  return (
    <div>
      <h2 ref={titleRef}>hahaha</h2>
      <HelloWorld ref={inputRef} />
      <button onClick={handleDom}>dom操作</button>
    </div>
  );
});

export default App;
