import React from "react";
import ReactDOM from "react-dom";
import "./Components/CSS/index.module.css";
import App from "./App";
import { AuthContextProvider } from "./Contextprovider/Context";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
