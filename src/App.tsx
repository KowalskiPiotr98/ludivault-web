import './App.css';
import NavBar from "./navBar.tsx";
import {Outlet, Route, Routes} from "react-router";
import PlatformsList from "./components/platforms/platformsList.tsx";
import GamesList from "./components/games/gamesList.tsx";
import GameDetailsRouter from "./components/games/details/gameDetailsRouter.tsx";
import {Container} from "@mui/material";

export default function App() {
    return <Routes>
        <Route path={"/"} element={<Layout/>}>
            <Route path={"/platforms"} element={<PlatformsList/>}/>

            <Route path={"/games"} element={<GamesList/>}/>
            <Route path={"/games/:id"} element={<GameDetailsRouter/>}/>
        </Route>
    </Routes>
}

function Layout() {
    return <>
        <NavBar/>
        <main>
            <Container maxWidth={"xl"}>
                <Outlet/>
            </Container>
        </main>
    </>
}
