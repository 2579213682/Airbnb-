import React from "react";
import {
  Link,
  useNavigate,
  useRoutes,
} from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Login from "./pages/Login";
// import NotFound from "./pages/NotFound";
// import "./style.css";
// import HomeRecommend from "./pages/HomeRecommend";
// import HomeRanking from "./pages/HomeRanking";
// import Category from "./pages/Category";
// import Order from "./pages/Order";
// import HomeSongMenu from "./pages/HomeSongMenu";
// import Detail from "./pages/Detail";
// import User from "./pages/User";
import routes from "./router";

export function App(props) {
  const navigate = useNavigate();

  function navigateTo(path) {
    console.log(path);

    navigate(path);
  }
  return (
    <div className="app">
      <div className="header">
        <span>header</span>
        <div className="nav">
          <Link to="/home">首页</Link>
          <Link to="/about">关于</Link>
          <Link to="/login">登录</Link>

          <button onClick={(e) => navigateTo("/category")}>分类</button>
          <span onClick={(e) => navigateTo("/order")}>订单</span>
          <Link to="/user?name=gmy&age=20">用户</Link>
        </div>
        <hr />
      </div>
      <div className="content">
        {/* 映射关系：path => Component */}
        {/* <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />}>
            <Route path="/home" element={<Navigate to="/home/recommend" />} />
            <Route path="/home/recommend" element={<HomeRecommend />} />
            <Route path="/home/ranking" element={<HomeRanking />} />
            <Route path="/home/songmenu" element={<HomeSongMenu />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/category" element={<Category />} />
          <Route path="/order" element={<Order />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes> */}
        {useRoutes(routes)}
      </div>
      <div className="footer">
        <hr />
        footer
      </div>
    </div>
  );
}

export default App;
