import {stateUpdater} from "../utils/types.ts";
import Playthrough, {playthroughSorter} from "../models/playthrough.ts";
import {createContext, useContext} from "react";

export class PlaythroughsContextHandler {
    public playthroughs: Playthrough[];

    private readonly setPlaythroughsInternal: stateUpdater<Playthrough[]>;

    constructor(playthroughs: Playthrough[], setPlaythroughs: stateUpdater<Playthrough[]>) {
        this.playthroughs = playthroughs;
        this.setPlaythroughsInternal = setPlaythroughs;
    }

    public addNewPlaythrough(playthrough: Playthrough) {
        this.setPlaythroughsInternal(prevState => [...prevState, playthrough].sort(playthroughSorter));
    }

    public updatePlaythrough(playthrough: Playthrough) {
        this.setPlaythroughsInternal(prevState => prevState.map(p => p.id === playthrough.id ? playthrough : p));
    }

    public removePlaythrough(playthrough: Playthrough) {
        this.setPlaythroughsInternal(prevState => prevState.filter(p => p.id !== playthrough.id));
    }
}

export const PlaythroughsContext = createContext<PlaythroughsContextHandler>(undefined!);

export default function usePlaythroughsContext() {
    return useContext(PlaythroughsContext);
}
