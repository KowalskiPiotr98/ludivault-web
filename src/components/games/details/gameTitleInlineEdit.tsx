import useGameDetailsContext from "../../../contexts/gameDetailsContext.ts";
import {useState} from "react";
import ValidatingForm from "../../common/validatingForm.tsx";
import {Button, Input} from "@headlessui/react";
import {useGameEditor} from "../../../hooks/games/useGameEditor.ts";
import ErrorBar from "../../common/errorBar.tsx";

export default function GameTitleInlineEdit() {
    const game = useGameDetailsContext();
    const {editing, error, editor} = useGameEditor();
    const [title, setTitle] = useState(game.game.title);

    const handleTitleUpdate = async () => {
        const response = await editor({...game.game, title: title});
        if (!response)
            return;

        game.setGame(prevState => ({...prevState!, title: response.title}));
        setTitle(response.title);
    }

    return <>
        {error && <ErrorBar message={error}/>}
        <ValidatingForm onValidSubmit={handleTitleUpdate}>
            <div className={"flex p-2"}>
                <Input id={"game-title"} disabled={editing} type={"text"} className={"input w-full me-2"} value={title} maxLength={500} required onChange={e => setTitle(e.target.value)}/>
                <Button type={"submit"} className={"button-main"}>Save</Button>
            </div>
        </ValidatingForm>
    </>
}
