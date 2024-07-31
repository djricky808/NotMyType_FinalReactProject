import { usePhrases } from "../providers/UsePhrases";

export const PhraseSelection = () => {
  const {allPhrases} = usePhrases();

  

  return (
    <section className="phrase-selection">
      {allPhrases.map((phrase) => {
        return (
          <div className="level-block">
            <h3>{phrase.level}</h3>
          </div>
        );
      })}
    </section>
  );
};
