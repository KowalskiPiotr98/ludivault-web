import useGameDetailsContext from "../../../contexts/gameDetailsContext.ts";
import {useState} from "react";
import ValidatingForm from "../../common/validatingForm.tsx";
import {TextField} from "@mui/material";
import FormSaveButton from "../../common/buttons/formSaveButton.tsx";
import InlineStack from "../../common/inlineStack.tsx";
import WrappableText from "../../common/text/wrappableText.tsx";
import EditButton from "../../common/buttons/editButton.tsx";
import FormCancelButton from "../../common/buttons/formCancelButton.tsx";

export default function GameTitleInlineEdit() {
    const game = useGameDetailsContext();
    const [title, setTitle] = useState(game.game.title);
    const [edit, setEdit] = useState(false);

    const handle = () => {
        game.setGame(prevState => ({...prevState!, title: title}))
        setEdit(false);
    }

    const cancel = () => {
        setTitle(game.game.title);
        setEdit(false);
    }

    return <>
        <ValidatingForm onValidSubmit={handle}>
            <InlineStack sx={{py: 2}}>
                {
                    edit ?
                        <>
                            <TextField sx={{width: "100%"}} label={"Title"} id={"game-title"} disabled={game.loading} type={"text"} value={title} slotProps={{htmlInput: {maxLength: 500}}} required onChange={e => setTitle(e.target.value)}/>
                            <FormCancelButton onClick={cancel}/>
                            <FormSaveButton/>
                        </> :
                        <>
                            <WrappableText sx={{width: "100%"}} text={game.game.title}/>
                            <EditButton onClick={() => setEdit(prevState => !prevState)}/>
                        </>
                }
            </InlineStack>
        </ValidatingForm>
    </>
}
