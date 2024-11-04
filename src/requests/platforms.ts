import Platform from "../models/platform.ts";
import {deleteReq, get, post, put} from "../utils/requests.ts";

export async function getPlatforms(): Promise<{ platforms: Platform[] | undefined, response: Response }> {
    const response = await get("platforms");
    if (!response.ok)
        return {platforms: undefined, response};

    return {
        platforms: await response.json(),
        response,
    };
}

export async function getPlatform(id: string): Promise<{ platform: Platform | undefined, response: Response }> {
    const response = await get(`platforms/${id}`);
    if (!response.ok)
        return {platform: undefined, response};

    return {
        platform: await response.json(),
        response,
    };
}

export async function createPlatform(platform: Platform): Promise<{ platform: Platform | undefined, response: Response }> {
    const response = await post("platforms", platform);
    if (!response.ok)
        return {platform: undefined, response};

    return {
        platform: await response.json(),
        response,
    };
}

export async function updatePlatform(platform: Platform): Promise<{ platform: Platform | undefined, response: Response }> {
    const response = await put(`platforms/${platform.id}`, platform);
    if (!response.ok)
        return {platform: undefined, response};

    return {
        platform: await response.json(),
        response,
    };
}

export async function deletePlatform(platform: Platform): Promise<{ response: Response }> {
    const response = await deleteReq(`platforms/${platform.id}`);
    return {response};

}
