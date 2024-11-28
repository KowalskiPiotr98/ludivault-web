import PageTitleHeader from "../../common/pageTitleHeader.tsx";
import EditButton from "../../common/buttons/editButton.tsx";
import GameTitleInlineEdit from "./gameTitleInlineEdit.tsx";
import {useState} from "react";
import useGameDetailsContext from "../../../contexts/gameDetailsContext.ts";
import WrappableText from "../../common/text/wrappableText.tsx";

export default function GameDetailsHeader() {
    const game = useGameDetailsContext();
    const [edit, setEdit] = useState(false);

    return <>
        <PageTitleHeader>
            <div className={"grid grid-cols-10"}>
                <div className={"col-span-9"}>
                    <WrappableText text={game.game.title}/>
                </div>
                <div className={"content-center"}>
                    <EditButton onClick={() => setEdit(prevState => !prevState)}/>
                </div>
            </div>
            {edit && <GameTitleInlineEdit/>}
        </PageTitleHeader>
    </>
}
