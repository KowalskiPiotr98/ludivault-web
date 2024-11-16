import {useState} from "react";
import {createGame} from "../../requests/games.ts";
import Game from "../../models/game.ts";

export function useGameCreator() {
    const [creating, setCreating] = useState(false);
    const [error, setError] = useState<string>();

    const creator = async (newGame: Game): Promise<Game | undefined> => {
        setCreating(true);
        setError(undefined);

        try {
            const {game, response} = await createGame(newGame);
            if (game)
                return game;

            if (response.status === 400) {
                setError('Invalid data provided.');
                return undefined;
            }

            throw "Unexpected response code received when creating game";
        } finally {
            setCreating(false);
        }
    }

    return {creator, creating, error};
}
