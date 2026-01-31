import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { ErrorProvider } from "./contexts/ErrorContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
     <ErrorProvider>
        <App />
        </ErrorProvider>

);

