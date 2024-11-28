import {stateUpdater} from "../utils/types.ts";
import {createContext, useContext} from "react";
import PageData from "../models/pageData.ts";

export class PaginationContextHandler {
    public data: PageData;

    setData: stateUpdater<PageData>;

    constructor(data: PageData, setData: stateUpdater<PageData>) {
        this.data = data;
        this.setData = setData;
    }

    public goToPrevious() {
        if (this.data.current === 1)
            return;

        this.goToPage(this.data.current - 1);
    }

    public goToNext() {
        if (this.data.isLast)
            return;

        this.goToPage(this.data.current + 1);
    }

    public goToPage(page: number): void {
        if (page < 1)
            page = 1;

        this.setData(prevState => ({...prevState, current: page}));
    }
}

export const PaginationContext = createContext<PaginationContextHandler>(undefined!);

export default function usePaginationContext() {
    return useContext(PaginationContext);
}
