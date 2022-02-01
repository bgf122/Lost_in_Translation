import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import "./navbar.css"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import NavLink from "react-bootstrap/NavLink";

const NavBar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { user, setUser } = useUser()

    const logout = () => {
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
            <Dropdown.Item onClick={() => navigate(`/${path}`)}><h5>{text}</h5></Dropdown.Item>
        )
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container className="p-3">
                <Navbar.Brand href="/"><h1>Lost in Translation</h1></Navbar.Brand>
                {user !== null ? <Dropdown>
                    <Dropdown.Toggle as={NavLink}><img src="/assets/user.png" width={"50 px"} alt="user logo"></img></Dropdown.Toggle>
                    <Dropdown.Menu>
                        {navigateToPath()}
                        <Dropdown.Item onClick={() => logout()}><h5>Logout</h5></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> : <></>} 
            </Container>
        </Navbar>
    )
}

export default NavBar