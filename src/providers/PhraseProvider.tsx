import { createContext, ReactNode, useEffect, useState } from "react";
import { TPhrase } from "../Types";
import { PhraseRequests } from "../api/PhrasesAPI";
import toast from "react-hot-toast";

type TPhraseProvider = {
  allPhrases: TPhrase[];
};

export const PhraseContext = createContext<TPhraseProvider>(
  {} as TPhraseProvider
);

export const PhraseProvider = ({ children }: { children: ReactNode }) => {
  const [allPhrases, setAllPhrases] = useState<TPhrase[]>([]);

  const getPhraseLevels = () => {
    return PhraseRequests.getPhrases()
      .then((phrases: TPhrase[]) => setAllPhrases(phrases))
      .catch(() => {
        toast.error("Could not load levels.");
      });
  };

  useEffect(() => {
    getPhraseLevels()
  }, [])

  return (
    <PhraseContext.Provider value={{
        allPhrases,
    }}>
        {children}
        </PhraseContext.Provider>

    
  );
};
