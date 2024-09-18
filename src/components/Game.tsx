
import { useGame } from "../providers/UseGame";

export const Game = () => {
  const { phraseInUse, timer, playerInput, handleInput, incorrectLetter, isWrong, playerInputRef, focusPlayerInput } =
    useGame();



  return (
    <div className="game-screen">
      <form>
        <h1>{phraseInUse}</h1>
        <div className="player-input-box">
          <div className="player-input-background"></div>
          <input
            ref={playerInputRef}
            type="text"
            onChange={(e) => handleInput(e.target.value.toUpperCase())}
            value={playerInput}
            onBlur={focusPlayerInput}
            disabled={isWrong}
          />
          <h1>
            {playerInput}
            <span className="incorrect-character">{incorrectLetter}</span>
          </h1>
        </div>
      </form>
      <h3 style={{ position: "absolute", top: "500px", left: "50%" }}>
        {timer}
      </h3>
    </div>
  );
};
