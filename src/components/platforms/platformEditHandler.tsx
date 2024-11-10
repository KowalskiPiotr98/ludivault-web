import EditButton from "../common/buttons/editButton.tsx";
import Platform from "../../models/platform.ts";
import {useState} from "react";
import {Button, Dialog, Fieldset} from "@headlessui/react";
import ScrollableDialogBody from "../common/scrollableDialogBody.tsx";
import DialogBackground from "../common/dialogBackground.tsx";
import usePlatformsIndex from "../../contexts/platformsIndexContext.ts";
import PlatformDataFields from "./platformDataFields.tsx";
import {usePlatformEditor} from "../../hooks/platforms/usePlatformEditor.ts";
import ErrorBar from "../common/errorBar.tsx";
import ValidatingForm from "../common/validatingForm.tsx";

class PropTypes {
    platform: Platform = undefined!;
}

export default function PlatformEditHandler({platform}: PropTypes) {
    const [isEditing, setIsEditing] = useState(false);
    const [editingPlatform, setEditingPlatform] = useState(platform);
    const platforms = usePlatformsIndex();
    const {editor, editing, error} = usePlatformEditor();

    const reset = () => {
        setIsEditing(false);
        setEditingPlatform(platform);
    }

    const submit = async () => {
        const modified = await editor(editingPlatform);
        if (!modified)
            return;

        platforms.updatePlatform(modified);
        setIsEditing(false);
    }

    return <>
        <EditButton onClick={() => setIsEditing(true)} title={`Edit platform ${platform.name}`}/>
        <Dialog onClose={reset} open={isEditing}>
            <DialogBackground/>
            <ScrollableDialogBody>
                <ValidatingForm onValidSubmit={submit}>
                    {error && <ErrorBar message={error}/>}
                    <Fieldset className="w-full">
                        <PlatformDataFields platform={editingPlatform} setPlatform={setEditingPlatform} disabled={editing}/>
                    </Fieldset>
                    <div className="w-full mt-3 flex justify-end">
                        <Button type="reset" className="me-2 button-cancel" disabled={editing} onClick={reset}>Cancel</Button>
                        <Button type="submit" className="button-main" disabled={editing}>Save</Button>
                    </div>
                </ValidatingForm>
            </ScrollableDialogBody>
        </Dialog>
    </>
}
