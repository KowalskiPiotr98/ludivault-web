import {useEffect, useState} from "react";
import runDebounced from "../../utils/debounce.ts";
import Note from "../../models/note.ts";
import {getNote} from "../../requests/notes.ts";

export default function useNote(id : string) {
    const [note, setNote] = useState<Note>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        const act = async () => {
            try {
                const {note} = await getNote(id);
                setNote(note);
            } finally {
                setLoading(false);
            }
        }

        return runDebounced(act);
    }, [id]);

    return {note, setNote, loading};
}
