import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { theme } from "./theme";

let root = "";

Object.keys(theme).forEach(k => {
  let vars = Object.keys(theme[k])
    .map(j => `--${j}-${k} : ${theme[k][j]};`)
    .join("\n");

  root += `\n\n:root {\n ${vars} \n}\n\n`;
});

var css = root,
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

style.type = 'text/css';
style.appendChild(document.createTextNode(css));
head.appendChild(style);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
