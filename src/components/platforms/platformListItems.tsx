import usePlatformsIndex from "../../contexts/platformsIndexContext.ts";
import ErrorBar from "../common/errorBar.tsx";
import PlatformListItem from "./platformListItem.tsx";

export default function PlatformListItems() {
    const platforms = usePlatformsIndex();

    if (!platforms.platforms)
        return <ErrorBar message={"Failed to load platforms"}/>

    return <>
        {platforms.platforms.map(p => <PlatformListItem key={p.id} item={p}/>)}
    </>
}
