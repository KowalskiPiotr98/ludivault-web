import EditButton from "../../common/buttons/editButton.tsx";
import GameTitleInlineEdit from "./gameTitleInlineEdit.tsx";
import {useState} from "react";
import useGameDetailsContext from "../../../contexts/gameDetailsContext.ts";
import WrappableText from "../../common/text/wrappableText.tsx";
import InlineStack from "../../common/inlineStack.tsx";
import {Box} from "@mui/material";

export default function GameDetailsHeader() {
    const game = useGameDetailsContext();
    const [edit, setEdit] = useState(false);

    return <>
        <InlineStack>
            <Box sx={{width: "100%"}}>
                <h2>
                    {edit ?
                        <GameTitleInlineEdit resetEdit={() => setEdit(false)}/> :
                        <WrappableText text={game.game.title}/>
                    }
                </h2>
            </Box>
            <EditButton onClick={() => setEdit(prevState => !prevState)}/>
        </InlineStack>
    </>
}
