import useNotesContext from "../../contexts/notesContext.ts";
import {useNoteCreator} from "../../hooks/notes/useNoteCreator.ts";
import {useState} from "react";
import Note, {getTypeName, NoteType} from "../../models/note.ts";
import {Box, Button, TextField} from "@mui/material";
import InlineStack from "../common/inlineStack.tsx";
import ValidatingForm from "../common/validatingForm.tsx";
import ErrorBar from "../common/errorBar.tsx";

export default function NoteCreator() {
    const notes = useNotesContext();
    const {creator, creating, error} = useNoteCreator();
    const [note, setNote] = useState(new Note(notes.gameId));

    const kinds = [NoteType.Link, NoteType.Text];

    const submit = async () => {
        const result = await creator(note);
        if (!result)
            return;

        notes.addNewNote(result);
        setNote(new Note(notes.gameId));
    }

    return <Box>
        <h5>New note</h5>
        {error && <ErrorBar message={error}/>}
        <ValidatingForm onValidSubmit={submit}>
            <TextField sx={{display: 'flex' , width: '100%', my: 2}} label={"Title"} placeholder={"Enter title here..."} required value={note.title} slotProps={{htmlInput: {maxLength: 100}}} onChange={e => setNote(prevState => ({...prevState, title: e.target.value}))}/>
            <InlineStack>
                {kinds.map(kind => <Button key={kind} onClick={() => setNote(prevState => ({...prevState, kind: kind}))} variant={note.kind === kind ? 'outlined' : 'text'}>{getTypeName(kind)}</Button> )}
            </InlineStack>
            <Box sx={{my: 2, display: 'flex'}}>
                {
                    note.kind === NoteType.Link && <TextField sx={{display: 'flex' , width: '100%'}} label={"Link"} placeholder={"Enter link here..."} required type={"url"} value={note.value} slotProps={{htmlInput: {maxLength: 10000}}} onChange={e => setNote(prevState => ({...prevState, value: e.target.value}))}/>
                }
                {
                    note.kind === NoteType.Text && <TextField multiline rows={Math.max(10, note.value.split("\n").length)} sx={{display: 'flex' , width: '100%'}} label={"Text"} placeholder={"Enter note here..."} required value={note.value} slotProps={{htmlInput: {maxLength: 10000}}} onChange={e => setNote(prevState => ({...prevState, value: e.target.value}))}/>
                }
            </Box>
            <Button type={'submit'} disabled={creating} variant={'contained'}>Create</Button>
        </ValidatingForm>
    </Box>
}
