import {useState} from "react";
import Game from "../../models/game.ts";
import {deleteGame} from "../../requests/games.ts";

export function useGameRemover() {
    const [removing, setRemoving] = useState(false);
    const [error, setError] = useState<string>();

    const remover = async (game: Game): Promise<string | undefined> => {
        setRemoving(true);
        setError(undefined);

        try {
            const {response} = await deleteGame(game);
            if (response.ok)
                return undefined;

            if (response.status === 404) {
                const tempError = "Game not found.";
                setError(tempError);
                return tempError;
            }

            throw new Error("Unexpected response code received when removing a game");
        } finally {
            setRemoving(false);
        }
    }

    return {remover, removing, error};
}
