import Platform from "../../models/platform.ts";
import {stateUpdater} from "../../utils/types.ts";
import {FormGroup, TextField} from "@mui/material";

class PropTypes {
    platform: Platform = undefined!;
    setPlatform: stateUpdater<Platform> = undefined!;
    disabled?: boolean = false;
}

export default function PlatformDataFields({platform, setPlatform, disabled = false}: Readonly<PropTypes>) {
    return <>
        <FormGroup sx={{p: 1}}>
            <TextField label={"Name"} placeholder={"Full name of the platform (eg. Sony PlayStation 5)"} value={platform.name} slotProps={{htmlInput: {maxLength: 200}}} disabled={disabled} required onChange={e => setPlatform(prevState => ({...prevState, name: e.target.value}))}/>
        </FormGroup>
        <FormGroup sx={{p: 1}}>
            <TextField label={"Short name"} placeholder={"Short name to easily identify the platform (eg. PS5)"} value={platform.shortName} slotProps={{htmlInput: {maxLength: 5}}} disabled={disabled} required onChange={e => setPlatform(prevState => ({...prevState, shortName: e.target.value}))}/>
        </FormGroup>
    </>
}
