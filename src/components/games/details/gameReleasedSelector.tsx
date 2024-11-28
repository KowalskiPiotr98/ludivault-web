import useGameDetailsContext from "../../../contexts/gameDetailsContext.ts";
import {Button, Fieldset} from "@headlessui/react";

export default function GameReleasedSelector() {
    const game = useGameDetailsContext();

    return <Fieldset>
        <Button className={"button w-full"} disabled={game.loading} onClick={() => game.setGame(prevState => ({...prevState!, released: !prevState!.released}))}>
            {game.game.released?
                "Released":
                "Not released"
            }
        </Button>
    </Fieldset>
}
