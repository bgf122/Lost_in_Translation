import Col from "react-bootstrap/Col"
import ListGroup from "react-bootstrap/ListGroup"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button";
import { deleteTranslations } from "../../api/translation";
import { useUser } from "../../context/UserContext";
import { storageRead, storageSave } from "../../utils/storage";
import ProfileTranslateHistoryItem from "./ProfileTranslateHistoryItem"
import { useNavigate } from "react-router-dom";

const ProfileTranslateHistory = () => {

    const { user, setUser } = useUser()
    const navigate = useNavigate()
    let translations = []
    

    for (let i = user.translations.length - 1; i >= 0; i--) {
        if (user.translations[i].deleted !== true) translations.push(user.translations[i])
    }

    const clearTranslations = () => {
        for (let i = 0; i < user.translations.length; i++) {
            user.translations[i].deleted = true
        }
        deleteTranslations(user)
        storageSave("translate-user", user)
        setUser( storageRead("translate-user") )
    }

    const translationList = translations.map(
        (translation, index) => (index < 10) ? 
        <ProfileTranslateHistoryItem key={ index + '-' + translation.translation } translation={ translation.translation } /> : null)

    const logout = () => {
        localStorage.clear()
        setUser(null)
        navigate("/")
    }
        
    return (
        <>
        <Row xs lg="7" className="mb-10">
            <h3>Translate History</h3>
        </Row>
        <Row className="justify-content-mb-2">
            <Col md={5}>
                <ListGroup className="mt-1" variant="flush">
                    { translationList }
                <Button className="mt-1" variant="outline-secondary" onClick={() => clearTranslations()}>Clear</Button>
                </ListGroup>
                
            </Col>
            <Col md={{span: 5, offset: 2}}>
            <ListGroup>
                <Button onClick={() => navigate("/translate")} className="mb-1" variant="outline-success">
                    Back to Translate
                </Button>
                <Button onClick={() => logout()} variant="outline-danger">
                    Logout
                </Button>  
            </ListGroup>
           
            </Col>
        </Row>
            
        </>
        
    )
}

export default ProfileTranslateHistory