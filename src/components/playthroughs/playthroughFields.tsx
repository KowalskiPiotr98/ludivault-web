import Playthrough from "../../models/playthrough.ts";
import {stateUpdater} from "../../utils/types.ts";
import {Field, Input, Label} from "@headlessui/react";
import {getDateValueString} from "../../utils/dates.ts";
import PlaythroughStateSelector from "./playthroughStateSelector.tsx";

class PropTypes {
    playthrough: Playthrough = undefined!;
    setPlaythrough: stateUpdater<Playthrough> = undefined!;
}

export default function PlaythroughFields({playthrough, setPlaythrough}: PropTypes) {
    return <>
        <Field>
            <Label htmlFor={`${playthrough.id}-startDate`}>Start date</Label>
            <Input className={'input'} type={'date'} required id={`${playthrough.id}-startDate`} value={getDateValueString(playthrough.startDate)} onChange={e => setPlaythrough(prevState => ({...prevState, startDate: new Date(e.target.value)}))}/>
        </Field>
        <Field>
            <Label htmlFor={`${playthrough.id}-endDate`}>End date</Label>
            <Input className={'input'} type={'date'} id={`${playthrough.id}-endDate`} value={getDateValueString(playthrough.endDate)} onChange={e => setPlaythrough(prevState => ({...prevState, endDate: new Date(e.target.value)}))}/>
        </Field>
        <Field>
            <Label htmlFor={`${playthrough.id}-status`}>Status</Label>
            <PlaythroughStateSelector className={'input'} id={`${playthrough.id}-status`} required status={playthrough.status} setStatus={s => setPlaythrough(prevState => ({...prevState, status: s }))}/>
        </Field>
        <Field>
            <Label htmlFor={`${playthrough.id}-runtime`}>Runtime (minutes)</Label>
            <Input className={'input'} type={'number'} min={1} id={`${playthrough.id}-runtime`} value={playthrough.runtime} onChange={e => setPlaythrough(prevState => ({...prevState, runtime: +e.target.value ? +e.target.value : undefined}))}/>
        </Field>
    </>
}
