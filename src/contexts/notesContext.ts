import {stateUpdater} from "../utils/types.ts";
import {createContext, useContext} from "react";
import Note from "../models/note.ts";

export class NotesContextHandler {
    public notes: Note[];
    public readonly gameId: string;

    private readonly setNotesInternal: stateUpdater<Note[]>;

    constructor(gameId: string, notes: Note[], setNotes: stateUpdater<Note[]>) {
        this.gameId = gameId;
        this.notes = notes;
        this.setNotesInternal = setNotes;
    }

    public addNewNote(note: Note) {
        this.setNotesInternal(prevState => [...prevState, note]);
    }

    public updateNote(note: Note) {
        this.setNotesInternal(prevState => prevState.map(p => p.id === note.id ? note : p));
    }

    public removeNote(note: Note) {
        this.setNotesInternal(prevState => prevState.filter(p => p.id !== note.id));
    }
}

export const NotesContext = createContext<NotesContextHandler>(undefined!);

export default function useNotesContext() {
    return useContext(NotesContext);
}
