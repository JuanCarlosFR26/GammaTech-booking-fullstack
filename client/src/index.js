import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import UserStateProvider from "./context/UserStateProvider";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserStateProvider>
      <App />
    </UserStateProvider>
  </React.StrictMode>
);
