import PlatformDropdownSelector from "../../platforms/platformDropdownSelector.tsx";
import useGameDetailsContext from "../../../contexts/gameDetailsContext.ts";
import {FormGroup, FormLabel} from "@mui/material";

export default function GamePlatformEditor() {
    const game = useGameDetailsContext();

    return <FormGroup>
        <FormLabel htmlFor={"platform"}>Platform</FormLabel>
        <PlatformDropdownSelector
            required
            disabled={game.loading}
            selectedId={game.game.platformId}
            onSelected={e => game.setGame(prevState => ({...prevState!, platformId: e!.id}))}
        />
    </FormGroup>
}
