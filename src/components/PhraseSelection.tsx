import { usePhrases } from "../providers/UsePhrases";
import { PhraseModal } from "./PhraseModal";

export const PhraseSelection = () => {
  const { allPhrases, selectLevel, isLevelSelected } = usePhrases();

  return (
    <section className="phrase-selection">
      <h1>SELECT PHRASE CHALLENGE</h1>
      <div className="phrase-levels">
        {allPhrases.map((phrase) => {
          return (
            <div
              key={`level${phrase.level}`}
              className="level-block"
              onClick={() => {
                selectLevel(phrase.level);
              }}
            >
              <h3>{phrase.level}</h3>
            </div>
          );
        })}
      </div>
      {isLevelSelected && <PhraseModal />}
    </section>
  );
};
