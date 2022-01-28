import { Container,Navbar, Dropdown, NavLink } from "react-bootstrap";
import "./navbar.css"


const NavBar = () => {

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Lost in Translation</Navbar.Brand>
                <Dropdown>
                    <Dropdown.Toggle as={NavLink}><Navbar.Toggle/></Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                        <Dropdown.Item href="/">Log Out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Navbar>
    )
}

export default NavBar