import {stateUpdater} from "../utils/types.ts";
import Playthrough from "../models/playthrough.ts";
import {createContext, useContext} from "react";

export class PlaythroughsContextHandler {
    public playthroughs: Playthrough[];

    setPlaythroughs: stateUpdater<Playthrough[]>;

    constructor(playthroughs: Playthrough[], setPlaythroughs: stateUpdater<Playthrough[]>) {
        this.playthroughs = playthroughs;
        this.setPlaythroughs = setPlaythroughs;
    }
}

export const PlaythroughsContext = createContext<PlaythroughsContextHandler>(undefined!);

export default function usePlaythroughsContext() {
    return useContext(PlaythroughsContext);
}
