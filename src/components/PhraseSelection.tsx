import { usePhrases } from "../providers/UsePhrases";
import { useTutorial } from "../providers/UseTutorial";
import { PhraseModal } from "./PhraseModal";

export const PhraseSelection = () => {
  const { allPhrases, selectLevel, isLevelSelected } = usePhrases();
  const {isTutorialActive} = useTutorial();

  return (
    <section className="phrase-selection">
      <h1>SELECT PHRASE CHALLENGE</h1>
      <div className="phrase-levels">
        {allPhrases.map((phrase) => {
          return (
            <button
              key={`level${phrase.level}`}
              className="level-block"
              disabled={isTutorialActive}
              onClick={() => {
                selectLevel(phrase.level);
              }}
            >
              <h3>{phrase.level}</h3>
            </button>
          );
        })}
      </div>
      {isLevelSelected && <PhraseModal />}
    </section>
  );
};
