import Root from "./root.component.js";
import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";

const { bootstrap, mount, unmount } = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary: (err, info, props) => <div>An error has occurred</div>,
});

export { bootstrap, mount, unmount };
