import {useEffect, useState} from "react";
import runDebounced from "../../utils/debounce.ts";
import Game from "../../models/game.ts";
import {getGames} from "../../requests/games.ts";

export default function useGames(offset: number, limit: number, title: string, owned: boolean | undefined, released: boolean | undefined, inProgress: boolean | undefined) {
    const [games, setGames] = useState<Game[] | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        const act = async () => {
            try {
                const {games} = await getGames(limit, offset, title, owned, released, inProgress);
                setGames(games);
            } finally {
                setLoading(false);
            }
        }

        return runDebounced(act);
    }, [limit, offset, title, owned, released, inProgress]);

    return {games, setGames, loading};
}
