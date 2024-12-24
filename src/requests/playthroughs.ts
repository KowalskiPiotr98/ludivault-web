import {deleteReq, get, post, put} from "../utils/requests.ts";
import Playthrough, {playthroughSorter} from "../models/playthrough.ts";

export async function getPlaythroughs(gameId: string | undefined): Promise<{ playthroughs: Playthrough[] | undefined, response: Response }> {
    const response = await get(`playthroughs`, {name: "gameId", value: gameId});
    if (!response.ok)
        return {playthroughs: undefined, response};

    const tempPlaythroughs = await response.json();
    return {
        playthroughs: tempPlaythroughs.map(parsePlaythroughFromJson).sort(playthroughSorter),
        response,
    };
}

export async function getPlaythroughsForGame(gameId: string): Promise<{ playthroughs: Playthrough[] | undefined, response: Response }> {
    const response = await get(`games/${gameId}/playthroughs`);
    if (!response.ok)
        return {playthroughs: undefined, response};

    const tempPlaythroughs: Playthrough[] = await response.json();
    return {
        playthroughs: tempPlaythroughs.map(parsePlaythroughFromJson).sort(playthroughSorter),
        response,
    };
}

export async function getPlaythrough(id: string): Promise<{ playthrough: Playthrough | undefined, response: Response }> {
    const response = await get(`playthroughs/${id}`);
    if (!response.ok)
        return {playthrough: undefined, response};

    return {
        playthrough: await parsePlaythroughFromResponse(response),
        response,
    };
}

export async function createPlaythrough(playthrough: Playthrough): Promise<{ playthrough: Playthrough | undefined, response: Response }> {
    const response = await post("playthroughs", playthrough);
    if (!response.ok)
        return {playthrough: undefined, response};

    return {
        playthrough: await parsePlaythroughFromResponse(response),
        response,
    };
}

export async function updatePlaythrough(playthrough: Playthrough): Promise<{ playthrough: Playthrough | undefined, response: Response }> {
    const response = await put(`playthroughs/${playthrough.id}`, playthrough);
    if (!response.ok)
        return {playthrough: undefined, response};

    return {
        playthrough: await parsePlaythroughFromResponse(response),
        response,
    };
}

export async function deletePlaythrough(playthrough: Playthrough): Promise<{ response: Response }> {
    const response = await deleteReq(`playthroughs/${playthrough.id}`);
    return {response};

}

async function parsePlaythroughFromResponse(response: Response): Promise<Playthrough> {
    const value = await response.json();
    return parsePlaythroughFromJson(value);
}

function parsePlaythroughFromJson(value: any): Playthrough {
    return {
        ...value,
        startDate: value.startDate ? new Date(Date.parse(value.startDate)) : undefined,
        endDate: value.endDate ? new Date(Date.parse(value.endDate)) : undefined,
    };
}
