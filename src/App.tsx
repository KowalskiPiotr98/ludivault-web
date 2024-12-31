import NavBar from "./navBar.tsx";
import {Outlet, Route, Routes} from "react-router";
import PlatformsList from "./components/platforms/platformsList.tsx";
import GamesList from "./components/games/gamesList.tsx";
import GameDetailsRouter from "./components/games/details/gameDetailsRouter.tsx";
import {Container} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/en-gb.js";
import {CurrentUserContext, CurrentUserContextHandler} from "./contexts/currentUserContext.ts";
import {useEffect, useMemo, useState} from "react";
import CurrentUser from "./models/currentUser.ts";
import {getMe} from "./requests/users.ts";

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
    const [user, setUser] = useState<CurrentUser>();

    const updateUser = useMemo(() => {
        return async () => {
            const newUser = await getMe();
            setUser(newUser);
            console.log("user updated")
        }
    }, [setUser]);

    const userContext = useMemo(() => new CurrentUserContextHandler(user, updateUser), [user, updateUser]);

    useEffect(() => {
        updateUser();
    }, [updateUser])

    return <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'en-gb'}>
        <CurrentUserContext.Provider value={userContext}>
            <NavBar/>
            <main>
                <Container maxWidth={"xl"}>
                    <Outlet/>
                </Container>
            </main>
    </CurrentUserContext.Provider>
    </LocalizationProvider>
}
