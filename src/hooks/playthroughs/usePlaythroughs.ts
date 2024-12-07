import {useEffect, useState} from "react";
import runDebounced from "../../utils/debounce.ts";
import Playthrough from "../../models/playthrough.ts";
import {getPlaythroughs} from "../../requests/playthroughs.ts";

export default function usePlaythroughs(gameId: string | undefined) {
    const [playthroughs, setPlaythroughs] = useState<Playthrough[] | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        const act = async () => {
            try {
                const {playthroughs} = await getPlaythroughs(gameId);
                setPlaythroughs(playthroughs);
            } finally {
                setLoading(false);
            }
        }

        return runDebounced(act);
    }, [gameId]);

    return {playthroughs, setPlaythroughs, loading};
}
