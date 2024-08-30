import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { LoginProvider } from "./providers/LoginProvider.tsx";
import { PhraseProvider } from "./providers/PhraseProvider.tsx";
import { TutorialProvider } from "./providers/TutorialProvider.tsx";
import { TimesProvider } from "./providers/TimesProvider.tsx";
import { GameProvider } from "./providers/GameProvider.tsx";
import { Game } from "./components/Game.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LoginProvider>
      <PhraseProvider>
        <TimesProvider>
          <TutorialProvider>
            <GameProvider>
              <App />
            </GameProvider>
          </TutorialProvider>
        </TimesProvider>
      </PhraseProvider>
    </LoginProvider>
  </React.StrictMode>
);
