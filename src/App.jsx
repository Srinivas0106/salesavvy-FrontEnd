import React from "react";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes.jsx";
import "./assets/styles.css";
function App() {
  return (
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
  );
}
export default App;
