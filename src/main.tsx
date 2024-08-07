import React from "react";

import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.css";
import MainAppComponent from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MainAppComponent />
  </React.StrictMode>
);
