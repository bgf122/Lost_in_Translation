import { Link } from "react-router-dom"

const ProfileActions = () => {
    return (
        <ul>
            <li><Link to='/translate'>Translate</Link></li>
            <li><button>Log Out</button></li>
        </ul>
    )
}

export default ProfileActions