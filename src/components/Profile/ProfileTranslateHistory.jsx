import Button from "react-bootstrap/Button";
import { deleteTranslations } from "../../api/translation";
import { useUser } from "../../context/UserContext";
import { storageRead, storageSave } from "../../utils/storage";
import ProfileTranslateHistoryItem from "./ProfileTranslateHistoryItem"

const ProfileTranslateHistory = () => {

    const { user, setUser } = useUser()
    const translationList = user.translations.map(
        (translation, index) => (translation.deleted !== true) ? <ProfileTranslateHistoryItem key={ index + '-' + translation.translation } translation={ translation.translation } /> : null)

    const clearTranslations = () => {
        for (let i = 0; i < user.translations.length; i++) {
            user.translations[i].deleted = true
        }
        deleteTranslations(user)
        storageSave("translate-user", user)
        setUser( storageRead("translate-user") )
    }

    return (
        <section>
            <h4>Your Translate history</h4>
            <ul>
                { translationList }
            </ul>
            <Button onClick={() => clearTranslations()}>Clear</Button>
        </section>
        
    )
}

export default ProfileTranslateHistory