import ProfileActions from "../components/Profile/ProfileActions"
import ProfileHeader from "../components/Profile/ProfileHeader"
import ProfileTranslateHistory from "../components/Profile/ProfileTranslateHistory"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"

const Profile = () => {

    const { user } = useUser()

    return(
        <>
            <ProfileHeader username={user.username}/>
            <ProfileActions />
            <ProfileTranslateHistory translations={user.translations} />

        </>
    )
}
export default withAuth(Profile)