import { usePhrases } from "../providers/UsePhrases";

export const PhraseSelection = () => {
  const { allPhrases, selectLevel } = usePhrases();

  return (
    <section className="phrase-selection">
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
    </section>
  );
};
