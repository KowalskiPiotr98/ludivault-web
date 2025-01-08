import {deleteReq, get, post, put} from "../utils/requests.ts";
import Game from "../models/game.ts";

export async function getGames(limit: number, offset: number, title: string, owned: boolean | undefined, released: boolean | undefined, inProgress: boolean | undefined): Promise<{ games: Game[] | undefined, response: Response }> {
    const response = await get("games",
        {name: "limit", value: limit.toFixed()},
        {name: "offset", value: offset.toFixed()},
        {name: "title", value: title},
        {name: "owned", value: owned?.toString()},
        {name: "released", value: released?.toString()},
        {name: "inProgress", value: inProgress?.toString()},
        );
    if (!response.ok)
        return {games: undefined, response};

    const tempGames = await response.json();
    return {
        games: tempGames.map(parseGameFromJson),
        response,
    };
}

export async function getGame(id: string): Promise<{ game: Game | undefined, response: Response }> {
    const response = await get(`games/${id}`);
    if (!response.ok)
        return {game: undefined, response};

    return {
        game: await parseGameFromResponse(response),
        response,
    };
}

export async function createGame(game: Game): Promise<{ game: Game | undefined, response: Response }> {
    const response = await post("games", game);
    if (!response.ok)
        return {game: undefined, response};

    return {
        game: await parseGameFromResponse(response),
        response,
    };
}

export async function updateGame(game: Game): Promise<{ game: Game | undefined, response: Response }> {
    const response = await put(`games/${game.id}`, game);
    if (!response.ok)
        return {game: undefined, response};

    return {
        game: await parseGameFromResponse(response),
        response,
    };
}

export async function deleteGame(game: Game): Promise<{ response: Response }> {
    const response = await deleteReq(`games/${game.id}`);
    return {response};

}

async function parseGameFromResponse(response: Response): Promise<Game> {
    const value = await response.json();
    return parseGameFromJson(value);
}

function parseGameFromJson(value: any): Game {
    return {...value, releaseDate: value.releaseDate ? new Date(Date.parse(value.releaseDate)) : undefined};
}
