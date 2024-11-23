import Game from "../models/game.ts";
import {stateUpdater} from "../utils/types.ts";
import {createContext, useContext} from "react";

export class GameDetailsContextHandler {
    public game: Game;
    public setGame: stateUpdater<Game | undefined>;

    constructor(game: Game, setGame: stateUpdater<Game | undefined>) {
        this.game = game;
        this.setGame = setGame;
    }
}

export const GameDetailsContext = createContext<GameDetailsContextHandler>(undefined!);

export default function useGameDetailsContext() {
    return useContext(GameDetailsContext);
}
