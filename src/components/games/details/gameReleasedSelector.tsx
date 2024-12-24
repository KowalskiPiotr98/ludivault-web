import useGameDetailsContext from "../../../contexts/gameDetailsContext.ts";
import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";

export default function GameReleasedSelector() {
    const game = useGameDetailsContext();

    return <FormGroup>
        <FormControlLabel control={
            <Checkbox id={"game-released"} disabled={game.loading} checked={game.game.released} onChange={c => game.setGame(prevState => ({...prevState!, released: c.target.checked}))}/>
        } label={"Released"}/>
    </FormGroup>
}
