import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App"; // Adjust the path as necessary

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
