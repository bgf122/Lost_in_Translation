import LoginForm from "../components/Login/LoginForm"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import styles from "./Start.module.css"

const Start = () => {
    return(
        <>
        <Container className={ styles.ContainerStart } >
            <Row className="justify-content-md-center" >
                <Col  className={ styles.ColLeft }>
                    <img src="/assets/Logo.png" alt="" width={"150 px"}></img>
                </Col>
                <Col  className={ styles.ColRight }>
                    <h2 >Lost in Translation</h2>
                    <p>Get Started</p>
                </Col>
            </Row>
        </Container>
        <LoginForm />
        </>
    )
}
export default Start