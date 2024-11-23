import usePlatforms from "../../hooks/platforms/usePlatforms.ts";
import Loader from "../common/loader.tsx";
import Platform from "../../models/platform.ts";
import {Select} from "@headlessui/react";
import ErrorBar from "../common/errorBar.tsx";
import {ChangeEvent} from "react";

class PropTypes {
    selectedId: string | undefined;
    onSelected: (selected: Platform | undefined) => void = undefined!;
    disabled?: boolean | undefined;
    className?: string | undefined;
    id?: string | undefined;
}

export default function PlatformDropdownSelector({id = undefined, selectedId, onSelected, disabled = false, className = undefined}: PropTypes) {
    const {platforms, loading} = usePlatforms();

    const selectedCallback = (e: ChangeEvent<HTMLSelectElement>) => {
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
    return <Select id={id} className={className} disabled={disabled} value={selectedId} onChange={selectedCallback}>
        {platforms.map(p => <option key={p.id} value={p.id}>{p.shortName}</option>)}
    </Select>
}
