import { createContext, ReactNode, useState, useRef, RefObject, useEffect } from "react";
import { TPhrase } from "../Types";
import { usePhrases } from "./UsePhrases";

type TGameProvider = {
  phraseInUse: string;
  playerInput: string;
  timer: number;
  isGameRunning: boolean;
  startGame: (phrase: TPhrase) => void;
  startTimer: () => void;
  isWrong: boolean;
  handleInput: (lastInput: string) => void;
  incorrectLetter: string;
  playerInputRef: RefObject<HTMLInputElement>
  focusPlayerInput: () => void
};

export const GameContext = createContext<TGameProvider>({} as TGameProvider);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [phraseInUse, setPhraseinUse] = useState<string>("");
  const [playerInput, setPlayerInput] = useState<string>("");
  const [incorrectLetter, setIncorrectLetter] = useState("");
  const [timer, setTimer] = useState<number>(0);
  const [isGameRunning, setIsGameRunning] = useState<boolean>(false);
  const [isWrong, setIsWrong] = useState<boolean>(false);

  const playerInputRef = useRef<HTMLInputElement>(null);

  const focusPlayerInput = () => {
    if(playerInputRef.current) {
      console.log('reset focus')
      playerInputRef.current.focus();
    }
  }

  useEffect(() => {
    if (!isWrong) {
      focusPlayerInput()
    }
  },[isWrong])

  const startGame = (phrase: TPhrase) => {
    setPhraseinUse(phrase.phrase);
    setPlayerInput("");
    setIsGameRunning(true);
    startTimer();
    setTimeout(() => focusPlayerInput(), 0);
  };

  const startTimer = () => {
    setTimer(0);
    let time = 0;

    const updateTime = () => {
      time += 1;
      setTimer(time);
      setTimeout(() => updateTime(), 1);
    };

    setTimeout(() => updateTime(), 1);
  };

  const handleInput = (lastInput: string) => {
    const phraseSoFar = phraseInUse.slice(0, lastInput.length);
    if (lastInput === phraseSoFar) {
      setPlayerInput(lastInput);
      console.log("true");
    } else {
      wrongInput(lastInput);
    }
  };

  const wrongInput = (lastInput: string) => {
    console.log("wrong!");
    setIsWrong(true);
    setIncorrectLetter(lastInput.slice(lastInput.length - 1, lastInput.length));
    console.log(incorrectLetter);
    setTimeout(() => {
      setPlayerInput("");
      setIncorrectLetter("");
      setIsWrong(false);
    }, 1000)
  };
  return (
    <GameContext.Provider
      value={{
        phraseInUse,
        playerInput,
        timer,
        isGameRunning,
        startGame,
        startTimer,
        isWrong,
        handleInput,
        incorrectLetter,
        playerInputRef,
        focusPlayerInput
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
