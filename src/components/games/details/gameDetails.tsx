import GameDetailsHeader from "./gameDetailsHeader.tsx";
import GameEditSidebar from "./gameEditSidebar.tsx";
import GamePlaythroughListLoader from "./gamePlaythroughListLoader.tsx";

export default function GameDetails() {
    return <>
        <GameDetailsHeader/>
        <div>
            <div>
                <GamePlaythroughListLoader/>
            </div>
            <div>
                <GameEditSidebar/>
            </div>
        </div>
    </>
}
