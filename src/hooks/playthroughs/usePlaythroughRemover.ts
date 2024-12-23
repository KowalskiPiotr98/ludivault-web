import {useState} from "react";
import Playthrough from "../../models/playthrough.ts";
import {deletePlaythrough} from "../../requests/playthroughs.ts";

export function usePlaythroughRemover() {
    const [removing, setRemoving] = useState(false);
    const [error, setError] = useState<string>();

    const remover = async (playthrough: Playthrough): Promise<string | undefined> => {
        setRemoving(true);
        setError(undefined);

        try {
            const {response} = await deletePlaythrough(playthrough);
            if (response.ok)
                return undefined;

            if (response.status === 404) {
                const tempError = "Playthrough not found.";
                setError(tempError);
                return tempError;
            }

            throw "Unexpected response code received when removing a playthrough";
        } finally {
            setRemoving(false);
        }
    }

    return {remover, removing, error};
}
