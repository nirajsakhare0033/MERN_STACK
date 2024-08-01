import "./header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="navbar">
        <Container>
          <Navbar.Brand as={Link} to="/" className="navbar-brand">
            MERN
          </Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/ " className="nav-link">
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/user" className="nav-link">
              Post User
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
