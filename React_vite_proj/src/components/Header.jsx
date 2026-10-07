import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <h1>SOCIAL NETWORK</h1>
            <p>for communication</p>

            <nav className="navigation">
                <Link to={"/"}>
                 Main
                </Link>
                <Link to={"/profile"}>
                 Profile
                </Link>
                <Link to={"/settings"}>
                 Settings
                </Link>
                <Link to={"/about"}>
                 About this project
                </Link>
            </nav>
        </header>
    )
}

export default Header