import './App.css';
import NavBar from "./navBar.tsx";
import {Outlet, Route, Routes} from "react-router-dom";
import PlatformsList from "./components/platforms/platformsList.tsx";

export default function App() {
    return <Routes>
        <Route path={"/"} element={<Layout/>}>
            <Route path={"/platforms"} element={<PlatformsList/>}/>
        </Route>
    </Routes>
}

function Layout() {
    return <>
        <header>
            <NavBar/>
        </header>
        <main>
            <div className="container">
                <Outlet/>
            </div>
        </main>
    </>
}
