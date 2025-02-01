export default class Note {
    public id: string = "";
    public gameId: string = "";
    public title: string = "";
    public value: string = "";
    public kind: NoteType = 0;
    public addedOn: Date = new Date();
    public pinned: boolean = false;

    constructor(gameId: string) {
        this.gameId = gameId;
    }
}

export enum NoteType {
    Text,
    Link,
}

export function getTypeName(noteType: NoteType): string {
    switch (noteType) {
        case NoteType.Text:
            return "Text";
        case NoteType.Link:
            return "Link";
        default:
            return "";
    }
}
