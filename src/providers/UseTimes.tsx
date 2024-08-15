import { useContext } from "react";
import { TimesContext } from "./TimesProvider";

export const useTimes = () => {
    const context = useContext(TimesContext)

    return {
        allTimes : context.allTimes,
        retrieveTimes: context.retrieveTimes,
        userTime: context.userTime,
        convertToMinutes: context.convertToMinutes,
    }
}