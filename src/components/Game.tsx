import { useGame } from "../providers/UseGame";
import { useTimes } from "../providers/UseTimes";

export const Game = () => {
    const {phraseInUse, timer, playerInput } = useGame();

    
    return (
        <div className="game-screen">
            <form>
                <h1>{phraseInUse}</h1>
                <input type="text" />
            </form>
            <h3 style={{position:"absolute", top:"500px", left:"50%"}}>{timer}</h3>
        </div>
    )
}