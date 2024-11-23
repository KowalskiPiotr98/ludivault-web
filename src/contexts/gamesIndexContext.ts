import {createContext, useContext} from "react";
import {stateUpdater} from "../utils/types.ts";
import Game from "../models/game.ts";
import {ItemIndexContextHandler} from "./itemIndexContext.ts";

export class GamesIndexContextHandler extends ItemIndexContextHandler<Game> {
    constructor(games: Game[] | undefined, setGames: stateUpdater<Game[] | undefined>) {
        super(games, setGames);
    }
}

export const GamesIndexContext = createContext<GamesIndexContextHandler>(undefined!);

export default function useGamesIndex() {
    return useContext(GamesIndexContext);
}
