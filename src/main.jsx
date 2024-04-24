import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App.jsx";
import "./style/index.scss";
import firebaseConfig from "../firebaseConfig.js";
import { initializeApp } from "firebase/app";
initializeApp(firebaseConfig);
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
