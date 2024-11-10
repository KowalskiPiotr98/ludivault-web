import Platform from "../../models/platform.ts";
import {stateUpdater} from "../../utils/types.ts";
import {Field, Input, Label} from "@headlessui/react";

class PropTypes {
    platform: Platform = undefined!;
    setPlatform: stateUpdater<Platform> = undefined!;
    disabled?: boolean = false;
}

export default function PlatformDataFields({platform, setPlatform, disabled = false}: PropTypes) {
    return <>
        <Field>
            <Label>Name</Label>
            <Input className="w-full input" value={platform.name} maxLength={200} disabled={disabled} required onChange={e => setPlatform(prevState => ({...prevState, name: e.target.value}))}/>
        </Field>
        <Field className="mt-2">
            <Label>Short name</Label>
            <Input className="w-full input" value={platform.shortName} maxLength={5} disabled={disabled} required onChange={e => setPlatform(prevState => ({...prevState, shortName: e.target.value}))}/>
        </Field>
    </>
}
