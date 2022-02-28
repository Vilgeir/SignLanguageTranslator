import ProfileTranslateHistoryItem from "./ProfileTranslateHistoryItem"

const ProfileTranslateHistory = ({ translations }) => {
    return (
        <section>
            <h4>Your translation history</h4>
            <ul>
                { translations.map((translation, index) => 
                    <ProfileTranslateHistoryItem key={ index + "-" + translation } translation={ translation }/>) }
            </ul>
        </section>
    )
}

export default ProfileTranslateHistory