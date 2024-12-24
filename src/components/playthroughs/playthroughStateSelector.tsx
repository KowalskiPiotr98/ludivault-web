import {PlaythroughStatus} from "../../models/playthrough.ts";
import {MenuItem, Select} from "@mui/material";

class PropTypes {
    status: PlaythroughStatus = undefined!;
    setStatus: (status: PlaythroughStatus) => void = undefined!;
    id?: string;
    name?: string;
    required?: boolean;
}

export default function PlaythroughStateSelector({status, setStatus, name, required, id}: PropTypes) {
    return <Select id={id} name={name} required={required} value={status} onChange={e => setStatus(+e.target.value)}>
        <MenuItem value={'0'}>In progress</MenuItem>
        <MenuItem value={'1'}>Completed</MenuItem>
        <MenuItem value={'2'}>Dropped</MenuItem>
        <MenuItem value={'3'}>Retired</MenuItem>
        <MenuItem value={'4'}>Suspended</MenuItem>
    </Select>
}
