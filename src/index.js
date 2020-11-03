import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <TodoProvider>
    <App />, document.getElementById("root")
  </TodoProvider>
);
