import usePlatforms from "../../hooks/platforms/usePlatforms.ts";
import {PlatformsIndexContext, PlatformsIndexContextHandler} from "../../contexts/platformsIndexContext.ts";
import PlatformListItems from "./platformListItems.tsx";
import Loader from "../common/loader.tsx";

export default function PlatformsList() {
    const {platforms, setPlatforms, loading} = usePlatforms();

    if (loading)
        return <Loader/>
    return <PlatformsIndexContext.Provider value={new PlatformsIndexContextHandler(platforms, setPlatforms)}>
        <PlatformListItems/>
    </PlatformsIndexContext.Provider>
}
