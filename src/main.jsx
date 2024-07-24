import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ContextProvider } from "./context/context.jsx";
import { InputProvider } from "./context/inputContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <InputProvider>
        <App />
      </InputProvider>
    </ContextProvider>
  </React.StrictMode>
);
