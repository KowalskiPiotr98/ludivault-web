import {useParams} from "react-router-dom";
import useGame from "../../../hooks/games/useGame.ts";
import Loader from "../../common/loader.tsx";
import GameDetails from "./gameDetails.tsx";
import ErrorBar from "../../common/errorBar.tsx";
import {GameDetailsContext, GameDetailsContextHandler} from "../../../contexts/gameDetailsContext.ts";
import {useGameEditor} from "../../../hooks/games/useGameEditor.ts";
import {useEffect} from "react";
import runDebounced from "../../../utils/debounce.ts";

export default function GameDetailsRouter() {
    const {id} = useParams();
    const {game, setGame, loading} = useGame(id ?? "");
    const {editing, error, editor} = useGameEditor();

    useEffect(() => {
        if (!game)
            return;

        // this way of doing things has the downside of never actually looking at the values returned by the server
        // this is fine for as long as the game does not set anything server-side that might be important
        // if that starts to happen, there will need to be a separate, readonly state for this server-side game state thing
        runDebounced(() => editor(game));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [game])

    if (loading)
        return <Loader/>
    if (!game)
        return <ErrorBar message={"Failed to load game"}/>
    return <GameDetailsContext.Provider value={new GameDetailsContextHandler(game, setGame, editing)}>
        {error && <ErrorBar message={error}/>}
        <GameDetails/>
    </GameDetailsContext.Provider>
}
