import {useState} from "react";
import Note from "../../models/note.ts";
import {createNote} from "../../requests/notes.ts";

export function useNoteCreator() {
    const [creating, setCreating] = useState(false);
    const [error, setError] = useState<string>();

    const creator = async (newNote: Note): Promise<Note | undefined> => {
        setCreating(true);
        setError(undefined);

        try {
            const {note, response} = await createNote(newNote);
            if (note)
                return note;

            if (response.status === 400) {
                setError('Invalid data provided.');
                return undefined;
            }

            throw new Error("Unexpected response code received when creating note");
        } finally {
            setCreating(false);
        }
    }

    return {creator, creating, error};
}
