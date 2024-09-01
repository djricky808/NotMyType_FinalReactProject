import { createContext, ReactNode, useState } from "react";
import { TPhrase } from "../Types";
import { usePhrases } from "./UsePhrases";

type TGameProvider = {
  phraseInUse: string;
  playerInput: string;
  timer: number;
  isGameRunning: boolean;
  startGame: (phrase: TPhrase) => void;
  startTimer: () => void;
};

export const GameContext = createContext<TGameProvider>({} as TGameProvider);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [phraseInUse, setPhraseinUse] = useState<string>("");
  const [playerInput, setPlayerInput] = useState<string>("");
  const [timer, setTimer] = useState<number>(0);
  const [isGameRunning, setIsGameRunning] = useState<boolean>(false);

  const startGame = (phrase: TPhrase) => {
    setPhraseinUse(phrase.phrase);
    setPlayerInput("");
    setIsGameRunning(true);
    startTimer()
  };

  const startTimer = () => {
    setTimer(0)
    let time = 0

    const updateTime = () => { time += 1;
    setTimer(time);
    setTimeout(() => updateTime(), 1);
    }

    setTimeout(()=> updateTime() , 1);
  }

  return (
    <GameContext.Provider
      value={{
        phraseInUse,
        playerInput,
        timer,
        isGameRunning,
        startGame,
        startTimer
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
