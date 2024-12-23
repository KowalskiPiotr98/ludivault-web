import useGameDetailsContext from "../../../contexts/gameDetailsContext.ts";
import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";

export default function GameOwnedSelector() {
    const game = useGameDetailsContext();

    return <FormGroup>
        <FormControlLabel control={
            <Checkbox id={"game-owned"} disabled={game.loading} checked={game.game.owned} onChange={c => game.setGame(prevState => ({...prevState!, owned: c.target.checked}))}/>
        } label={"Owned"}/>
    </FormGroup>
}
