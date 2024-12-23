import useGamesIndex from "../../contexts/gamesIndexContext.ts";
import {useGameCreator} from "../../hooks/games/useGameCreator.ts";
import {useState} from "react";
import Game from "../../models/game.ts";
import CreateButton from "../common/buttons/createButton.tsx";
import ValidatingForm from "../common/validatingForm.tsx";
import ErrorBar from "../common/errorBar.tsx";
import GameDataFields from "./gameDataFields.tsx";
import {Box, Button, Dialog, FormGroup} from "@mui/material";

export default function GameCreator() {
    const games = useGamesIndex();
    const {creator, creating, error} = useGameCreator();
    const [game, setGame] = useState<Game>(new Game());
    const [show, setShow] = useState(false);

    const reset = () => {
        setShow(false);
        setGame(new Game());
    }

    const submit = async () => {
        const response = await creator(game);
        if (!response)
            return;

        games.addItem(response);
        reset();
    }

    return <Box>
        <CreateButton onClick={() => setShow(true)} title={"Create game"}/>
        <Dialog onClose={reset} open={show}>
            <ValidatingForm onValidSubmit={submit}>
                {error && <ErrorBar message={error}/>}
                <FormGroup>
                    <GameDataFields game={game} setGame={setGame} disabled={creating}/>
                </FormGroup>
                <div>
                    <Button type="submit" disabled={creating}>Create</Button>
                </div>
            </ValidatingForm>
        </Dialog>
    </Box>
}
