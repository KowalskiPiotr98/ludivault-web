import EditButton from "../common/buttons/editButton.tsx";
import Platform from "../../models/platform.ts";
import {useState} from "react";
import usePlatformsIndex from "../../contexts/platformsIndexContext.ts";
import PlatformDataFields from "./platformDataFields.tsx";
import {usePlatformEditor} from "../../hooks/platforms/usePlatformEditor.ts";
import ErrorBar from "../common/errorBar.tsx";
import ValidatingForm from "../common/validatingForm.tsx";
import {Button, Dialog, FormGroup} from "@mui/material";

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

        platforms.updateItem(modified);
        setIsEditing(false);
    }

    return <>
        <EditButton onClick={() => setIsEditing(true)} title={`Edit platform ${platform.name}`}/>
        <Dialog onClose={reset} open={isEditing}>
            <ValidatingForm onValidSubmit={submit}>
                {error && <ErrorBar message={error}/>}
                <FormGroup>
                    <PlatformDataFields platform={editingPlatform} setPlatform={setEditingPlatform} disabled={editing}/>
                </FormGroup>
                <div>
                    <Button type="reset" disabled={editing} onClick={reset}>Cancel</Button>
                    <Button type="submit" disabled={editing}>Save</Button>
                </div>
            </ValidatingForm>
        </Dialog>
    </>
}
