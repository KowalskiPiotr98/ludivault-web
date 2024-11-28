import useGameDetailsContext from "../../../contexts/gameDetailsContext.ts";
import {Fieldset, Input, Label} from "@headlessui/react";
import {getDateValueString} from "../../../utils/dates.ts";

export default function GameReleaseDateSelector() {
    const game = useGameDetailsContext();

    return <Fieldset>
        <Label htmlFor={"release-date"}>Release date</Label>
        <Input
            type={"date"}
            className={"w-full input"}
            value={getDateValueString(game.game.releaseDate)}
            onChange={e => game.setGame(prevState => ({...prevState!, releaseDate: new Date(Date.parse(e.target.value))}))}
        />
    </Fieldset>
}
