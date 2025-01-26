import {useState} from "react";
import Note from "../../models/note.ts";
import {deleteNote} from "../../requests/notes.ts";

export function useNoteRemover() {
    const [removing, setRemoving] = useState(false);
    const [error, setError] = useState<string>();

    const remover = async (note: Note): Promise<string | undefined> => {
        setRemoving(true);
        setError(undefined);

        try {
            const {response} = await deleteNote(note);
            if (response.ok)
                return undefined;

            if (response.status === 404) {
                const tempError = "Note not found.";
                setError(tempError);
                return tempError;
            }

            throw new Error("Unexpected response code received when removing a note");
        } finally {
            setRemoving(false);
        }
    }

    return {remover, removing, error};
}
