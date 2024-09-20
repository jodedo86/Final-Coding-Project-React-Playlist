// src/Main.tsx

import React from "react";
import ReactDOM from "react-dom/client"; // Updated for React 18+
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootswatch Lux theme

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
