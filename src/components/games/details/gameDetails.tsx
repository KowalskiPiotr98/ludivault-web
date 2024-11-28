import GameDetailsHeader from "./gameDetailsHeader.tsx";
import GameEditSidebar from "./gameEditSidebar.tsx";

export default function GameDetails() {
    return <>
        <GameDetailsHeader/>
        <div className="grid grid-cols-4">
            <div className="col-span-3">

            </div>
            <div className="border col-span-1">
                <GameEditSidebar/>
            </div>
        </div>
    </>
}
