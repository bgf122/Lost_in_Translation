import { Container,Navbar, Dropdown, NavLink } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import "./navbar.css"

const NavBar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { user, setUser } = useUser()

    const logOut = () => {
        localStorage.clear()
        setUser(null)
        navigate("/")
    }

    const navigateToPath = () => {
        let path = ""
        let text = ""
        if (location.pathname === "/translate") {
            path = "profile"
            text = "Profile"
        } else if (location.pathname === "/profile"){
            path = "translate"
            text = "Translate"
        }
        
        return (
            <Dropdown.Item onClick={() => navigate(`/${path}`)}>{text}</Dropdown.Item>
        )
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Lost in Translation</Navbar.Brand>
                {user !== null ? <Dropdown>
                    <Dropdown.Toggle as={NavLink}><img src="/assets/user.png" width={"50 px"} alt="user logo"></img></Dropdown.Toggle>
                    <Dropdown.Menu>
                        {navigateToPath()}
                        <Dropdown.Item onClick={() => logOut()}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> : <></>} 
            </Container>
        </Navbar>
    )
}

export default NavBar