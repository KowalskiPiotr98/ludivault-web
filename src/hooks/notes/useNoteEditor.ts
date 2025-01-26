import {useState} from "react";
import {updateNote} from "../../requests/notes.ts";
import Note from "../../models/note.ts";

export function useNoteEditor() {
    const [editing, setEditing] = useState(false);
    const [error, setError] = useState<string>();

    const editor = async (editNote: Note): Promise<Note | undefined> => {
        setEditing(true);
        setError(undefined);

        try {
            const {note, response} = await updateNote(editNote);
            if (note)
                return note;

            if (response.status === 400) {
                setError('Invalid data provided.');
                return undefined;
            }
            if (response.status === 404) {
                setError('Note could not be found.');
                return undefined;
            }

            throw new Error("Unexpected response code received when updating a note");
        } finally {
            setEditing(false);
        }
    }

    return {editor, editing, error};
}
