import React, { PureComponent } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import "./style.css";
import HomeRecommend from "./pages/HomeRecommend";
import HomeRanking from "./pages/HomeRanking";

export class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <div className="header">
          <span>header</span>
          <div className="nav">
            {/* <NavLink
              to="/home"
              style={(isActive) => ({
                color: isActive ? "red" : "",
              })}
            >
              首页
            </NavLink>
            <NavLink
              to="/about"
              style={(isActive) => ({
                color: isActive ? "red" : "",
              })}
            >
              关于
            </NavLink>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? "link-active" : "")}
            >
              首页
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "link-active" : "")}
            >
              关于
            </NavLink> */}
            <Link to="/home">首页</Link>
            <Link to="/about">关于</Link>
            <Link to="/login">登录</Link>

            <button>分类</button>
            <span>订单</span>
          </div>
          <hr />
        </div>
        <div className="content">
          {/* 映射关系：path => Component */}
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />}>
              <Route path="/home" element={<Navigate to="/home/recommend" />} />
              <Route path="/home/recommend" element={<HomeRecommend />} />
              <Route path="/home/ranking" element={<HomeRanking />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <div className="footer">
          <hr />
          footer
        </div>
      </div>
    );
  }
}

export default App;
