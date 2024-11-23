import './App.css';
import NavBar from "./navBar.tsx";
import {Outlet, Route, Routes} from "react-router-dom";
import PlatformsList from "./components/platforms/platformsList.tsx";
import GamesList from "./components/games/gamesList.tsx";
import GameDetailsRouter from "./components/games/gameDetailsRouter.tsx";

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
        <header>
            <NavBar/>
        </header>
        <main>
            <div className="container mx-auto">
                <Outlet/>
            </div>
        </main>
    </>
}
