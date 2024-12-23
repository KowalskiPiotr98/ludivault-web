import Game from "../../models/game.ts";
import {stateUpdater} from "../../utils/types.ts";
import PlatformDropdownSelector from "../platforms/platformDropdownSelector.tsx";
import {useEffect} from "react";
import {Checkbox, FormGroup, FormLabel, TextField} from "@mui/material";

class PropTypes {
    game: Game = undefined!;
    setGame: stateUpdater<Game> = undefined!;
    disabled?: boolean | undefined;
}

export default function GameDataFormGroups({game, setGame, disabled = false}: PropTypes) {
    useEffect(() => {
        if (game.releaseDate === undefined)
            return;

        setGame(prevState => ({...prevState, released: game.releaseDate!.valueOf() <= Date.now()}));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [game.releaseDate])

    return <>
        <FormGroup>
            <FormLabel htmlFor={"game-title"}>Title</FormLabel>
            <TextField id={"game-title"} type={"text"} value={game.title} slotProps={{htmlInput: {maxLength: 500}}} disabled={disabled} required onChange={e => setGame(prevState => ({...prevState, title:e.target.value }))}/>
        </FormGroup>
        <FormGroup>
            <FormLabel htmlFor={"game-platform"}>Platform</FormLabel>
            <PlatformDropdownSelector id={"game-platform"} selectedId={game.platformId} onSelected={p => setGame(prevState => ({...prevState, platformId: p?.id ?? ''}))}/>
        </FormGroup>
        <FormGroup>
            <FormLabel htmlFor={"game-owned"}>Owned</FormLabel>
            <Checkbox id={"game-owned"} disabled={disabled} checked={game.owned} onChange={c => setGame(prevState => ({...prevState, owned: c.target.checked}))}/>
        </FormGroup>
        <FormGroup>
            <FormLabel htmlFor={"game-release-date"}>Release date</FormLabel>
            <TextField type={"date"} id={"game-release-date"}/>
        </FormGroup>
        <FormGroup>
            <FormLabel htmlFor={"game-released"}>Released</FormLabel>
            <Checkbox id={"game-released"} disabled={disabled} checked={game.released} onChange={c => setGame(prevState => ({...prevState, released: c.target.checked}))}/>
        </FormGroup>
    </>
}
