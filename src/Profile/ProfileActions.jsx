import { Link } from "react-router-dom"
import { STORAGE_KEY_USER } from "../const/storageKeys"
import { useUser } from "../context/UserContext"
import { storageSave, storageDelete } from "../utils/storage"

const ProfileActions = () => {

    const { user, setUser } = useUser()

    const handleLogoutClick = () => {
        if (window.confirm("Are you sure?")) {
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }

    const handleClearHistoryClick = () => {
        if (window.confirm("This cannot be undone!")) {

            const updatedUser = {
                ...user,
                translations: []
            }

            storageSave(updatedUser)
            setUser(updatedUser)
        }
    }

    return (
        <ul>
            <li><Link to="/translations">Translate</Link></li>
            <button onClick={ handleClearHistoryClick }>Clear</button>
            <button onClick={ handleLogoutClick }>Logout</button>
        </ul>
    )
}

export default ProfileActions