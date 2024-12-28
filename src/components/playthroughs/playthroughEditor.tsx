import Playthrough from "../../models/playthrough.ts";
import {Box, Button, FormGroup, Popover, TextField} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState, MouseEvent} from "react";
import ValidatingForm from "../common/validatingForm.tsx";
import InlineStack from "../common/inlineStack.tsx";
import FormSaveButton from "../common/buttons/formSaveButton.tsx";
import {usePlaythroughEditor} from "../../hooks/playthroughs/usePlaythroughEditor.ts";
import ErrorBar from "../common/errorBar.tsx";
import usePlaythroughsContext from "../../contexts/playthroughsContext.ts";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons/faPenToSquare";
import dayjs from "dayjs";
import {DateTimePicker} from "@mui/x-date-pickers";
import PlaythroughStateSelector from "./playthroughStateSelector.tsx";

class PropTypes {
    playthrough: Playthrough = undefined!;
}

export default function PlaythroughEditor({playthrough}: Readonly<PropTypes>) {
    const [open, setOpen] = useState(false);
    const [anchor, setAnchor] = useState<HTMLButtonElement>();
    const [editPlay, setEditPlay] = useState(playthrough);
    const {error, editor, editing} = usePlaythroughEditor();
    const playthroughs = usePlaythroughsContext();

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        setOpen(true);
        setEditPlay(playthrough);
        setAnchor(e.currentTarget);
    }

    const handleClose = () => {
        setAnchor(undefined);
        setOpen(false);
    }

    const handleEdit = async () => {
        const response = await editor(editPlay);
        if (!response)
            return;

        setEditPlay(response);
        playthroughs.updatePlaythrough(response);
        handleClose();
    }

    return <>
        <Button onClick={handleClick} aria-describedby={`${playthrough.id}-edit`}>
            <FontAwesomeIcon icon={faPenToSquare}/>
        </Button>
        <Popover open={open} anchorEl={anchor} onClose={handleClose} anchorOrigin={{vertical: "bottom", horizontal: "left"}}>
            <Box sx={{p: 2}}>
                {error && <ErrorBar message={error}/>}
                <ValidatingForm onValidSubmit={handleEdit}>
                    <FormGroup>
                        <InlineStack sx={{py: 1}}>
                            <DateTimePicker
                                label={"Start date"}
                                value={dayjs(editPlay.startDate)}
                                disableFuture
                                disabled={editing}
                                onChange={e => setEditPlay(prevState => ({...prevState, startDate: e?.toDate() ?? prevState.startDate}))}
                            />
                            <DateTimePicker
                                label={"End date"}
                                value={editPlay.endDate ? dayjs(editPlay.endDate) : undefined}
                                disableFuture
                                disabled={editing}
                                onChange={e => setEditPlay(prevState => ({...prevState, endDate: e?.toDate()}))}
                            />
                            <TextField
                                label={"Runtime"}
                                value={editPlay.runtime}
                                onChange={e => setEditPlay(prevState => ({...prevState, runtime: +e.target.value}))}
                            />
                            <PlaythroughStateSelector status={editPlay.status} setStatus={e => setEditPlay(prevState => ({...prevState, status: e}))}/>
                        </InlineStack>
                    </FormGroup>
                    <FormSaveButton/>
                </ValidatingForm>
            </Box>
        </Popover>
    </>
}
