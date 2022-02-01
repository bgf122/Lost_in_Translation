import { useUser } from "../../context/UserContext";

const ProfileHeader = () => {
    const { user } = useUser()
    return (
        <header>
            <h4>Hello { user.username }</h4>
        </header>
    )
}

export default ProfileHeader