import React from "react";

export default function Child(props) {
  return (
    <div>
      <h2>Child to parent component communication</h2>
      <h3>Hello, {props.name}</h3>
      <button onClick={() => props.handleCloseWithCallback("childprop")}>
        Close with callback
      </button>
    </div>
  );
}
