import usePlatforms from "../../hooks/platforms/usePlatforms.ts";
import Loader from "../common/loader.tsx";
import Platform from "../../models/platform.ts";
import ErrorBar from "../common/errorBar.tsx";
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";

class PropTypes {
    selectedId: string | undefined;
    onSelected: (selected: Platform | undefined) => void = undefined!;
    disabled?: boolean | undefined;
    id?: string | undefined;
    required?: boolean | undefined;
}

export default function PlatformDropdownSelector({id = undefined, selectedId, required = undefined, onSelected, disabled = false}: Readonly<PropTypes>) {
    const {platforms, loading} = usePlatforms();

    const selectedCallback = (e: SelectChangeEvent) => {
        const newId = e.target.value;
        if (!newId || !platforms)
            onSelected(undefined);
        else
            onSelected(platforms.find(p => p.id === newId));
    }

    if (loading)
        return <Loader/>
    if (!platforms)
        return <ErrorBar message={"Failed to load platforms"}/>
    return <FormControl fullWidth>
        <InputLabel required={required} id={`${id}-platform-label}`}>Platform</InputLabel>
        <Select required={required} label={"Platform"} id={id} labelId={`${id}-platform-label`} disabled={disabled} value={selectedId} onChange={selectedCallback}>
            {platforms.map(p => <MenuItem key={p.id} value={p.id}>{p.shortName}</MenuItem>)}
        </Select>
    </FormControl>
}
