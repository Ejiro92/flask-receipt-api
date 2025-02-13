import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Get the root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App inside React StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Log performance metrics (optional)
reportWebVitals();
