import EditButton from "../common/buttons/editButton.tsx";
import Platform from "../../models/platform.ts";
import {useState} from "react";
import usePlatformsIndex from "../../contexts/platformsIndexContext.ts";
import PlatformDataFields from "./platformDataFields.tsx";
import {usePlatformEditor} from "../../hooks/platforms/usePlatformEditor.ts";
import ErrorBar from "../common/errorBar.tsx";
import ValidatingForm from "../common/validatingForm.tsx";
import {Dialog, DialogActions, DialogContent, DialogTitle, FormGroup} from "@mui/material";
import FormSaveButton from "../common/buttons/formSaveButton.tsx";

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
        <Dialog onClose={reset} open={isEditing} fullWidth>
            <ValidatingForm onValidSubmit={submit}>
                <DialogTitle>
                    Edit platform
                </DialogTitle>
                <DialogContent>
                    {error && <ErrorBar message={error}/>}
                    <FormGroup>
                        <PlatformDataFields platform={editingPlatform} setPlatform={setEditingPlatform} disabled={editing}/>
                    </FormGroup>
                </DialogContent>
                <DialogActions>
                    <FormSaveButton/>
                </DialogActions>
            </ValidatingForm>
        </Dialog>
    </>
}
