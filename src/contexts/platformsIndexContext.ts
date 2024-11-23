import {createContext, useContext} from "react";
import Platform from "../models/platform.ts";
import {stateUpdater} from "../utils/types.ts";
import {ItemIndexContextHandler} from "./itemIndexContext.ts";

export class PlatformsIndexContextHandler extends ItemIndexContextHandler<Platform> {
    constructor(platforms: Platform[] | undefined, setPlatforms: stateUpdater<Platform[] | undefined>) {
        super(platforms, setPlatforms);
    }

    public override updateItem(item: Platform) {
        super.updateItem(item);
        this.sortPlatforms();
    }

    public override addItem(item: Platform) {
        super.addItem(item);
        this.sortPlatforms();
    }

    sortPlatforms() {
        this.setItems(prevState => prevState?.sort(platformSortFunc) ?? []);
    }
}

function platformSortFunc(a: Platform, b: Platform): number {
    return a.name.localeCompare(b.name);
}

export const PlatformsIndexContext = createContext<PlatformsIndexContextHandler>(undefined!);

export default function usePlatformsIndex() {
    return useContext(PlatformsIndexContext);
}
