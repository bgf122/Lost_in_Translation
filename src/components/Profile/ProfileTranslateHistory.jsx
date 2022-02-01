import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { deleteTranslations } from "../../api/translation";
import { useUser } from "../../context/UserContext";
import { storageRead, storageSave } from "../../utils/storage";
import ProfileTranslateHistoryItem from "./ProfileTranslateHistoryItem";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import styles from "./ProfileTranslateHistory.module.css";

const ProfileTranslateHistory = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  let translations = [];

  for (let i = user.translations.length - 1; i > 0; i--) {
    if (user.translations[i].deleted !== true)
      translations.push(user.translations[i]);
  }

  const clearTranslations = () => {
    for (let i = 0; i < user.translations.length; i++) {
      user.translations[i].deleted = true;
    }
    deleteTranslations(user);
    storageSave("translate-user", user);
    setUser(storageRead("translate-user"));
  };

  const translationList = translations.map((translation, index) =>
    index < 10 ? (
      <ProfileTranslateHistoryItem
        key={index + "-" + translation.translation}
        translation={translation.translation}
      />
    ) : null
  );

  const logout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/");
  };

  return (
    <>
      <Container fluid className={styles.ContainerTop}></Container>
      <Container className={styles.TranslateHistory}>
        <Row>
          <Row className={styles.RowHeader}>
            <h2>Translate History</h2>
          </Row>
          <Col md={7}>
            <ListGroup className="mt-1" variant="flush">
              {translationList}
            </ListGroup>
          </Col>

          <Col md={{ span: 3, offset: 1 }}>
            <ListGroup>
              <Button
                className="p-2 m-3"
                variant="outline-secondary"
                onClick={() => clearTranslations()}
              >
                Clear
              </Button>
              <Button
                onClick={() => navigate("/translate")}
                className="p-2 m-3"
                variant="outline-success"
              >
                Back to Translate
              </Button>
              <Button
                className="p-2 m-3"
                onClick={() => logout()}
                variant="outline-danger"
              >
                Logout
              </Button>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProfileTranslateHistory;
