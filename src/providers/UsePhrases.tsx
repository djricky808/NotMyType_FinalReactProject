import { useContext } from "react";
import { PhraseContext } from "./PhraseProvider";

export const usePhrases = () => {
  const context = useContext(PhraseContext);

  return {
    allPhrases: context.allPhrases,
    selectLevel: context.selectLevel,
    phraseLevel: context.phraseLevel,
  };
};
