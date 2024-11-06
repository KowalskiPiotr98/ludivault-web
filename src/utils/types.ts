export type stateUpdater<T> = (modifier: (prevState: T) => T) => void;
