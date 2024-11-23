import Game from "../../models/game.ts";
import {stateUpdater} from "../../utils/types.ts";
import PageTitleHeader from "../common/pageTitleHeader.tsx";

class PropTypes {
    game: Game = undefined!;
    setGame: stateUpdater<Game | undefined> = undefined!;
}

export default function GameDetails({game, setGame}: PropTypes) {
    return <>
        <PageTitleHeader>{game.title}</PageTitleHeader>
    </>
}
