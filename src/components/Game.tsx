import { useGame } from "../providers/UseGame";

export const Game = () => {
    const {phraseInUse, playerInput } = useGame();
    
    return (
        <div className="game-screen">
            <form>
                <h1>{phraseInUse}</h1>
                <input type="text" />
            </form>
        </div>
    )
}