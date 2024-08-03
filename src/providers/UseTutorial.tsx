import { useContext } from "react";
import { TutorialContext } from "./TutorialProvider";

export const useTutorial = () => {
    const context = useContext(TutorialContext)

    return {
        isTutorialActive: context.isTutorialActive,
        activateTutorial: context.activateTutorial,
        hideTutorial: context.hideTutorial,
    }
}