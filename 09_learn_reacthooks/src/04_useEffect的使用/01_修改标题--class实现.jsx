import React, { PureComponent } from "react";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      counter: 100,
    };
  }

  componentDidMount() {
    document.title = this.state.counter;
  }
  componentDidUpdate() {
    console.log("----");
    document.title = this.state.counter;
  }
  render() {
    const { counter } = this.state;
    return (
      <div>
        <h1>计数：{counter}</h1>
        <button onClick={(e) => this.setState({ counter: counter + 1 })}>
          +1
        </button>
        <button onClick={(e) => this.setState({ counter: counter - 1 })}>
          -1
        </button>
      </div>
    );
  }
}

export default App;
