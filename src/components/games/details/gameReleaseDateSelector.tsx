import useGameDetailsContext from "../../../contexts/gameDetailsContext.ts";
import {FormGroup} from "@mui/material";
import {DatePicker} from "@mui/x-date-pickers";
import dayjs from "dayjs";

export default function GameReleaseDateSelector() {
    const game = useGameDetailsContext();

    return <FormGroup>
        <DatePicker
            label={"Release date"}
            value={game.game.releaseDate ? dayjs(game.game.releaseDate) : undefined}
            onChange={e => game.setGame(prevState => ({...prevState!, releaseDate: e?.toDate()}))}/>
    </FormGroup>
}
