import useGamesIndex from "../../contexts/gamesIndexContext.ts";
import {useGameCreator} from "../../hooks/games/useGameCreator.ts";
import {useState} from "react";
import Game from "../../models/game.ts";
import CreateButton from "../common/buttons/createButton.tsx";
import ValidatingForm from "../common/validatingForm.tsx";
import ErrorBar from "../common/errorBar.tsx";
import GameDataFields from "./gameDataFields.tsx";
import {Box, Dialog, DialogActions, DialogContent, DialogTitle, FormGroup} from "@mui/material";
import FormCreateButton from "../common/buttons/formCreateButton.tsx";

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
        <Dialog onClose={reset} open={show} fullWidth>
            <ValidatingForm onValidSubmit={submit}>
                <DialogTitle>
                    Create game
                </DialogTitle>
                <DialogContent>
                    {error && <ErrorBar message={error}/>}
                    <FormGroup>
                        <GameDataFields game={game} setGame={setGame} disabled={creating}/>
                    </FormGroup>
                </DialogContent>
                <DialogActions>
                    <FormCreateButton/>
                </DialogActions>
            </ValidatingForm>
        </Dialog>
    </Box>
}
