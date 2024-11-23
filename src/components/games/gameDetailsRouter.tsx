import {useParams} from "react-router-dom";
import useGame from "../../hooks/games/useGame.ts";
import Loader from "../common/loader.tsx";
import GameDetails from "./gameDetails.tsx";
import ErrorBar from "../common/errorBar.tsx";
import {GameDetailsContext, GameDetailsContextHandler} from "../../contexts/gameDetailsContext.ts";

export default function GameDetailsRouter() {
    const {id} = useParams();
    const {game, setGame, loading} = useGame(id ?? "");

    if (loading)
        return <Loader/>
    if (!game)
        return <ErrorBar message={"Failed to load game"}/>
    return <GameDetailsContext.Provider value={new GameDetailsContextHandler(game, setGame)}>
        <GameDetails/>
    </GameDetailsContext.Provider>
}
