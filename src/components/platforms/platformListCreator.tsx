import usePlatformsIndex from "../../contexts/platformsIndexContext.ts";
import {usePlatformCreator} from "../../hooks/platforms/usePlatformCreator.ts";
import {Button, Dialog, Fieldset} from "@headlessui/react";
import {useState} from "react";
import Platform from "../../models/platform.ts";
import CreateButton from "../common/buttons/createButton.tsx";
import DialogBackground from "../common/dialogBackground.tsx";
import ScrollableDialogBody from "../common/scrollableDialogBody.tsx";
import ValidatingForm from "../common/validatingForm.tsx";
import ErrorBar from "../common/errorBar.tsx";
import PlatformDataFields from "./platformDataFields.tsx";

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

        platforms.addPlatform(response);
        setPlatform(new Platform());
        reset();
    }

    return <div>
        <CreateButton onClick={() => setShow(true)} title={"Create platform"}/>
        <Dialog  onClose={reset} open={show}>
            <DialogBackground/>
            <ScrollableDialogBody>
                <ValidatingForm onValidSubmit={submit}>
                    {error && <ErrorBar message={error}/>}
                    <Fieldset className="w-full">
                        <PlatformDataFields platform={platform} setPlatform={setPlatform} disabled={creating}/>
                    </Fieldset>
                    <div className="w-full mt-3 flex justify-end">
                        <Button type="submit" className="button-main" disabled={creating}>Create</Button>
                    </div>
                </ValidatingForm>
            </ScrollableDialogBody>
        </Dialog>
    </div>
}
