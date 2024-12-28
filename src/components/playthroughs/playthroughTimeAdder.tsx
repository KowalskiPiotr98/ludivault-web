import Playthrough from "../../models/playthrough.ts";
import {Box, Button, FormGroup, Popover, TextField} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStopwatch} from "@fortawesome/free-solid-svg-icons/faStopwatch";
import {useState, MouseEvent} from "react";
import ValidatingForm from "../common/validatingForm.tsx";
import InlineStack from "../common/inlineStack.tsx";
import FormSaveButton from "../common/buttons/formSaveButton.tsx";
import {usePlaythroughEditor} from "../../hooks/playthroughs/usePlaythroughEditor.ts";
import ErrorBar from "../common/errorBar.tsx";
import usePlaythroughsContext from "../../contexts/playthroughsContext.ts";

class PropTypes {
    playthrough: Playthrough = undefined!;
}

export default function PlaythroughTimeAdder({playthrough}: Readonly<PropTypes>) {
    const [open, setOpen] = useState(false);
    const [anchor, setAnchor] = useState<HTMLButtonElement>();
    const [addHours, setAddHours] = useState<number>(0);
    const [addMinutes, setAddMinutes] = useState<number>(0);
    const {error, editor, editing} = usePlaythroughEditor();
    const playthroughs = usePlaythroughsContext();

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        setOpen(true);
        setAnchor(e.currentTarget);
    }

    const handleClose = () => {
        setAnchor(undefined);
        setAddHours(0);
        setAddMinutes(0);
        setOpen(false);
    }

    const handleEdit = async () => {
        const response = await editor({...playthrough, runtime: (playthrough.runtime ?? 0) + 60*addHours + addMinutes});
        if (!response)
            return;

        playthroughs.updatePlaythrough(response);
        handleClose();
    }

    return <>
        <Button onClick={handleClick} aria-describedby={`${playthrough.id}-addTime`} title={"Add time to playthrough"}>
            <FontAwesomeIcon icon={faStopwatch}/>
        </Button>
        <Popover open={open} anchorEl={anchor} onClose={handleClose} anchorOrigin={{vertical: "bottom", horizontal: "left"}}>
            <Box sx={{p: 2}}>
                {error && <ErrorBar message={error}/>}
                <ValidatingForm onValidSubmit={handleEdit}>
                    <h4>Add time</h4>
                    <FormGroup>
                        <InlineStack sx={{py: 1}}>
                            <TextField disabled={editing} sx={{width: "100%"}} type={"number"} label={"Hours"} slotProps={{htmlInput: {min: 0}}} value={addHours} onChange={e => setAddHours(+e.target.value)}/>
                            <TextField disabled={editing} sx={{width: "100%"}} type={"number"} label={"Minutes"} slotProps={{htmlInput: {min: 0, max: 59}}} value={addMinutes} onChange={e => setAddMinutes(+e.target.value)}/>
                        </InlineStack>
                    </FormGroup>
                    <FormSaveButton/>
                </ValidatingForm>
            </Box>
        </Popover>
    </>
}
