import {createContext, useContext} from "react";
import {stateUpdater} from "../utils/types.ts";
import Game from "../models/game.ts";
import {ItemIndexContextHandler} from "./itemIndexContext.ts";

export class GamesIndexContextHandler extends ItemIndexContextHandler<Game> {
    public readonly titleFilter: string;
    public readonly setTitleFilter: stateUpdater<string>;

    public readonly ownedFilter: boolean | undefined;
    public readonly setOwnedFilter: stateUpdater<boolean | undefined>;

    public readonly releasedFilter: boolean | undefined;
    public readonly setReleasedFilter: stateUpdater<boolean | undefined>;

    public readonly inProgressFilter: boolean | undefined;
    public readonly setInProgressFilter: stateUpdater<boolean | undefined>;

    constructor(
        games: Game[] | undefined, setGames: stateUpdater<Game[] | undefined>,
        titleFilter: string, setTitleFilter: stateUpdater<string>,
        ownedFilter: boolean | undefined, setOwnedFilter: stateUpdater<boolean | undefined>,
        releasedFilter: boolean | undefined, setReleasedFilter: stateUpdater<boolean | undefined>,
        inProgressFilter: boolean | undefined, setInProgressFilter: stateUpdater<boolean | undefined>,
        ) {
        super(games, setGames);
        this.titleFilter = titleFilter;
        this.setTitleFilter= setTitleFilter;
        this.ownedFilter = ownedFilter;
        this.setOwnedFilter = setOwnedFilter;
        this.releasedFilter = releasedFilter;
        this.setReleasedFilter = setReleasedFilter;
        this.inProgressFilter = inProgressFilter;
        this.setInProgressFilter = setInProgressFilter;
    }
}

export const GamesIndexContext = createContext<GamesIndexContextHandler>(undefined!);

export default function useGamesIndex() {
    return useContext(GamesIndexContext);
}
