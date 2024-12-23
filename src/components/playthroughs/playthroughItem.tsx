import Playthrough from "../../models/playthrough.ts";
import PlaythroughRemover from "./playthroughRemover.tsx";
import ListItem from "../common/lists/listItem.tsx";
import ListItemBody from "../common/lists/listItemBody.tsx";
import ListItemMenu from "../common/lists/listItemMenu.tsx";

class PropTypes {
    playthrough: Playthrough = undefined!;
}

export default function PlaythroughItem({playthrough}: PropTypes) {
    //todo: there should be a button to just add a number of minutes to current playtime
    return <ListItem>
        <ListItemBody>
            {playthrough.startDate.toLocaleString()}-{playthrough.endDate?.toLocaleString() ?? 'INCOMPLETE'}
            <span> ({playthrough.runtime ?? '0'} min)</span>
        </ListItemBody>
        <ListItemMenu>
            <PlaythroughRemover playthrough={playthrough}/>
        </ListItemMenu>
    </ListItem>
}
