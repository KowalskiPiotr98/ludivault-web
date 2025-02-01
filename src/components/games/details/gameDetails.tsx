import GameDetailsHeader from "./gameDetailsHeader.tsx";
import GameEditSidebar from "./gameEditSidebar.tsx";
import GamePlaythroughListLoader from "./gamePlaythroughListLoader.tsx";
import {Container, Grid2} from "@mui/material";
import GameNotesListLoader from "./gameNotesListLoader.tsx";

export default function GameDetails() {
    return <Container maxWidth={"lg"} sx={{pt: 3}}>
        <GameDetailsHeader/>
        <Grid2 container spacing={2}>
            <Grid2 size={{xs: 12, sm: 8}}>
                <GamePlaythroughListLoader/>
                <GameNotesListLoader/>
            </Grid2>

            <Grid2 size={{xs: 12, sm: "grow"}}>
                <h4>Settings</h4>
                <GameEditSidebar/>
            </Grid2>
        </Grid2>
    </Container>
}
