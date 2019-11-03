import React, { Component } from "react";
import { render } from "react-dom";
import Child from "./Child";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      toggle: true
    };
    this.handleCloseWithCallback = this.handleCloseWithCallback.bind(this);
  }

  handleCloseWithCallback(param) {
    alert("Param coming from child : " + param);
    this.setState({ toggle: !this.state.toggle });
  }

  render() {
    return (
      <div>
        <h1>Only FullStack</h1>
        {this.state.toggle && (
          <Child
            name={this.state.name}
            handleCloseWithCallback={this.handleCloseWithCallback}
          />
        )}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
