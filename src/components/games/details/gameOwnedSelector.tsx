import useGameDetailsContext from "../../../contexts/gameDetailsContext.ts";
import {Button, FormGroup} from "@mui/material";

export default function GameOwnedSelector() {
    const game = useGameDetailsContext();

    return <FormGroup>
        <Button disabled={game.loading} onClick={() => game.setGame(prevState => ({...prevState!, owned: !prevState!.owned}))}>
            {game.game.owned?
                "Owned":
                "Not owned"
            }
        </Button>
    </FormGroup>
}
