import { usePhrases } from "../providers/UsePhrases";
import { useTimes } from "../providers/UseTimes";
import { useLogin } from "../providers/UseLogin";
import { TTimes } from "../Types";
import { useEffect, useState } from "react";

export const PhraseModal = () => {
  const [topFive, setTopFive] = useState<TTimes[]>([]);

  const { phrase, phraseLevel, exitLevelModal } = usePhrases();
  const { allTimes, userTime, convertToMinutes } = useTimes();
  const { user } = useLogin();

  const personalBestTime = (phraseLevel: string, user: string | undefined) => {
    const myTime = userTime(phraseLevel, user ?? "");
    return myTime ? convertToMinutes(myTime) : null;
  };

  const bestTime = personalBestTime(phraseLevel, user?.username);

  const getTop5Times = (phraseLevel: string) => {
    const timesForLevel = allTimes.filter(
      (phrase) => phrase.phraseId === phraseLevel
    );
    const top5 = timesForLevel.sort((a, b) => a.time - b.time).slice(0, 5);
    setTopFive(top5);
  };

  function startGame() {
    console.log("New Game");
  }

  useEffect(() => {
    getTop5Times(phraseLevel);}
    , [phraseLevel]);

  return (
    <div className="phrase-modal-main">
      <div className="phrase-modal-scores">
        <div className="phrase-modal-left">
          <h1>{`PHRASE ${phraseLevel}`}</h1>
          <p>{phrase?.description}</p>
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
          {topFive.map((time, i) => {
            return (
              <div className={`top-5-scorer ${time.userId === user?.username ? 'user-in-top-5' : ''}`} key={time.id}>
                <h1
                  className={
                    time.userId === user?.username ? "user-in-top-5" : ""
                  }
                >
                  {i + 1}
                </h1>
                <div className="top-5-scorer-center">
                  <h3
                    className={
                      time.userId === user?.username ? "user-in-top-5" : ""
                    }
                  >
                    {time.userId}
                  </h3>
                  <h3
                    className={
                      time.userId === user?.username ? "user-in-top-5" : ""
                    }
                  >
                    {convertToMinutes(time.time)}
                  </h3>
                </div>
                <img src={time.profilePic} alt="" className="user-img top-5-image" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
