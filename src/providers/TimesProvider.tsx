import { createContext, ReactNode, useState, useEffect } from "react";
import { TimesRequests } from "../api/TimesAPI";
import { TTimes } from "../Types";
import { toast } from "react-hot-toast";

type TTimesContext = {
  allTimes: TTimes[];
  retrieveTimes: () => void;
  convertToMinutes: (time:number) => string;
  userTime: (phraseId: string, userId: string) => number | undefined;
};

export const TimesContext = createContext<TTimesContext>({} as TTimesContext);

export const TimesProvider = ({ children }: { children: ReactNode }) => {
    const [allTimes, setAllTimes] = useState<TTimes[]>([])

  const retrieveTimes = () => {
    return TimesRequests.getTimes()
    .then((times: TTimes[]) => setAllTimes(times))
    .catch(() => {
        toast.error("Could not load times.");
    });
  };

  const userTime = (phraseId: string, userId: string) => {
    return allTimes.find((time) => time.phraseId === phraseId && time.userId === userId)?.time
  }

  const convertToMinutes = (time: number) => {
    const minutes = Math.floor(time / 60000)
    const seconds = Math.floor((time % 60000) / 1000)
    const milliseconds = time % 1000;

    return (
      String(minutes).padStart(2, "0") + ':' +
      String(seconds).padStart(2, "0") + ':' +
      String(milliseconds).padStart(3,"0")
    )
  }

  useEffect(() => {
    retrieveTimes();}, [])

  return (
    <TimesContext.Provider
      value={{
        allTimes,
        retrieveTimes,
        convertToMinutes,
        userTime,
      }}
    >
      {children}
    </TimesContext.Provider>
  );
};
