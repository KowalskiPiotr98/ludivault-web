import {useEffect, useState} from "react";
import runDebounced from "../../utils/debounce.ts";
import Playthrough from "../../models/playthrough.ts";
import {getPlaythroughsForGame} from "../../requests/playthroughs.ts";

export default function useGamePlaythroughs(gameId: string) {
    const [playthroughs, setPlaythroughs] = useState<Playthrough[]>(undefined!);
    const [error, setError] = useState<string>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        setError(undefined);

        const act = async () => {
            try {
                const {playthroughs} = await getPlaythroughsForGame(gameId);

                if (playthroughs === undefined) {
                    setError("Failed to load playthroughs");
                    setPlaythroughs(undefined!);
                    return;
                }

                setPlaythroughs(playthroughs);
            } finally {
                setLoading(false);
            }
        }

        return runDebounced(act);
    }, [gameId]);

    return {playthroughs, setPlaythroughs, loading, error};
}
