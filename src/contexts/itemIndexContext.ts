import {stateUpdater} from "../utils/types.ts";

export abstract class ItemIndexContextHandler<T extends {id: string}> {
    public items: T[] | undefined;

    setItemsInternal: stateUpdater<T[] | undefined>;

    protected constructor(items: T[] | undefined, setItems: stateUpdater<T[] | undefined>) {
        this.items = items;
        this.setItemsInternal = setItems;
    }

    public updateItem(item: T) {
        this.setItemsInternal(prevState =>
            prevState?.map(p => p.id === item.id ? item : p));
    }

    public deleteItem(item: T) {
        this.setItemsInternal(prevState => prevState?.filter(p => p.id !== item.id));
    }

    public addItem(item: T) {
        this.setItemsInternal(prevState => [...prevState ?? [], item]);
    }

    public setItems(editor: (prevState: T[] | undefined) => T[]) {
        this.setItemsInternal(editor);
    }
}
