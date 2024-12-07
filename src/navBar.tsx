import {Link} from "react-router";

export default function NavBar() {
    return <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/platforms">Platforms</Link>
                <Link to="/games">Games</Link>
            </li>
        </ul>
    </nav>
}
