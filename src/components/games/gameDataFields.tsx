import Game from "../../models/game.ts";
import {stateUpdater} from "../../utils/types.ts";
import PlatformDropdownSelector from "../platforms/platformDropdownSelector.tsx";
import {useEffect} from "react";
import {Checkbox, FormControlLabel, FormGroup, TextField} from "@mui/material";
import {DatePicker} from "@mui/x-date-pickers";
import dayjs from "dayjs";

class PropTypes {
    game: Game = undefined!;
    setGame: stateUpdater<Game> = undefined!;
    disabled?: boolean | undefined;
}

export default function GameDataFormGroups({game, setGame, disabled = false}: Readonly<PropTypes>) {
    useEffect(() => {
        if (game.releaseDate === undefined)
            return;

        setGame(prevState => ({...prevState, released: game.releaseDate!.valueOf() <= Date.now()}));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [game.releaseDate])

    return <>
        <FormGroup sx={{p: 1}}>
            <TextField label={"Title"} placeholder={"Title of the game"} id={"game-title"} type={"text"} value={game.title} slotProps={{htmlInput: {maxLength: 500}}} disabled={disabled} required onChange={e => setGame(prevState => ({...prevState, title:e.target.value }))}/>
        </FormGroup>
        <FormGroup sx={{p: 1}}>
            <PlatformDropdownSelector required id={"game-platform"} selectedId={game.platformId} onSelected={p => setGame(prevState => ({...prevState, platformId: p?.id ?? ''}))}/>
        </FormGroup>
        <FormGroup sx={{p: 1}}>
            <FormControlLabel control={
                <Checkbox id={"game-owned"} disabled={disabled} checked={game.owned} onChange={c => setGame(prevState => ({...prevState, owned: c.target.checked}))}/>
            } label={"Owned"}/>
        </FormGroup>
        <FormGroup sx={{p: 1}}>
            <DatePicker label={"Release date"} value={game.releaseDate ? dayjs(game.releaseDate) : undefined} onChange={e => setGame(prevState => ({...prevState, releaseDate: e?.toDate()}))}/>
        </FormGroup>
        <FormGroup sx={{p: 1}}>
            <FormControlLabel control={
                <Checkbox id={"game-released"} disabled={disabled} checked={game.released} onChange={c => setGame(prevState => ({...prevState, released: c.target.checked}))}/>
            } label={"Released"}/>
        </FormGroup>
    </>
}
