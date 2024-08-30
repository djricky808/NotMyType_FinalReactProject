import { createContext, ReactNode, useEffect, useState } from "react";
import { TPhrase } from "../Types";
import { PhraseRequests } from "../api/PhrasesAPI";
import toast from "react-hot-toast";

type TPhraseProvider = {
  allPhrases: TPhrase[];
  selectLevel: (phrase: string) => void;
  exitLevelModal: () => void;
  phraseLevel: string;
  isLevelSelected: boolean;
  phrase: TPhrase | null;
};

export const PhraseContext = createContext<TPhraseProvider>(
  {} as TPhraseProvider
);

export const PhraseProvider = ({ children }: { children: ReactNode }) => {
  const [allPhrases, setAllPhrases] = useState<TPhrase[]>([]);
  const [phrase, setPhrase] = useState<TPhrase|null >(null);
  const [phraseLevel, setPhraseLevel] = useState<string>('');
  const [isLevelSelected, setIsLevelSelected] = useState<boolean>(false);

  const getPhraseLevels = () => {
    return PhraseRequests.getPhrases()
      .then((phrases: TPhrase[]) => setAllPhrases(phrases))
      .catch(() => {
        toast.error("Could not load levels.");
      });
  };

  const selectLevel = (level: string) => {
    const phrase = allPhrases.find((phrase: TPhrase)=> phrase.level === level)
    setPhrase(phrase || null);
    setPhraseLevel(level);
    setIsLevelSelected(true);
  };

  const exitLevelModal = () => {
    setPhrase(null)
    setPhraseLevel('')
    setIsLevelSelected(false);
  }


  useEffect(() => {
    getPhraseLevels();
  }, []);

  return (
    <PhraseContext.Provider
      value={{
        allPhrases,
        selectLevel,
        phraseLevel,
        exitLevelModal,
        isLevelSelected,
        phrase,
      }}
    >
      {children}
    </PhraseContext.Provider>
  );
};
