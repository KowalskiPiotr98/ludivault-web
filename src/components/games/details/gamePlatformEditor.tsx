import {Fieldset, Label} from "@headlessui/react";
import PlatformDropdownSelector from "../../platforms/platformDropdownSelector.tsx";
import useGameDetailsContext from "../../../contexts/gameDetailsContext.ts";

export default function GamePlatformEditor() {
    const game = useGameDetailsContext();

    return <Fieldset>
        <Label htmlFor={"platform"}>Platform</Label>
        <PlatformDropdownSelector
            className={"w-full"}
            required
            disabled={game.loading}
            selectedId={game.game.platformId}
            onSelected={e => game.setGame(prevState => ({...prevState!, platformId: e!.id}))}
        />
    </Fieldset>
}
