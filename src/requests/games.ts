import {deleteReq, get, post, put} from "../utils/requests.ts";
import Game from "../models/game.ts";

export async function getGames(limit: number, offset: number): Promise<{ games: Game[] | undefined, response: Response }> {
    const response = await get("games", {name: "limit", value: limit.toFixed()}, {name: "offset", value: offset.toFixed()});
    if (!response.ok)
        return {games: undefined, response};

    return {
        games: await response.json(),
        response,
    };
}

export async function getGame(id: string): Promise<{ game: Game | undefined, response: Response }> {
    const response = await get(`games/${id}`);
    if (!response.ok)
        return {game: undefined, response};

    return {
        game: await response.json(),
        response,
    };
}

export async function createGame(game: Game): Promise<{ game: Game | undefined, response: Response }> {
    const response = await post("games", game);
    if (!response.ok)
        return {game: undefined, response};

    return {
        game: await response.json(),
        response,
    };
}

export async function updateGame(game: Game): Promise<{ game: Game | undefined, response: Response }> {
    const response = await put(`games/${game.id}`, game);
    if (!response.ok)
        return {game: undefined, response};

    return {
        game: await response.json(),
        response,
    };
}

export async function deleteGame(game: Game): Promise<{ response: Response }> {
    const response = await deleteReq(`games/${game.id}`);
    return {response};

}
