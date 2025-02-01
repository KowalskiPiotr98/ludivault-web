import useGameDetailsContext from "../../../contexts/gameDetailsContext.ts";
import useNoteTitles from "../../../hooks/notes/useNoteTitles.ts";
import Loader from "../../common/loader.tsx";
import ErrorBar from "../../common/errorBar.tsx";
import {useMemo} from "react";
import {NotesContext, NotesContextHandler} from "../../../contexts/notesContext.ts";
import NotesList from "../../notes/notesList.tsx";

export default function GameNotesListLoader() {
    const game = useGameDetailsContext();
    const {notes, setNotes, loading, error} = useNoteTitles(game.game.id);

    const context = useMemo(() => loading || error ? undefined : new NotesContextHandler(game.game.id, notes, setNotes), [loading, error, game.game.id, notes, setNotes]);

    if (loading)
        return <Loader/>
    if (error)
        return <ErrorBar message={error}/>
    return <NotesContext.Provider value={context!}>
        <NotesList/>
    </NotesContext.Provider>
}
