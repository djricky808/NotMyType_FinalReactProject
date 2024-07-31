import { createContext, ReactNode, useEffect, useState } from "react";
import { TPhrase } from "../Types";
import { PhraseRequests } from "../api/PhrasesAPI";
import toast from "react-hot-toast";

type TPhraseProvider = {
  allPhrases: TPhrase[];
  selectLevel: (phrase: number) => void;
  phraseLevel: number;
};

export const PhraseContext = createContext<TPhraseProvider>(
  {} as TPhraseProvider
);

export const PhraseProvider = ({ children }: { children: ReactNode }) => {
  const [allPhrases, setAllPhrases] = useState<TPhrase[]>([]);
  const [phraseLevel, setPhraseLevel] = useState<number>(0);

  const getPhraseLevels = () => {
    return PhraseRequests.getPhrases()
      .then((phrases: TPhrase[]) => setAllPhrases(phrases))
      .catch(() => {
        toast.error("Could not load levels.");
      });
  };

  const selectLevel = (level: number) => {
    setPhraseLevel(level);
  };

  useEffect(() => {
    getPhraseLevels();
  }, []);

  return (
    <PhraseContext.Provider
      value={{
        allPhrases,
        selectLevel,
        phraseLevel,
      }}
    >
      {children}
    </PhraseContext.Provider>
  );
};
