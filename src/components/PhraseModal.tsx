import { usePhrases } from "../providers/UsePhrases"

export const PhraseModal = () => {
    const {phraseLevel, exitLevelModal} = usePhrases();
    const completedTime = null;
    const startGame = () => {
      console.log('New Game');
    }

    return (
      <div className="phrase-modal-main">
        <div className="phrase-modal-scores">
          <div className="phrase-modal-left">
            <h1>{`Phrase ${phraseLevel}`}</h1>
            <h2>Personal Best Time:</h2>
            {completedTime && <h1>{completedTime}</h1>}
            {!completedTime && <h1 className="incomplete">NOT COMPLETED</h1>}
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
}