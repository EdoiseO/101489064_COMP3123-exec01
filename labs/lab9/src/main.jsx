import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App
      title="Welcome to Fullstack Development - I"
      subtitle="React JS Programming Week09 Lab exercise"
    />
  </StrictMode>,
);
