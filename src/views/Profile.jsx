import ProfileHeader from "../components/Profile/ProfileHeader"
import ProfileTranslateHistory from "../components/Profile/ProfileTranslateHistory"
import withAuth from "../hoc/withAuth"

const Profile = () => {

    return(
        <>
            <ProfileHeader />
            <ProfileTranslateHistory />
        </>
    )
}
export default withAuth(Profile)