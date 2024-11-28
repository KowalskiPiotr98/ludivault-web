import {useState} from "react";
import Game from "../../models/game.ts";
import {updateGame} from "../../requests/games.ts";

export function useGameEditor() {
    const [editing, setEditing] = useState(false);
    const [error, setError] = useState<string>();

    const editor = async (editGame: Game): Promise<Game | undefined> => {
        setEditing(true);
        setError(undefined);

        try {
            const {game, response} = await updateGame(editGame);
            if (game)
                return game;

            if (response.status === 400) {
                setError('Invalid data provided.');
                return undefined;
            }
            if (response.status === 404) {
                setError('Game could not be found.');
                return undefined;
            }

            throw "Unexpected response code received when updating a game";
        } finally {
            setEditing(false);
        }
    }

    return {editor, editing, error};
}
