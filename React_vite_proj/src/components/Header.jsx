import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <h1>SOCIAL NETWORK</h1>
            <p>for communication</p>

            <nav className="navigation">
                <Link className="nav-link" to={"/"}>
                 Main
                </Link>
                <Link className="nav-link" to={"/profile"}>
                 Profile
                </Link>
                <Link className="nav-link" to={"/settings"}>
                 Settings
                </Link>
                <Link className="nav-link" to={"/about"}>
                 About this project
                </Link>
            </nav>
        </header>
    )
}

export default Header