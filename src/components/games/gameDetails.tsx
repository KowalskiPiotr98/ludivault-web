import PageTitleHeader from "../common/pageTitleHeader.tsx";
import useGameDetailsContext from "../../contexts/gameDetailsContext.ts";

export default function GameDetails() {
    const game = useGameDetailsContext();

    return <>
        <PageTitleHeader>{game.game.title}</PageTitleHeader>
    </>
}
