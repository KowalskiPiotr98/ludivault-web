import usePlatformsIndex from "../../contexts/platformsIndexContext.ts";
import ErrorBar from "../common/errorBar.tsx";
import PlatformListItem from "./platformListItem.tsx";
import ListItems from "../common/lists/listItems.tsx";

export default function PlatformListItems() {
    const platforms = usePlatformsIndex();

    if (!platforms.items)
        return <ErrorBar message={"Failed to load platforms"}/>

    return <ListItems>
        {platforms.items.map(p => <PlatformListItem key={p.id} item={p}/>)}
    </ListItems>
}
