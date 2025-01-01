import CurrentUser from "../models/currentUser.ts";
import {get} from "../utils/requests.ts";

export async function getMe(): Promise<CurrentUser | undefined> {
    const response = await get("auth/me");
    if (!response.ok)
        return undefined;

    return await response.json();
}

export async function getProviders(): Promise<string[]> {
    const response = await get("auth/providers");
    if (!response.ok)
        return [];
    return await response.json();
}
