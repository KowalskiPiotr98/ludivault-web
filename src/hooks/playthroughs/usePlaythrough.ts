import {useEffect, useState} from "react";
import runDebounced from "../../utils/debounce.ts";
import Playthrough from "../../models/playthrough.ts";
import {getPlaythrough} from "../../requests/playthroughs.ts";

export default function usePlaythrough(id : string) {
    const [playthrough, setPlaythrough] = useState<Playthrough>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        const act = async () => {
            try {
                const {playthrough} = await getPlaythrough(id);
                setPlaythrough(playthrough);
            } finally {
                setLoading(false);
            }
        }

        return runDebounced(act);
    }, [id]);

    return {playthrough, setPlaythrough, loading};
}
