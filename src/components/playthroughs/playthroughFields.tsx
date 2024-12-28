import Playthrough from "../../models/playthrough.ts";
import {stateUpdater} from "../../utils/types.ts";
import {getDateValueString} from "../../utils/dates.ts";
import PlaythroughStateSelector from "./playthroughStateSelector.tsx";
import {FormGroup, FormLabel, TextField} from "@mui/material";

class PropTypes {
    playthrough: Playthrough = undefined!;
    setPlaythrough: stateUpdater<Playthrough> = undefined!;
}

export default function PlaythroughFields({playthrough, setPlaythrough}: Readonly<PropTypes>) {
    return <>
        <FormGroup sx={{width: "100%"}}>
            <FormLabel htmlFor={`${playthrough.id}-startDate`}>Start date</FormLabel>
            <TextField type={'date'} required id={`${playthrough.id}-startDate`} value={getDateValueString(playthrough.startDate)} onChange={e => setPlaythrough(prevState => ({...prevState, startDate: new Date(e.target.value)}))}/>
        </FormGroup>
        <FormGroup sx={{width: "100%"}}>
            <FormLabel htmlFor={`${playthrough.id}-endDate`}>End date</FormLabel>
            <TextField type={'date'} id={`${playthrough.id}-endDate`} value={getDateValueString(playthrough.endDate)} onChange={e => setPlaythrough(prevState => ({...prevState, endDate: new Date(e.target.value)}))}/>
        </FormGroup>
        <FormGroup sx={{width: "100%"}}>
            <FormLabel htmlFor={`${playthrough.id}-status`}>Status</FormLabel>
            <PlaythroughStateSelector id={`${playthrough.id}-status`} required status={playthrough.status} setStatus={s => setPlaythrough(prevState => ({...prevState, status: s }))}/>
        </FormGroup>
        <FormGroup sx={{width: "100%"}}>
            <FormLabel htmlFor={`${playthrough.id}-runtime`}>Runtime (minutes)</FormLabel>
            <TextField type={'number'} aria-valuemin={1} id={`${playthrough.id}-runtime`} value={playthrough.runtime} onChange={e => setPlaythrough(prevState => ({...prevState, runtime: +e.target.value ? +e.target.value : undefined}))}/>
        </FormGroup>
    </>
}
