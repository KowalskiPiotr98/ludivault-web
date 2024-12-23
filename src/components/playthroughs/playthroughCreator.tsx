import Playthrough from "../../models/playthrough.ts";
import usePlaythroughsContext from "../../contexts/playthroughsContext.ts";
import {useState} from "react";
import useGameDetailsContext from "../../contexts/gameDetailsContext.ts";
import {usePlaythroughCreator} from "../../hooks/playthroughs/usePlaythroughCreator.ts";
import ValidatingForm from "../common/validatingForm.tsx";
import ErrorBar from "../common/errorBar.tsx";
import {Box, FormGroup} from "@mui/material";
import FormCreateButton from "../common/buttons/formCreateButton.tsx";
import {DatePicker} from "@mui/x-date-pickers";
import dayjs from "dayjs";

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
        playthroughs.setPlaythroughs(prevState => ([response, ...prevState]));
    }

    return <Box sx={{py: 2}}>
        <h5>New playthrough</h5>
        {error && <ErrorBar message={error}/>}
        <ValidatingForm onValidSubmit={handle}>
            <FormGroup>
                <DatePicker
                    label={"Start date"}
                    value={dayjs(newPlaythrough.startDate)}
                    disableFuture
                    disabled={creating}
                    onChange={e => setNewPlaythrough(prevState => ({...prevState, startDate: e?.toDate() ?? prevState.startDate}))}
                    />
            </FormGroup>
            <FormCreateButton/>
        </ValidatingForm>
    </Box>
}
