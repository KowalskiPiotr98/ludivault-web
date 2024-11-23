import useGames from "../../hooks/games/useGames.ts";
import {useEffect, useState} from "react";
import PageData, {getOffset} from "../../models/pageData.ts";
import {GamesIndexContext, GamesIndexContextHandler} from "../../contexts/gamesIndexContext.ts";
import {PaginationContext, PaginationContextHandler} from "../../contexts/paginationContext.ts";
import Loader from "../common/loader.tsx";
import PageSelector from "../common/pageSelector.tsx";
import GameCreator from "./gameCreator.tsx";

export default function GamesList() {
    const [pageData, setPageData] = useState<PageData>(new PageData());
    const {games, setGames, loading} = useGames(getOffset(pageData), pageData.size);

    const contextHandler = new GamesIndexContextHandler(games, setGames);
    const paginationContext = new PaginationContextHandler(pageData, setPageData);

    useEffect(() => {
        if (!games)
            return;

        setPageData(prevState => ({...prevState, isLast: games.length < pageData.size}));
    }, [games, pageData.size]);

    return <>
        <GamesIndexContext.Provider value={contextHandler}>
            <GameCreator/>
            {loading ?
                <Loader/> :
                <></>
            }
        </GamesIndexContext.Provider>
        <PaginationContext.Provider value={paginationContext}>
            <PageSelector/>
        </PaginationContext.Provider>
    </>
}
