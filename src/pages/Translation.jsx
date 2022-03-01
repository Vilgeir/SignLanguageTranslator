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
            <h1>Translation</h1>
            <p>Type a sentence to translate</p>
            <TranslationForm onTranslate={ handleTranslationClicked }/>
        </>
    )
}

export default Translation