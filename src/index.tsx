import React from "react";
import ReactDOMClient from "react-dom/client";

import "../src/styles/global.css";
import reportWebVitals from "./reportWebVitals";
import Fraudster from "./components/Fraudster";

// Replacing with new API: https://github.com/reactwg/react-18/discussions/5
const container: HTMLElement | null = document.getElementById("root");
container &&
  ReactDOMClient.createRoot(container).render(
    <React.StrictMode>
      <Fraudster />
    </React.StrictMode>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
