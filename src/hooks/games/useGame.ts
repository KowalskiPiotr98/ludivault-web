import {useEffect, useState} from "react";
import runDebounced from "../../utils/debounce.ts";
import Game from "../../models/game.ts";
import {getGame} from "../../requests/games.ts";

export default function useGame(id : string) {
    const [game, setGame] = useState<Game>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        const act = async () => {
            try {
                const {game} = await getGame(id);
                setGame(game);
            } finally {
                setLoading(false);
            }
        }

        return runDebounced(act);
    }, [id]);

    return {game, loading};
}
