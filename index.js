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
        <a
          href="https://onlyfullstack.blogspot.com/2019/11/react-tutorial.html"
          target="_blank">
          ReactJS Tutorial on Only Fullstack
        </a>
        <a
          href="https://onlyfullstack.blogspot.com/2019/11/react-tutorial.html"
          target="_blank">
          <img
            src="https://1.bp.blogspot.com/-I276A9NSgjY/Xck5TadIjpI/AAAAAAAAAi0/gFb-9achXtk4XkELxVyRNR3UXuMJGsUfQCLcBGAsYHQ/s640/React%2BTutorial.jpg" height="30%" width="90%"/>
        </a>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
