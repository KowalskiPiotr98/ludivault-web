import {useState} from "react";
import Playthrough from "../../models/playthrough.ts";
import {updatePlaythrough} from "../../requests/playthroughs.ts";

export function usePlaythroughEditor() {
    const [editing, setEditing] = useState(false);
    const [error, setError] = useState<string>();

    const editor = async (editPlaythrough: Playthrough): Promise<Playthrough | undefined> => {
        setEditing(true);
        setError(undefined);

        try {
            const {playthrough, response} = await updatePlaythrough(editPlaythrough);
            if (playthrough)
                return playthrough;

            if (response.status === 400) {
                setError('Invalid data provided.');
                return undefined;
            }
            if (response.status === 404) {
                setError('Playthrough could not be found.');
                return undefined;
            }

            throw "Unexpected response code received when updating a game";
        } finally {
            setEditing(false);
        }
    }

    return {editor, editing, error};
}
