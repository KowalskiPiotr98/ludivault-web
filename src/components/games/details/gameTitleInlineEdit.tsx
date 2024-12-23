import useGameDetailsContext from "../../../contexts/gameDetailsContext.ts";
import {useState} from "react";
import ValidatingForm from "../../common/validatingForm.tsx";
import {TextField} from "@mui/material";
import FormSaveButton from "../../common/buttons/formSaveButton.tsx";
import InlineStack from "../../common/inlineStack.tsx";

class PropTypes {
    resetEdit: () => void = undefined!;
}

export default function GameTitleInlineEdit({resetEdit}: PropTypes) {
    const game = useGameDetailsContext();
    const [title, setTitle] = useState(game.game.title);

    const handle = () => {
        game.setGame(prevState => ({...prevState!, title: title}))
        resetEdit();
    }

    return <>
        <ValidatingForm onValidSubmit={handle}>
            <InlineStack sx={{py: 2}}>
                <TextField label={"Title"} id={"game-title"} disabled={game.loading} type={"text"} value={title} slotProps={{htmlInput: {maxLength: 500}}} required onChange={e => setTitle(e.target.value)}/>
                <FormSaveButton/>
            </InlineStack>
        </ValidatingForm>
    </>
}
