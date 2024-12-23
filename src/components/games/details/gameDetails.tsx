import GameDetailsHeader from "./gameDetailsHeader.tsx";
import GameEditSidebar from "./gameEditSidebar.tsx";
import GamePlaythroughListLoader from "./gamePlaythroughListLoader.tsx";
import {Container} from "@mui/material";

export default function GameDetails() {
    return <Container maxWidth={"lg"} sx={{pt: 3}}>
        <GameDetailsHeader/>
        <div>
            <div>
                <GamePlaythroughListLoader/>
            </div>
            <div>
                <GameEditSidebar/>
            </div>
        </div>
    </Container>
}
