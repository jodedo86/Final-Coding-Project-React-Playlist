// src/Main.tsx

import React from "react";
import ReactDOM from "react-dom/client"; // Updated for React 18+
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap---replace bootstrap.min file with * Bootswatch v5.3.3 (https://bootswatch.com) "Lux" Theme

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
