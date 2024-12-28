import usePlatforms from "../../hooks/platforms/usePlatforms.ts";
import {PlatformsIndexContext, PlatformsIndexContextHandler} from "../../contexts/platformsIndexContext.ts";
import PlatformListItems from "./platformListItems.tsx";
import Loader from "../common/loader.tsx";
import PlatformListCreator from "./platformListCreator.tsx";
import ListTopButtonRow from "../common/lists/listTopButtonRow.tsx";
import {useMemo} from "react";

export default function PlatformsList() {
    const {platforms, setPlatforms, loading} = usePlatforms();

    const context = useMemo(() => new PlatformsIndexContextHandler(platforms, setPlatforms), [platforms, setPlatforms]);

    if (loading)
        return <Loader/>
    return <PlatformsIndexContext.Provider value={context}>
        <ListTopButtonRow>
            <PlatformListCreator/>
        </ListTopButtonRow>
        <PlatformListItems/>
    </PlatformsIndexContext.Provider>
}
