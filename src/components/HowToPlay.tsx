import { useState } from "react"
import { tutorial } from "../tutorial/tutorial";
import { useTutorial } from "../providers/UseTutorial";

export const HowToPlay = () =>{
    const {hideTutorial} = useTutorial();

    const [tutorialPage, setTutorialPage] = useState<number>(0);

    const nextPage = () => {
        setTutorialPage(tutorialPage + 1);
    }

    const prevPage = () => {
        setTutorialPage(tutorialPage - 1);
    }

    return(
        <section className="tutorial-modal">
            <div className="close-button" onClick={()=> hideTutorial()}>X</div>
            <img src={tutorial[tutorialPage].image} />
            <p>{tutorial[tutorialPage].instruction}</p>
            <div className="tutorial-progress">
                <div></div>
            </div>
            <div className="buttons">
                <button disabled={tutorialPage === 0} onClick={()=> prevPage()}>BACK</button>
                {tutorialPage < tutorial.length -1 && <button onClick={()=> nextPage()}>NEXT</button>}
                {tutorialPage === tutorial.length -1 && <button onClick={()=> hideTutorial()}>DONE</button>}
            </div>
        </section>
    )

}