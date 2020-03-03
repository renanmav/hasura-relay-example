import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { RelayEnvironmentProvider } from "react-relay/hooks";

import "./index.css";

import environment from "./environment";

import Home from "./modules/home/Home";

ReactDOM.render(
  <RelayEnvironmentProvider environment={environment}>
    <Suspense fallback={"loading..."}>
      <Home />
    </Suspense>
  </RelayEnvironmentProvider>,
  document.getElementById("root")
);
