import withAuth from "../hoc/withAuth"
import ProfileActions from "../Profile/ProfileActions"
import ProfileHeader from "../Profile/ProfileHeader"
import ProfileTranslateHistory from "../Profile/ProfileTranslateHistory"
import { useUser } from "../context/UserContext"
import { useEffect } from "react"
import { userById } from "../api/user"
import { STORAGE_KEY_USER } from "../const/storageKeys"
import { storageSave } from "../utils/storage"

const Profile = () => {

    const { user, setUser } = useUser()

    useEffect(() => {
        const findUser = async () => {
            const [ error, latestUser ] = await userById(user.id)
            if (error === null) {
                storageSave(STORAGE_KEY_USER, latestUser)
                setUser(latestUser)
            }
        }
        //findUser()
    }, [ setUser, user.id])

    return (
        <>
            <h1>Profile</h1>
            <ProfileHeader username={ user.username} />
            <ProfileActions />
            <ProfileTranslateHistory translations={ user.translations }/>
        </>
    ) 
}

export default withAuth(Profile)