import usePlaythroughsContext from "../../contexts/playthroughsContext.ts";
import PlaythroughCreator from "./playthroughCreator.tsx";
import PlaythroughItem from "./playthroughItem.tsx";

export default function PlaythroughList() {
    const playthroughs = usePlaythroughsContext();

    return <>
        {playthroughs.playthroughs.map(p => <PlaythroughItem key={p.id} playthrough={p}/>)}
        <PlaythroughCreator/>
    </>
}
