import React, { memo, useContext, useEffect, useState } from "react";
import "./style.css";
import { useScrollPositon } from "./hooks";
const Home = memo(() => {
  // useEffect(() => {
  //   function handleScroll() {
  //     console.log(window.scrollX, window.scrollY);
  //   }
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  const [scrollX, scrollY] = useScrollPositon();
  return (
    <h1>
      Home page:{scrollX}-{scrollY}
    </h1>
  );
});

const About = memo(() => {
  const [scrollX, scrollY] = useScrollPositon();

  return (
    <h1>
      About page:{scrollX}-{scrollY}
    </h1>
  );
});

const App = memo(() => {
  const [isShow, SetIsShow] = useState(true);

  return (
    <div className="app">
      <h1>App Root Component</h1>
      <Home />
      <About />
    </div>
  );
});

export default App;
