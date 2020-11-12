// var React = require("react");
// var ReactDOM = require("react-dom");

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));

// This is the same as:
// var h1 = document.createElement("h1");
// h1.innerHTML = "Hello World!";
// document.getElementById("root").appendChild(h1);

// See https://babeljs.io/ - this is a Javascript Compiler
// This means you can write next generation code that can still be read by any browser

// The render method can only take a single HTML element
// We can get around this by embedding them in a single div

ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>This is a paragraph</p>
  </div>,
  document.getElementById("root")
);
