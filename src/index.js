import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
import Router from "./routes";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="loading...">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
