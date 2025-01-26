import {useEffect, useState} from "react";
import runDebounced from "../../utils/debounce.ts";
import Note from "../../models/note.ts";
import {getNoteTitles} from "../../requests/notes.ts";

export default function useNoteTitles(gameId: string) {
    const [notes, setNotes] = useState<Note[]>(undefined!);
    const [error, setError] = useState<string>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        setError(undefined);

        const act = async () => {
            try {
                const {notes} = await getNoteTitles(gameId);

                if (notes === undefined) {
                    setError("Failed to load notes");
                    setNotes(undefined!);
                    return;
                }

                setNotes(notes);
            } finally {
                setLoading(false);
            }
        }

        return runDebounced(act);
    }, [gameId]);

    return {notes, setNotes, loading, error};
}
