import usePlatforms from "../../hooks/platforms/usePlatforms.ts";
import Loader from "../common/loader.tsx";
import Platform from "../../models/platform.ts";
import ErrorBar from "../common/errorBar.tsx";
import {Select, SelectChangeEvent} from "@mui/material";

class PropTypes {
    selectedId: string | undefined;
    onSelected: (selected: Platform | undefined) => void = undefined!;
    disabled?: boolean | undefined;
    id?: string | undefined;
    required?: boolean | undefined;
}

export default function PlatformDropdownSelector({id = undefined, selectedId, required = undefined, onSelected, disabled = false}: PropTypes) {
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
    return <Select required={required} id={id} disabled={disabled} value={selectedId} onChange={selectedCallback}>
        {platforms.map(p => <option key={p.id} value={p.id}>{p.shortName}</option>)}
    </Select>
}
