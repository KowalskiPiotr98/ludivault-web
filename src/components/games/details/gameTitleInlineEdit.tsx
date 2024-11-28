import useGameDetailsContext from "../../../contexts/gameDetailsContext.ts";
import {useState} from "react";
import ValidatingForm from "../../common/validatingForm.tsx";
import {Button, Input} from "@headlessui/react";

export default function GameTitleInlineEdit() {
    const game = useGameDetailsContext();
    const [title, setTitle] = useState(game.game.title);

    return <>
        <ValidatingForm onValidSubmit={() => game.setGame(prevState => ({...prevState!, title: title}))}>
            <div className={"flex p-2"}>
                <Input id={"game-title"} disabled={game.loading} type={"text"} className={"input w-full me-2"} value={title} maxLength={500} required onChange={e => setTitle(e.target.value)}/>
                <Button type={"submit"} className={"button-main"}>Save</Button>
            </div>
        </ValidatingForm>
    </>
}
