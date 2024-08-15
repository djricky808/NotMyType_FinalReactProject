import { usePhrases } from "../providers/UsePhrases";
import { useTimes } from "../providers/UseTimes";
import { useLogin } from "../providers/UseLogin";

export const PhraseModal = () => {
  const { allPhrases, phraseLevel, exitLevelModal } = usePhrases();
  const { allTimes, userTime, convertToMinutes } = useTimes();
  const { user } = useLogin();

  const personalBestTime = (phraseLevel: string, user: string | undefined) => {
    const myTime = userTime(phraseLevel, user ?? '');
    return myTime ? convertToMinutes(myTime) : null;
  };

  const bestTime = personalBestTime(phraseLevel, user?.username);

  const startGame = () => {
    console.log("New Game");
  };

  return (
    <div className="phrase-modal-main">
      <div className="phrase-modal-scores">
        <div className="phrase-modal-left">
          <h1>{`PHRASE ${phraseLevel}`}</h1>
          <p>{allPhrases[Number(phraseLevel) - 1].description}</p>
          <h2>Personal Best Time:</h2>
          {bestTime && <h1>{bestTime}</h1>}
          {!bestTime && <h1 className="incomplete">NOT COMPLETED</h1>}
          <div className="buttons">
            <button onClick={() => startGame()}>START</button>
            <button onClick={() => exitLevelModal()}>CANCEL</button>
          </div>
        </div>

        <div className="phrase-modal-right">
          <h1>TOP SCORES</h1>
        </div>
      </div>
    </div>
  );
};
