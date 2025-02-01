import useNotesContext from "../../contexts/notesContext.ts";
import {Box} from "@mui/material";
import ListItems from "../common/lists/listItems.tsx";
import NoteItem from "./noteItem.tsx";
import NoteCreator from "./noteCreator.tsx";

export default function NotesList() {
    const notes = useNotesContext();

    return <Box>
        <h4>Notes</h4>

        <ListItems>
            {notes.notes.map(note => <NoteItem key={note.id} noteTitle={note}/>)}
        </ListItems>
        <NoteCreator/>
    </Box>
}
