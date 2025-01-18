export default class Note {
    public id: string = "";
    public gameId: string = "";
    public title: string = "";
    public value: string = "";
    public kind: NoteType = 0;
    public addedOn: Date = new Date();
    public pinned: boolean = false;
}

export enum NoteType {
    Text,
    Link,
}
