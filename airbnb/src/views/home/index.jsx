import React, { memo, useEffect, useState } from "react";
import hyRequest from "@/services";

const Home = memo(() => {
  // 定义状态
  const [highScore, setHighScore] = useState({});
  // 网络请求代码
  useEffect(() => {
    hyRequest.get({ url: "/home/highscore" }).then((res) => {
      console.log(res);
      setHighScore(res);
    });
  }, []);

  return (
    <div>
      <h2>{highScore.title}</h2>
      <h2>{highScore.subtitle}</h2>
      {/* {highScore.list && (
        <ul>
          {highScore.list.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      )} */}
      <ul>
        {/* 可选列 ?. */}
        {highScore?.list?.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
});

export default Home;
