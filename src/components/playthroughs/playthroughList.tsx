import usePlaythroughsContext from "../../contexts/playthroughsContext.ts";
import PlaythroughCreator from "./playthroughCreator.tsx";

export default function PlaythroughList() {
    const playthroughs = usePlaythroughsContext();

    return <>
        <PlaythroughCreator/>
        {playthroughs.playthroughs.map(p => p.startDate.toLocaleString())}
    </>
}
