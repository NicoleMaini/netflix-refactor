import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" className="p-0">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="netflix logo"
            height="30px"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-link" aria-current="page" href="#">
              Home
            </Nav.Link>
            <Nav.Link className="nav-link" aria-current="page" href="#">
              TV Shows
            </Nav.Link>
            <Nav.Link className="nav-link" href="#">
              Movies
            </Nav.Link>
            <Nav.Link className="nav-link" href="#">
              Recently Added
            </Nav.Link>
            <Nav.Link className="nav-link" href="#">
              My List
            </Nav.Link>
          </Nav>
          <Nav className="align-items-center">
            <Button variant="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </Button>
            <div className="d-flex align-items-center">
              <p className="mb-0">KIDS</p>
              <div className="my-4 my-lg-1 ms-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-bell-fill mx-3 cp"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"></path>
                </svg>
              </div>
            </div>
            <Nav.Link className="pe-0" href="#">
              <img src="https://cdn-icons-png.flaticon.com/512/6833/6833605.png" alt="profile img" width="40px" />
            </Nav.Link>
            <NavDropdown title="" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#Profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#Settings">Impostazioni</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#Out">Esci</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
