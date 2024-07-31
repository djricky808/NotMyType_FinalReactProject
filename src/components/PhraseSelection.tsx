import { useState } from "react";
import { PhraseRequests } from "../api/PhrasesAPI";
import { TPhrase } from "../Types";

export const PhraseSelection = () => {
  const [phrases, setPhrases] = useState<TPhrase>([]);

  

  return (
    <>
      {phrases.map((phrase) => {
        return (
          <div>
            <h3>{phrase.level}</h3>
          </div>
        );
      })}
    </>
  );
};
