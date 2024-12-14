import {PlaythroughStatus} from "../../models/playthrough.ts";
import {Select} from "@headlessui/react";

class PropTypes {
    status: PlaythroughStatus = undefined!;
    setStatus: (status: PlaythroughStatus) => void = undefined!;
    className?: string;
    id?: string;
    name?: string;
    required?: boolean;
}

export default function PlaythroughStateSelector({status, setStatus, className, name, required, id}: PropTypes) {
    return <Select id={id} name={name} className={className} required={required} value={status} onChange={e => setStatus(+e.target.value)}>
        <option value={'0'}>In progress</option>
        <option value={'1'}>Completed</option>
        <option value={'2'}>Dropped</option>
        <option value={'3'}>Retired</option>
        <option value={'4'}>Suspended</option>
    </Select>
}
