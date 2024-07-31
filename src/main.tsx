import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { LoginProvider } from "./providers/LoginProvider.tsx";
import { PhraseProvider } from "./providers/PhraseProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LoginProvider>
      <PhraseProvider>
        <App />
      </PhraseProvider>
    </LoginProvider>
  </React.StrictMode>
);
