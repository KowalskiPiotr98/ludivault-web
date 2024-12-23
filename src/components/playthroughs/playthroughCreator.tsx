import Playthrough from "../../models/playthrough.ts";
import usePlaythroughsContext from "../../contexts/playthroughsContext.ts";
import {useState} from "react";
import PlaythroughFields from "./playthroughFields.tsx";
import useGameDetailsContext from "../../contexts/gameDetailsContext.ts";
import {usePlaythroughCreator} from "../../hooks/playthroughs/usePlaythroughCreator.ts";
import ValidatingForm from "../common/validatingForm.tsx";
import ErrorBar from "../common/errorBar.tsx";
import {Button, FormGroup} from "@mui/material";

export default function PlaythroughCreator() {
    const playthroughs = usePlaythroughsContext();
    const game = useGameDetailsContext();
    const {creator, creating, error} = usePlaythroughCreator();
    const [newPlaythrough, setNewPlaythrough] = useState<Playthrough>(new Playthrough(game.game.id));

    const handle = async () => {
        const response = await creator(newPlaythrough);
        if (!response)
            return;

        setNewPlaythrough(new Playthrough(game.game.id));
        playthroughs.setPlaythroughs(prevState => ([newPlaythrough, ...prevState]));
    }

    return <div>
        {error && <ErrorBar message={error}/>}
        <ValidatingForm onValidSubmit={handle}>
            <FormGroup>
                <PlaythroughFields playthrough={newPlaythrough} setPlaythrough={setNewPlaythrough}/>
                <Button type={'submit'} disabled={creating}>Save</Button>
            </FormGroup>
        </ValidatingForm>
    </div>
}
