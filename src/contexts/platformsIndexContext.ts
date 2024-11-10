import {createContext, useContext} from "react";
import Platform from "../models/platform.ts";
import {stateUpdater} from "../utils/types.ts";

export class PlatformsIndexContextHandler {
    public platforms: Platform[] | undefined;

    setPlatformsInternal: stateUpdater<Platform[] | undefined>;

    constructor(platforms: Platform[] | undefined, setPlatforms: stateUpdater<Platform[] | undefined>) {
        this.platforms = platforms;
        this.setPlatformsInternal = setPlatforms;
    }

    public updatePlatform(platform: Platform) {
        this.setPlatformsInternal(prevState =>
            prevState?.map(p => p.id === platform.id ? {...p, name: platform.name, shortName: platform.shortName} : p)
                .sort(platformSortFunc)); //sort the platforms as order may have changed due to name changes
    }

    public deletePlatform(platform: Platform) {
        this.setPlatformsInternal(prevState => prevState?.filter(p => p.id !== platform.id));
    }

    public setPlatforms(editor: (prevState: Platform[] | undefined) => Platform[]) {
        this.setPlatformsInternal(editor);
    }
}

function platformSortFunc(a: Platform, b: Platform): number {
    return a.name.localeCompare(b.name);
}

export const PlatformsIndexContext = createContext<PlatformsIndexContextHandler>(undefined!);

export default function usePlatformsIndex() {
    return useContext(PlatformsIndexContext);
}
