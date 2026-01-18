import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./Pages/App/App";
import "./index.css";

const rootElement: HTMLElement | null = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
