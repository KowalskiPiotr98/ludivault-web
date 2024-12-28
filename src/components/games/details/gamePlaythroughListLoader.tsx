import useGameDetailsContext from "../../../contexts/gameDetailsContext.ts";
import {
    PlaythroughsContext,
    PlaythroughsContextHandler
} from "../../../contexts/playthroughsContext.ts";
import useGamePlaythroughs from "../../../hooks/playthroughs/useGamePlaythroughs.ts";
import Loader from "../../common/loader.tsx";
import ErrorBar from "../../common/errorBar.tsx";
import PlaythroughList from "../../playthroughs/playthroughList.tsx";
import {useMemo} from "react";

export default function GamePlaythroughListLoader() {
    const game = useGameDetailsContext();
    const {playthroughs, setPlaythroughs, loading, error} = useGamePlaythroughs(game.game.id);

    const context = useMemo(() => loading || error ? undefined : new PlaythroughsContextHandler(playthroughs, setPlaythroughs), [playthroughs, setPlaythroughs, loading, error]);

    if (loading)
        return <Loader/>
    if (error)
        return <ErrorBar message={error}/>
    return <PlaythroughsContext.Provider value={context!}>
        <PlaythroughList/>
    </PlaythroughsContext.Provider>
}
