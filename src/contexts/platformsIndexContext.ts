import {createContext, useContext} from "react";
import Platform from "../models/platform.ts";
import {stateUpdater} from "../utils/types.ts";

export class PlatformsIndexContextHandler {
    public platforms: Platform[] | undefined;
    public loading: boolean;

    setPlatformsInternal: stateUpdater<Platform[]>;

    constructor(platforms: Platform[] | undefined, loading: boolean, setPlatforms: stateUpdater<Platform[] | undefined>) {
        this.platforms = platforms;
        this.loading = loading;
        this.setPlatformsInternal = setPlatforms;
    }

    public setPlatforms(editor: (prevState: Platform[]) => Platform[]) {
        this.setPlatformsInternal(editor);
    }
}

export const PlatformsIndexContext = createContext<PlatformsIndexContextHandler>(undefined!);

export default function usePlatformsIndex() {
    return useContext(PlatformsIndexContext);
}
