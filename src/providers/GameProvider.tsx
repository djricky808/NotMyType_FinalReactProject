import { useContext, createContext, ReactNode, useState } from "react";
import { TPhrase, TTimes, TUser } from "../Types";
import { usePhrases } from "./UsePhrases";

type TGameProvider = {
  phraseInUse: string;
  playerInput: string;
  timer: number;
  isGameRunning: boolean;
  startGame: (phrase: TPhrase) => void;
};

export const GameContext = createContext<TGameProvider>({} as TGameProvider);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [phraseInUse, setPhraseinUse] = useState<string>("");
  const [playerInput, setPlayerInput] = useState<string>("");
  const [timer, setTimer] = useState<number>(0);
  const [isGameRunning, setIsGameRunning] = useState<boolean>(false);

  const { allPhrases } = usePhrases();

  const startGame = (phrase: TPhrase) => {
    setPhraseinUse(phrase.phrase);
    setPlayerInput("");
    setIsGameRunning(true);
  };

  return (
    <GameContext.Provider
      value={{
        phraseInUse,
        playerInput,
        timer,
        isGameRunning,
        startGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
