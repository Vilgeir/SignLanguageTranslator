import { NavLink } from "react-router-dom"
import { useUser } from "../context/UserContext"
import "./navbar.css"

const Navbar = () => {

    const { user } = useUser()

    return (
        <nav id="navbar">
            <h2>Translations</h2>
            { user !== null && 
            <ul id="nav-ul">
                <li>
                    <NavLink to="/translation">
                        <button className="nav-button">Translator</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/profile">
                        <button className="nav-button">Profile</button>
                    </NavLink>
                </li>
             </ul>
            }
        </nav>
    )
}

export default Navbar