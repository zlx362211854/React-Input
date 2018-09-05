import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import InputCteator from "./lib/index";
class App extends Component {
  constructor() {
    super();
    this.state = {
      inputval: "www",
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <label htmlFor="example">示例</label>
          {InputCteator.call(this, {
            stateKey: "inputval",
            label: "example"
          })}
          <p>{this.state.inputval}</p>

          <button onClick={() => (this.state.inputval = "qqqq")}>qqq</button>
          <button onClick={() => (this.state.inputval = "eee")}>eee</button>
        </div>
      </div>
    );
  }
}

export default App;
