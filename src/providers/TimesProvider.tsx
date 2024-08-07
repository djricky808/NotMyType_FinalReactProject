import { createContext, ReactNode, useState, useEffect } from "react";
import { TimesRequests } from "../api/TimesAPI";
import { TTimes } from "../Types";
import { toast } from "react-hot-toast";

type TTimesContext = {
  allTimes: TTimes[];
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

  useEffect(() => {
    retrieveTimes();}, [])

  return (
    <TimesContext.Provider
      value={{
        allTimes,
      }}
    >
      {children}
    </TimesContext.Provider>
  );
};
