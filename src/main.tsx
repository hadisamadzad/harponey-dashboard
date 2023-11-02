import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App/App";
import "./global.css";

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <div className="light text-foreground bg-background">
        <App />
      </div>
    </NextUIProvider>
  </React.StrictMode>
);
