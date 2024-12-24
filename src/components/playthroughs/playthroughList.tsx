import usePlaythroughsContext from "../../contexts/playthroughsContext.ts";
import PlaythroughCreator from "./playthroughCreator.tsx";
import PlaythroughItem from "./playthroughItem.tsx";
import ListItems from "../common/lists/listItems.tsx";
import {getPlaythroughStatusName, PlaythroughStatus} from "../../models/playthrough.ts";
import {Box} from "@mui/material";

export default function PlaythroughList() {
    const playthroughs = usePlaythroughsContext();
    const stateOrder = [
        PlaythroughStatus.InProgress,
        PlaythroughStatus.Completed,
        PlaythroughStatus.Dropped,
        PlaythroughStatus.Retired,
        PlaythroughStatus.Suspended,
    ]

    const lengthTotal = playthroughs.playthroughs.map(p => p.runtime ?? 0).reduce((a, b) => a + b, 0);

    return <Box>
        <h4>Playthroughs (total: {playthroughs.playthroughs.length}, time: {lengthTotal} minutes)</h4>
        {stateOrder.map(s => <Box key={s}>
            <h5>{getPlaythroughStatusName(s)}</h5>
            <ListItems>
                {playthroughs.playthroughs.filter(p => p.status === s).map(p => <PlaythroughItem key={p.id} playthrough={p}/>)}
            </ListItems>
        </Box>)}

        <PlaythroughCreator/>
    </Box>
}
