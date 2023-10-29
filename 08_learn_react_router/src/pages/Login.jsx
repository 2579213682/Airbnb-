import React, { PureComponent } from "react";
import { Navigate } from "react-router-dom";

export class Login extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: true,
    };
  }

  login() {
    this.setState({ isLogin: true });
  }
  render() {
    const { isLogin } = this.state;
    return (
      <div>
        <h1>login pages</h1>
        {!isLogin ? (
          <button onClick={(e) => this.login()}>登录</button>
        ) : (
          <Navigate to="/home" />
        )}
      </div>
    );
  }
}

export default Login;
