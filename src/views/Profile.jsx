
import ProfileTranslateHistory from "../components/Profile/ProfileTranslateHistory"
import withAuth from "../hoc/withAuth"

const Profile = () => {

    return(
        <>
            
            <ProfileTranslateHistory />
        </>
    )
}
export default withAuth(Profile)