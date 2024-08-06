import {Navbar, Container, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './header.css'
const header = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="navbar">
        <Container>
          <Navbar.Brand as={Link} to="/" className="navbar-brand">
            MERN CRUD OPERATION
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
}
export default header;