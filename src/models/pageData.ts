export default class PageData {
    public current: number = 1;
    public size: number = 30;
    public isLast: boolean = false;

    public getOffset(): number {
        return (this.current - 1) * this.size;
    }
}
