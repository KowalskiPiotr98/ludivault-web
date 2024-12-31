import {createContext, useContext} from "react";
import CurrentUser from "../models/currentUser.ts";

export class CurrentUserContextHandler {
    public readonly currentUser: CurrentUser | undefined;

    private readonly refreshUserInternal: () => Promise<void>;

    constructor(currentUser: CurrentUser | undefined, refreshUser: () => Promise<void>) {
       this.currentUser = currentUser;
       this.refreshUserInternal = refreshUser;
    }

    public async refreshUser(): Promise<void> {
        await this.refreshUserInternal();
    }
}

export const CurrentUserContext = createContext<CurrentUserContextHandler>(undefined!);

export default function useCurrentUser() {
    return useContext(CurrentUserContext);
}
