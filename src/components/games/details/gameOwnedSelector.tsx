import useGameDetailsContext from "../../../contexts/gameDetailsContext.ts";
import {Button, Fieldset} from "@headlessui/react";

export default function GameOwnedSelector() {
    const game = useGameDetailsContext();

    return <Fieldset>
        <Button className={"button w-full"} disabled={game.loading} onClick={() => game.setGame(prevState => ({...prevState!, owned: !prevState!.owned}))}>
            {game.game.owned?
                "Owned":
                "Not owned"
            }
        </Button>
    </Fieldset>
}
