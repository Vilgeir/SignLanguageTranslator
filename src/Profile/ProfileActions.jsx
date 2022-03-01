import { STORAGE_KEY_USER } from "../const/storageKeys"
import { useUser } from "../context/UserContext"
import { storageSave, storageDelete } from "../utils/storage"
import { translationClearHistory } from "../api/translation"
import "../pages/profile.css"

const ProfileActions = () => {

    const { user, setUser } = useUser()

    const handleLogoutClick = () => {
        if (window.confirm("Are you sure?")) {
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }

    const handleClearHistoryClick = async () => {
        if (window.confirm("This cannot be undone!")) {

            const [ clearError ] = await translationClearHistory(user.id)

            const updatedUser = {
                ...user,
                translations: []
            }
            console.log(clearError)

            storageSave(updatedUser)
            setUser(updatedUser)
        }
    }

    return (
        <div>
            <button className="profile-button" onClick={ handleClearHistoryClick }>Clear history</button>
            <button className="profile-button" onClick={ handleLogoutClick }>Logout</button>
        </div>
    )
}

export default ProfileActions