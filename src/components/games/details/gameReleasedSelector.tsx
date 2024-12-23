import useGameDetailsContext from "../../../contexts/gameDetailsContext.ts";
import {Button, FormGroup} from "@mui/material";

export default function GameReleasedSelector() {
    const game = useGameDetailsContext();

    return <FormGroup>
        <Button disabled={game.loading} onClick={() => game.setGame(prevState => ({...prevState!, released: !prevState!.released}))}>
            {game.game.released?
                "Released":
                "Not released"
            }
        </Button>
    </FormGroup>
}
