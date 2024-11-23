export default class PageData {
    public current: number = 1;
    public size: number = 30;
    public isLast: boolean = false;
}

export function getOffset(pageData: PageData): number {
    return (pageData.current - 1) * pageData.size;
}
