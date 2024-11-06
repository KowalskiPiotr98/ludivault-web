import usePlatforms from "../../hooks/platforms/usePlatforms.ts";
import {PlatformsIndexContext, PlatformsIndexContextHandler} from "../../contexts/platformsIndexContext.ts";
import PlatformListItems from "./platformListItems.tsx";

export default function PlatformsList() {
    const {platforms, setPlatforms, loading} = usePlatforms();

    return <PlatformsIndexContext.Provider value={new PlatformsIndexContextHandler(platforms, loading, setPlatforms)}>
        <PlatformListItems/>
    </PlatformsIndexContext.Provider>
}
