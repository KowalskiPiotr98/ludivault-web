import usePlatformsIndex from "../../contexts/platformsIndexContext.ts";
import {usePlatformCreator} from "../../hooks/platforms/usePlatformCreator.ts";
import {useState} from "react";
import Platform from "../../models/platform.ts";
import CreateButton from "../common/buttons/createButton.tsx";
import ValidatingForm from "../common/validatingForm.tsx";
import ErrorBar from "../common/errorBar.tsx";
import PlatformDataFields from "./platformDataFields.tsx";
import {Box, Dialog, DialogActions, DialogContent, DialogTitle, FormGroup} from "@mui/material";
import FormCreateButton from "../common/buttons/formCreateButton.tsx";

export default function PlatformListCreator() {
    const platforms = usePlatformsIndex();
    const {creator, creating, error} = usePlatformCreator();
    const [platform, setPlatform] = useState(new Platform());
    const [show, setShow] = useState(false);

    const reset = () => {
        setShow(false);
    }

    const submit = async () => {
        const response = await creator(platform);
        if (!response)
            return;

        platforms.addItem(response);
        setPlatform(new Platform());
        reset();
    }

    return <Box>
        <CreateButton onClick={() => setShow(true)} title={"Create platform"}/>
        <Dialog onClose={reset} open={show} fullWidth>
            <ValidatingForm onValidSubmit={submit}>
                <DialogTitle>
                    Create platform
                </DialogTitle>
                <DialogContent>
                    {error && <ErrorBar message={error}/>}
                    <FormGroup sx={{width: "100%"}}>
                        <PlatformDataFields platform={platform} setPlatform={setPlatform} disabled={creating}/>
                    </FormGroup>
                </DialogContent>
                <DialogActions>
                    <FormCreateButton/>
                </DialogActions>
            </ValidatingForm>
        </Dialog>
    </Box>
}
