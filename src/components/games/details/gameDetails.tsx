import GameDetailsHeader from "./gameDetailsHeader.tsx";
import GameEditSidebar from "./gameEditSidebar.tsx";
import GamePlaythroughListLoader from "./gamePlaythroughListLoader.tsx";

export default function GameDetails() {
    return <>
        <GameDetailsHeader/>
        <div className="grid grid-cols-4">
            <div className="col-span-3">
                <GamePlaythroughListLoader/>
            </div>
            <div className="border col-span-1">
                <GameEditSidebar/>
            </div>
        </div>
    </>
}
