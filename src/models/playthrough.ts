export default class Playthrough {
    public id: string = '';
    public gameId: string = '';
    public startDate: Date = new Date();
    public endDate: Date | undefined;
    public status: PlaythroughStatus = PlaythroughStatus.InProgress;
    public runtime: number | undefined;

    constructor(gameId: string) {
        this.gameId = gameId;
        this.startDate.setSeconds(0);
    }
}

export enum PlaythroughStatus {
    InProgress,
    Completed,
    Dropped,
    Retired,
    Suspended,
}

export const playthroughSorter = (a: Playthrough, b: Playthrough) => b.startDate.valueOf() - a.startDate.valueOf();

export function getPlaythroughStatusName(status: PlaythroughStatus): string {
    switch (status) {
        case PlaythroughStatus.InProgress:
            return 'In Progress';
        case PlaythroughStatus.Completed:
            return 'Completed';
        case PlaythroughStatus.Dropped:
            return 'Dropped';
        case PlaythroughStatus.Retired:
            return 'Retired';
        case PlaythroughStatus.Suspended:
            return 'Suspended';
    }
}
