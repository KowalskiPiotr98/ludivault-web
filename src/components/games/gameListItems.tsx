import useGamesIndex from "../../contexts/gamesIndexContext.ts";
import ErrorBar from "../common/errorBar.tsx";
import GameListItem from "./gameListItem.tsx";

export default function GameListItems() {
    const games = useGamesIndex();

    if (!games.items)
        return <ErrorBar message={"Failed to load games."}/>
    return <>
        {games.items.map(game => <GameListItem key={game.id} game={game}/>)}
    </>
}