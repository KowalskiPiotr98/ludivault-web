import useGameDetailsContext from "../../../contexts/gameDetailsContext.ts";
import {
    PlaythroughsContext,
    PlaythroughsContextHandler
} from "../../../contexts/playthroughsContext.ts";
import useGamePlaythroughs from "../../../hooks/playthroughs/useGamePlaythroughs.ts";
import Loader from "../../common/loader.tsx";
import ErrorBar from "../../common/errorBar.tsx";
import PlaythroughList from "../../playthroughs/playthroughList.tsx";

export default function GamePlaythroughListLoader() {
    const game = useGameDetailsContext();
    const {playthroughs, setPlaythroughs, loading, error} = useGamePlaythroughs(game.game.id);

    if (loading)
        return <Loader/>
    if (error)
        return <ErrorBar message={error}/>
    return <PlaythroughsContext.Provider value={new PlaythroughsContextHandler(playthroughs, setPlaythroughs)}>
        <PlaythroughList/>
    </PlaythroughsContext.Provider>
}
