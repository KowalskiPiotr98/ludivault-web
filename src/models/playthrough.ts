export default class Playthrough {
    public id: string = '';
    public gameId: string = '';
    public startDate: Date = new Date();
    public endDate: Date | undefined;
    public status: PlaythroughStatus = PlaythroughStatus.InProgress;
    public runtime: number | undefined;

    constructor(gameId: string) {
        this.gameId = gameId;
    }
}

export enum PlaythroughStatus {
    InProgress,
    Completed,
    Dropped,
    Retired,
    Suspended,
}
