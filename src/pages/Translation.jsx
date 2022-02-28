import TranslationForm from "../components/TranslationForm";
import { useUser } from "../context/UserContext";
import { translationAdd } from "../api/translation"
import { storageSave } from "../utils/storage";
import { STORAGE_KEY_USER } from "../const/storageKeys";

const Translation = () => {

    const { user, setUser } = useUser()

    const handleTranslationClicked = async translation => {
        console.log(translation)

        const [error, updatedUser] = await translationAdd(user, translation)

        if (error !== null){

        }
        //Keep ui state and server state in sync
        storageSave(STORAGE_KEY_USER, updatedUser)
        //Update context state
        setUser(updatedUser)
        
        console.log("error: " + error)
        console.log("result:" + updatedUser)
    }

    return (
        <>
            <h2>translation</h2>
            <TranslationForm onTranslate={ handleTranslationClicked }/>
        </>
    )
}

export default Translation