import {Dispatch, SetStateAction} from "react";

export type stateUpdater<T> = Dispatch<SetStateAction<T>>;
