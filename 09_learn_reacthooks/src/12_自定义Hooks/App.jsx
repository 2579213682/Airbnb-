import React, { memo, useContext, useEffect, useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

const App = memo(() => {
  // 通过key，直接从localStorage种获取一个数据
  // const [token, setToken] = useState(localStorage.getItem("token"));
  // useEffect(() => {
  //   localStorage.setItem("token", token);
  // }, [token]);
  const [token,setToken]=useLocalStorage("token")
  function setTokenHandle() {
    setToken("james");
    // localStorage.setItem("token", "why");
  }

  // const [avatarUrl, setAvatarUrl] = useState(localStorage.getItem("avatarUrl"));
  // useEffect(() => {
  //   localStorage.setItem("avatarUrl", avatarUrl);
  // }, [avatarUrl]);
  const [avatarUrl,setAvatarUrl]=useLocalStorage("avatarUrl")
  function setAvatarUrlHandle() {
    setAvatarUrl("http://www.james.com/james.png");
  }
  return (
    <div className="app">
      <h1>App Root Component :{token}</h1>
      <button onClick={setTokenHandle}>设置token</button>
      <h1>avatarURL:{avatarUrl}</h1>
      <button onClick={setAvatarUrlHandle}>设置新头像地址</button>
    </div>
  );
});

export default App;
