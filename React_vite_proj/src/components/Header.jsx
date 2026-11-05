import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Header() {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className={`header theme-${theme}`}>
            <h1>SOCIAL NETWORK</h1>
            <p>for communication</p>

            <nav className={`navigation theme-${theme}`}>
                <Link className={`nav-link theme-${theme}`} to={"/"}>
                 Main
                </Link>
                <Link className={`nav-link theme-${theme}`} to={"/profile"}>
                 Profile
                </Link>
                <Link className={`nav-link theme-${theme}`} to={"/settings"}>
                 Settings
                </Link>
                <Link className={`nav-link theme-${theme}`} to={"/about"}>
                 About this project
                </Link>
                <Link className={`nav-link theme-${theme}`} to={"/weather"}>
                 Weather
                </Link>
                <button onClick={toggleTheme}>
                    {theme === "light" ? "🌙" : "☀"}
                </button>
            </nav>
        </header>
    )
}

export default Header