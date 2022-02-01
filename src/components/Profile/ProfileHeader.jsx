import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useUser } from "../../context/UserContext";
import styles from "../Profile/ProfileHeader.module.css"

const ProfileHeader = () => {
  const { user } = useUser();
  return (
    <>
      <Row className="justify-content-md-center">
        <Col xs lg="6">
          <h5 className={ styles.ProfileHeaderTitle }>You are logged in as {user.username}</h5>
        </Col>
      </Row>
    </>
  );
};

export default ProfileHeader;
