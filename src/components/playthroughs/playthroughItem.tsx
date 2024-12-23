import Playthrough from "../../models/playthrough.ts";
import PlaythroughRemover from "./playthroughRemover.tsx";

class PropTypes {
    playthrough: Playthrough = undefined!;
}

export default function PlaythroughItem({playthrough}: PropTypes) {
    return <div>
        {playthrough.startDate.toLocaleString()}-{playthrough.endDate?.toLocaleString()}
        <PlaythroughRemover playthrough={playthrough}/>
    </div>
}
