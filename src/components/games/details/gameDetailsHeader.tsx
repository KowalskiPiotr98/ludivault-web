import EditButton from "../../common/buttons/editButton.tsx";
import GameTitleInlineEdit from "./gameTitleInlineEdit.tsx";
import {useState} from "react";
import useGameDetailsContext from "../../../contexts/gameDetailsContext.ts";
import WrappableText from "../../common/text/wrappableText.tsx";

export default function GameDetailsHeader() {
    const game = useGameDetailsContext();
    const [edit, setEdit] = useState(false);

    return <>
        <div>
            <div>
                <WrappableText text={game.game.title}/>
            </div>
            <div>
                <EditButton onClick={() => setEdit(prevState => !prevState)}/>
            </div>
        </div>
        {edit && <GameTitleInlineEdit/>}
    </>
}
