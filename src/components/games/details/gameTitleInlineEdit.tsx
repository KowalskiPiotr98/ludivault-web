import useGameDetailsContext from "../../../contexts/gameDetailsContext.ts";
import {useState} from "react";
import ValidatingForm from "../../common/validatingForm.tsx";
import {Button, TextField} from "@mui/material";

export default function GameTitleInlineEdit() {
    const game = useGameDetailsContext();
    const [title, setTitle] = useState(game.game.title);

    return <>
        <ValidatingForm onValidSubmit={() => game.setGame(prevState => ({...prevState!, title: title}))}>
            <div>
                <TextField id={"game-title"} disabled={game.loading} type={"text"} value={title} slotProps={{htmlInput: {maxLength: 500}}} required onChange={e => setTitle(e.target.value)}/>
                <Button type={"submit"}>Save</Button>
            </div>
        </ValidatingForm>
    </>
}
