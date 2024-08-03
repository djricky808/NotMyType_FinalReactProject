import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { LoginProvider } from "./providers/LoginProvider.tsx";
import { PhraseProvider } from "./providers/PhraseProvider.tsx";
import { TutorialProvider } from "./providers/TutorialProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LoginProvider>
      <PhraseProvider>
        <TutorialProvider>
          <App />
        </TutorialProvider>
      </PhraseProvider>
    </LoginProvider>
  </React.StrictMode>
);
