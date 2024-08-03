import {createContext, ReactNode, useState } from 'react';

type TTutorialContext = {
    isTutorialActive : boolean;
    activateTutorial: () => void;
    hideTutorial: () => void;
}

export const TutorialContext = createContext<TTutorialContext>({} as TTutorialContext);

export const TutorialProvider =({children}: {children: ReactNode}) => {
    const [isTutorialActive, setIsTutorialActive] = useState<boolean>(false)

    const activateTutorial = ()=> {
        setIsTutorialActive(true);
    }

    const hideTutorial = () => {
        setIsTutorialActive(false);
    }

    return (
        <TutorialContext.Provider value={{
            isTutorialActive,
            activateTutorial,
            hideTutorial,
        }}>
            {children}
        </TutorialContext.Provider>
    )
}