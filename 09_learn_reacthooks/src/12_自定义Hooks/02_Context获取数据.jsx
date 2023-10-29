import React, { memo, useContext, useState } from "react";
import { useUserToken } from "./hooks";
// User/Token

const Home = memo(() => {
  const [user, token] = useUserToken();
  return (
    <h1>
      Home page:{user.name}-{token}
    </h1>
  );
});

const About = memo(() => {
  const [user, token] = useUserToken();

  return (
    <h1>
      About page {user.name}-{token}
    </h1>
  );
});
  
const App = memo(() => {
  const [isShow, SetIsShow] = useState(true);

  return (
    <div>
      <h1>App Root Component</h1>
      <Home />
      <About />
    </div>
  );
});

export default App;
