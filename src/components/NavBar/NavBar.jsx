import { Container,Navbar, Dropdown, NavLink } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import "./navbar.css"


const NavBar = () => {
    const navigate = useNavigate()
    const { setUser } = useUser()

    const logOut = () => {
        localStorage.clear()
        setUser(null)
        navigate("/")
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Lost in Translation</Navbar.Brand>
                <Dropdown>
                    <Dropdown.Toggle as={NavLink}><div>Hello</div></Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                        <Dropdown.Item onClick={() => logOut()}>Log Out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Navbar>
    )
}

export default NavBar