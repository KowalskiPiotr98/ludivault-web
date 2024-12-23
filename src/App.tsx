import './App.css';
import NavBar from "./navBar.tsx";
import {Outlet, Route, Routes} from "react-router";
import PlatformsList from "./components/platforms/platformsList.tsx";
import GamesList from "./components/games/gamesList.tsx";
import GameDetailsRouter from "./components/games/details/gameDetailsRouter.tsx";
import {Container} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/en-gb.js";

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
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'en-gb'}>
            <NavBar/>
            <main>
                <Container maxWidth={"xl"}>
                    <Outlet/>
                </Container>
            </main>
        </LocalizationProvider>
    </>
}
