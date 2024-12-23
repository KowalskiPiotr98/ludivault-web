import {AppBar, Box, Button, Container, Toolbar} from "@mui/material";
import {useNavigate} from "react-router";

export default function NavBar() {
    const navigate = useNavigate();

    return <AppBar position="static">
        <Container maxWidth={"xl"}>
            <Toolbar>
                <Box sx={{flexGrow: 1, display: "flex"}}>
                    <Button sx={{display: "block", color: "white"}} type={"button"} onClick={() => navigate("/games")}>Games</Button>
                    <Button sx={{display: "block", color: "white"}} type={"button"} onClick={() => navigate("/platforms")}>Platforms</Button>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
}
