import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row"
import { useUser } from "../../context/UserContext";

const ProfileHeader = () => {
    const { user } = useUser()
    return (
        <>
        <Row className="justify-content-md-center">
            <Col xs lg="6">
                <h2>You are logged in as { user.username }</h2>
            </Col>
        </Row>
        </>
    )
}

export default ProfileHeader