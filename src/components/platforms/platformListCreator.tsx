import usePlatformsIndex from "../../contexts/platformsIndexContext.ts";
import {usePlatformCreator} from "../../hooks/platforms/usePlatformCreator.ts";
import {useState} from "react";
import Platform from "../../models/platform.ts";
import CreateButton from "../common/buttons/createButton.tsx";
import ValidatingForm from "../common/validatingForm.tsx";
import ErrorBar from "../common/errorBar.tsx";
import PlatformDataFields from "./platformDataFields.tsx";
import {Box, Button, Dialog, FormGroup} from "@mui/material";

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
        <Dialog onClose={reset} open={show}>
            <ValidatingForm onValidSubmit={submit}>
                {error && <ErrorBar message={error}/>}
                <FormGroup>
                    <PlatformDataFields platform={platform} setPlatform={setPlatform} disabled={creating}/>
                </FormGroup>
                <div>
                    <Button type="submit" disabled={creating}>Create</Button>
                </div>
            </ValidatingForm>
        </Dialog>
    </Box>
}
