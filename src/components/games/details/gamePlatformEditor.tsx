import PlatformDropdownSelector from "../../platforms/platformDropdownSelector.tsx";
import useGameDetailsContext from "../../../contexts/gameDetailsContext.ts";
import {FormGroup} from "@mui/material";

export default function GamePlatformEditor() {
    const game = useGameDetailsContext();

    return <FormGroup>
        <PlatformDropdownSelector
            required
            disabled={game.loading}
            selectedId={game.game.platformId}
            onSelected={e => game.setGame(prevState => ({...prevState!, platformId: e!.id}))}
        />
    </FormGroup>
}
