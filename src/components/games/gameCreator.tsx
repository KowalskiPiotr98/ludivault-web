import useGamesIndex from "../../contexts/gamesIndexContext.ts";
import {useGameCreator} from "../../hooks/games/useGameCreator.ts";
import {useState} from "react";
import Game from "../../models/game.ts";
import CreateButton from "../common/buttons/createButton.tsx";
import {Button, Dialog, Fieldset} from "@headlessui/react";
import DialogBackground from "../common/dialogBackground.tsx";
import ScrollableDialogBody from "../common/scrollableDialogBody.tsx";
import ValidatingForm from "../common/validatingForm.tsx";
import ErrorBar from "../common/errorBar.tsx";
import GameDataFields from "./gameDataFields.tsx";

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

    return <div>
        <CreateButton onClick={() => setShow(true)} title={"Create game"}/>
        <Dialog onClose={reset} open={show}>
            <DialogBackground/>
            <ScrollableDialogBody>
                <ValidatingForm onValidSubmit={submit}>
                    {error && <ErrorBar message={error}/>}
                    <Fieldset className={"w-full"}>
                        <GameDataFields game={game} setGame={setGame} disabled={creating}/>
                    </Fieldset>
                    <div className="w-full mt-3 flex justify-end">
                        <Button type="submit" className="button-main" disabled={creating}>Create</Button>
                    </div>
                </ValidatingForm>
            </ScrollableDialogBody>
        </Dialog>
    </div>
}
