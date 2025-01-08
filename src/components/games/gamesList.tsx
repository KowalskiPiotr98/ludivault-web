import useGames from "../../hooks/games/useGames.ts";
import {useEffect, useMemo, useState} from "react";
import PageData, {getOffset} from "../../models/pageData.ts";
import {GamesIndexContext, GamesIndexContextHandler} from "../../contexts/gamesIndexContext.ts";
import {PaginationContext, PaginationContextHandler} from "../../contexts/paginationContext.ts";
import Loader from "../common/loader.tsx";
import PageSelector from "../common/pageSelector.tsx";
import GameListItems from "./gameListItems.tsx";
import GameCreator from "./gameCreator.tsx";
import ListTopButtonRow from "../common/lists/listTopButtonRow.tsx";
import ListTopFilterRow from "../common/lists/listTopFilterRow.tsx";
import GameFilter from "./gameFilter.tsx";

export default function GamesList() {
    const [pageData, setPageData] = useState<PageData>(new PageData());
    const [title, setTitle] = useState<string>("");
    const [owned, setOwned] = useState<boolean>();
    const [released, setReleased] = useState<boolean>();
    const [inProgress, setInProgress] = useState<boolean>();
    const {games, setGames, loading} = useGames(getOffset(pageData), pageData.size, title, owned, released, inProgress);

    const contextHandler = useMemo(() => new GamesIndexContextHandler(games, setGames, title, setTitle, owned, setOwned, released, setReleased, inProgress, setInProgress), [games, setGames, title, setTitle, owned, setOwned, released, setReleased, inProgress, setInProgress]);
    const paginationContext = useMemo(() => new PaginationContextHandler(pageData, setPageData), [pageData, setPageData]);

    useEffect(() => {
        if (!games)
            return;

        setPageData(prevState => ({...prevState, isLast: games.length < pageData.size}));
    }, [games, pageData.size]);

    return <>
        <GamesIndexContext.Provider value={contextHandler}>
            <ListTopFilterRow>
                <GameFilter/>
            </ListTopFilterRow>
            <ListTopButtonRow>
                <GameCreator/>
            </ListTopButtonRow>
            {loading ?
                <Loader/> :
                <GameListItems/>
            }
        </GamesIndexContext.Provider>
        <PaginationContext.Provider value={paginationContext}>
            <PageSelector/>
        </PaginationContext.Provider>
    </>
}
