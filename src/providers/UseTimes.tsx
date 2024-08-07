import { useContext } from "react";
import { TimesContext } from "./TimesProvider";

export const UseTimes = () => {
    const context = useContext(TimesContext)

    return {
        allTimes : context.allTimes,
    }
}