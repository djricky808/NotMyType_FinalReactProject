import { useContext } from "react";
import { GameContext } from "./GameProvider";

export const useGame = () => {
    const context = useContext(GameContext);
    const {phraseInUse, playerInput, timer, isGameRunning, startGame, startTimer, handleInput, incorrectLetter} = context;

    return {
        phraseInUse,
        playerInput,
        timer,
        isGameRunning,
        startGame,
        startTimer,
        handleInput,
        incorrectLetter
    }
}