import Playthrough from "../../models/playthrough.ts";
import PlaythroughRemover from "./playthroughRemover.tsx";
import ListItem from "../common/lists/listItem.tsx";
import ListItemBody from "../common/lists/listItemBody.tsx";
import ListItemMenu from "../common/lists/listItemMenu.tsx";
import PlaythroughTimeAdder from "./playthroughTimeAdder.tsx";
import PlaythroughEditor from "./playthroughEditor.tsx";

class PropTypes {
    playthrough: Playthrough = undefined!;
}

export default function PlaythroughItem({playthrough}: Readonly<PropTypes>) {
    return <ListItem>
        <ListItemBody>
            {playthrough.startDate.toLocaleString()}-{playthrough.endDate?.toLocaleString() ?? 'INCOMPLETE'}
            <span> ({playthrough.runtime ?? '0'} min)</span>
        </ListItemBody>
        <ListItemMenu>
            <PlaythroughTimeAdder playthrough={playthrough}/>
            <PlaythroughEditor playthrough={playthrough}/>
            <PlaythroughRemover playthrough={playthrough}/>
        </ListItemMenu>
    </ListItem>
}
