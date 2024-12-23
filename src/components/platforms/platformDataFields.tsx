import Platform from "../../models/platform.ts";
import {stateUpdater} from "../../utils/types.ts";
import {FormGroup, FormLabel, TextField} from "@mui/material";

class PropTypes {
    platform: Platform = undefined!;
    setPlatform: stateUpdater<Platform> = undefined!;
    disabled?: boolean = false;
}

export default function PlatformDataFields({platform, setPlatform, disabled = false}: PropTypes) {
    return <>
        <FormGroup>
            <FormLabel>Name</FormLabel>
            <TextField value={platform.name} slotProps={{htmlInput: {maxLength: 200}}} disabled={disabled} required onChange={e => setPlatform(prevState => ({...prevState, name: e.target.value}))}/>
        </FormGroup>
        <FormGroup>
            <FormLabel>Short name</FormLabel>
            <TextField value={platform.shortName} slotProps={{htmlInput: {maxLength: 200}}}  disabled={disabled} required onChange={e => setPlatform(prevState => ({...prevState, shortName: e.target.value}))}/>
        </FormGroup>
    </>
}
