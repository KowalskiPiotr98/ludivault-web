import {useState} from "react";
import Playthrough from "../../models/playthrough.ts";
import {createPlaythrough} from "../../requests/playthroughs.ts";

export function usePlaythroughCreator() {
    const [creating, setCreating] = useState(false);
    const [error, setError] = useState<string>();

    const creator = async (newPlaythrough: Playthrough): Promise<Playthrough | undefined> => {
        setCreating(true);
        setError(undefined);

        try {
            const {playthrough, response} = await createPlaythrough(newPlaythrough);
            if (playthrough)
                return playthrough;

            if (response.status === 400) {
                setError('Invalid data provided.');
                return undefined;
            }

            throw new Error("Unexpected response code received when creating playthrough");
        } finally {
            setCreating(false);
        }
    }

    return {creator, creating, error};
}
