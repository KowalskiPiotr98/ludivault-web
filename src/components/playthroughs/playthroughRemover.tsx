import Playthrough from "../../models/playthrough.ts";
import {usePlaythroughRemover} from "../../hooks/playthroughs/usePlaythroughRemover.ts";
import DeleteButton from "../common/buttons/deleteButton.tsx";
import usePlaythroughsContext from "../../contexts/playthroughsContext.ts";

class PropTypes {
    playthrough: Playthrough = undefined!;
}

export default function PlaythroughRemover({playthrough}: PropTypes) {
    const {remover, removing} = usePlaythroughRemover();
    const playthroughs = usePlaythroughsContext();

    const handle = async () => {
        const response = await remover(playthrough);
        if (response) {
            alert(response);
            return;
        }

        playthroughs.removePlaythrough(playthrough);
    }

    return <DeleteButton onTrigger={handle} disabled={removing}/>
}
