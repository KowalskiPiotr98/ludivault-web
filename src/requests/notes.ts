import {deleteReq, get, post, put} from "../utils/requests.ts";
import Playthrough, {playthroughSorter} from "../models/playthrough.ts";
import Note from "../models/note.ts";

export async function getNoteTitles(gameId: string): Promise<{ notes: Note[] | undefined, response: Response }> {
    const response = await get(`games/${gameId}/notes`);
    if (!response.ok)
        return {notes: undefined, response};

    const tempNotes: Note[] = await response.json();
    return {
        notes: tempNotes.map(parseNoteFromJson).sort(playthroughSorter),
        response,
    };
}

export async function getNote(id: string): Promise<{ note: Note | undefined, response: Response }> {
    const response = await get(`notes/${id}`);
    if (!response.ok)
        return {note: undefined, response};

    return {
        note: await parseNoteFromResponse(response),
        response,
    };
}

export async function createNote(note: Note): Promise<{ note: Note | undefined, response: Response }> {
    const response = await post("notes", note);
    if (!response.ok)
        return {note: undefined, response};

    return {
        note: await parseNoteFromResponse(response),
        response,
    };
}

export async function updateNote(note: Note): Promise<{ note: Note | undefined, response: Response }> {
    const response = await put(`notes/${note.id}`, note);
    if (!response.ok)
        return {note: undefined, response};

    return {
        note: await parseNoteFromResponse(response),
        response,
    };
}

export async function deleteNote(note: Note): Promise<{ response: Response }> {
    const response = await deleteReq(`notes/${note.id}`);
    return {response};

}

async function parseNoteFromResponse(response: Response): Promise<Note> {
    const value = await response.json();
    return parseNoteFromJson(value);
}

function parseNoteFromJson(value: any): Note {
    return {
        ...value,
        addedOn: value.addedOn ? new Date(Date.parse(value.addedOn)) : undefined,
    };
}
