import EditButton from "../common/buttons/editButton.tsx";
import Platform from "../../models/platform.ts";
import { useState } from "react";
import {Button, Dialog, Field, Input, Label} from "@headlessui/react";
import ScrollableDialogBody from "../common/scrollableDialogBody.tsx";
import DialogBackground from "../common/dialogBackground.tsx";
import usePlatformsIndex from "../../contexts/platformsIndexContext.ts";

class PropTypes {
    platform: Platform = undefined!;
}

export default function PlatformEditHandler({platform}: PropTypes) {
    const [isEditing, setIsEditing] = useState(false);
    const [editingPlatform, setEditingPlatform] = useState(platform);
    const platforms = usePlatformsIndex();

    const reset = () => {
        setIsEditing(false);
        setEditingPlatform(platform);
    }

    const submit = () => {
        //todo
    }

    return <>
        <EditButton onClick={() => setIsEditing(true)} title={`Edit platform ${platform.name}`}/>
        <Dialog onClose={reset} open={isEditing}>
            <DialogBackground/>
            <ScrollableDialogBody>
                <div className="w-full">
                    <Field>
                        <Label>Name</Label>
                        <Input className="w-full input" value={editingPlatform.name} maxLength={200} required onChange={e => setEditingPlatform(prevState => ({...prevState, name: e.target.value}))}/>
                    </Field>
                    <Field className="mt-2">
                        <Label>Short name</Label>
                        <Input className="w-full input" value={editingPlatform.shortName} maxLength={5} required onChange={e => setEditingPlatform(prevState => ({...prevState, shortName: e.target.value}))}/>
                    </Field>
                </div>
                <div className="w-full flex justify-end">
                    <Button className="me-2 button-cancel" disabled={platforms.loading} onClick={reset}>Cancel</Button>
                    <Button className="button-main" disabled={platforms.loading} onClick={submit}>Save</Button>
                </div>
            </ScrollableDialogBody>
        </Dialog>
    </>
}
