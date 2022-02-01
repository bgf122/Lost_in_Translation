import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import styles from "./NavBar.module.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import NavLink from "react-bootstrap/NavLink";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, setUser } = useUser();

  const logOut = () => {
    localStorage.clear();
    setUser(null);
    navigate("/");
  };

  const navigateToPath = () => {
    let path = "";
    let text = "";
    if (location.pathname === "/translate") {
      path = "profile";
      text = "Profile";
    } else if (location.pathname === "/profile") {
      path = "translate";
      text = "Translate";
    }

    return (
      <Dropdown.Item onClick={() => navigate(`/${path}`)}>
        <h5>{text}</h5>
      </Dropdown.Item>
    );
  };

  return (
    <Navbar className={ styles.Navbar }  expand="lg">
      <Container className={styles.ContainerTop}>
        <Navbar.Brand href="/" className={ styles.Brand }>
          <img
            alt=""
            src="/assets/Logo.png"
            width={"50 px"}
            className="d-inline-block align-top"
          ></img>{" "}
          Lost in Translation
        </Navbar.Brand>
        {user !== null ? (
          <Dropdown>
            <Dropdown.Toggle as={NavLink} className={ styles.DropdownToggle }>
              <img src="/assets/user.png" width={"50 px"} alt="user logo"></img>
            </Dropdown.Toggle>
            <Dropdown.Menu className={ styles.DropdownMenu }>
              {navigateToPath()}
              <Dropdown.Item className={ styles.DropdownItem } onClick={() => logOut()}>
                <h5>Logout</h5>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <></>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
