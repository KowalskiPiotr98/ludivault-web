import useGameDetailsContext from "../../../contexts/gameDetailsContext.ts";
import {getDateValueString} from "../../../utils/dates.ts";
import {FormGroup, FormLabel, TextField} from "@mui/material";

export default function GameReleaseDateSelector() {
    const game = useGameDetailsContext();

    return <FormGroup>
        <FormLabel htmlFor={"release-date"}>Release date</FormLabel>
        <TextField
            type={"date"}
            value={getDateValueString(game.game.releaseDate)}
            onChange={e => game.setGame(prevState => ({...prevState!, releaseDate: new Date(Date.parse(e.target.value))}))}
        />
    </FormGroup>
}
