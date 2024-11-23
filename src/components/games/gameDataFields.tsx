import Game from "../../models/game.ts";
import {stateUpdater} from "../../utils/types.ts";
import {Field, Input, Label} from "@headlessui/react";
import PlatformDropdownSelector from "../platforms/platformDropdownSelector.tsx";
import StyledCheckbox from "../common/styledCheckbox.tsx";
import {getDateValueString} from "../../utils/dates.ts";
import {useEffect} from "react";

class PropTypes {
    game: Game = undefined!;
    setGame: stateUpdater<Game> = undefined!;
    disabled?: boolean | undefined;
}

export default function GameDataFields({game, setGame, disabled = false}: PropTypes) {
    useEffect(() => {
        if (game.releaseDate === undefined)
            return;

        setGame(prevState => ({...prevState, released: game.releaseDate!.valueOf() <= Date.now()}));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [game.releaseDate])

    return <>
        <Field>
            <Label htmlFor={"game-title"}>Title</Label>
            <Input id={"game-title"} type={"text"} className={"w-full input"} value={game.title} maxLength={500} disabled={disabled} required onChange={e => setGame(prevState => ({...prevState, title:e.target.value }))}/>
        </Field>
        <Field className={"mt-2"}>
            <Label htmlFor={"game-platform"}>Platform</Label>
            <PlatformDropdownSelector id={"game-platform"} className={"w-full input"} selectedId={game.platformId} onSelected={p => setGame(prevState => ({...prevState, platformId: p?.id ?? ''}))}/>
        </Field>
        <Field className={"mt-2"}>
            <Label htmlFor={"game-owned"}>Owned</Label>
            <StyledCheckbox id={"game-owned"} disabled={disabled} checked={game.owned} onChange={c => setGame(prevState => ({...prevState, owned: c}))}/>
        </Field>
        <Field className={"mt-2"}>
            <Label htmlFor={"game-release-date"}>Release date</Label>
            <Input type={"date"} id={"game-release-date"} className={"w-full input"} value={getDateValueString(game.releaseDate)} onChange={e => setGame(prevState => ({...prevState, releaseDate: new Date(Date.parse(e.target.value))}))}/>
        </Field>
        <Field className={"mt-2"}>
            <Label htmlFor={"game-released"}>Released</Label>
            <StyledCheckbox id={"game-released"} disabled={disabled} checked={game.released} onChange={c => setGame(prevState => ({...prevState, released: c}))}/>
        </Field>
    </>
}
