import React, { memo } from "react";
// import HelloWorld from "components/hello-world";
// import Home from "./views/home";
import { useRoutes } from "react-router-dom";
import routes from "./router";

const App = memo(() => {
  return (
    <div className="app">
      <div className="header"> header </div>
      <div className="page">{useRoutes(routes)}</div>
      <div className="footer"> footer</div>
    </div>
  );
});

export default App;
