import * as React from "react";
import { lazy, Suspense } from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./app";

const tester = lazy(() => import("./test"));

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={App} />
    <Suspense fallback="<h1>Loading</h1>">
      <Route exact path="/test" component={tester} />
    </Suspense>
  </BrowserRouter>,
  document.getElementById("main")
);
