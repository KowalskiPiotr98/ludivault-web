export default class Playthrough {
    public id: string = '';
    public gameId: string = '';
    public startDate: Date = new Date();
    public endDate: Date | undefined;
    public status: PlaythroughStatus = PlaythroughStatus.InProgress;
    public runtime: number | undefined;
}

export enum PlaythroughStatus {
    InProgress,
    Completed,
    Dropped,
    Retired,
    Suspended,
}
