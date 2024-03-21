import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { Link, useLocation } from "react-router-dom";

function NavbarComponent() {
  // qui sto utilizzando questo hook per fornirmi un modo per mettere al corrente la navbar fissa di in che pagina siamo
  const location = useLocation();
  return (
    <Navbar collapseOnSelect expand="lg" className="p-0">
      <Container fluid>
        <Link className="navbar-brand" aria-current="page" to="/home">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="netflix logo"
            height="30px"
          />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className={location.pathname === "/" ? "nav-link active" : "nav-link"} aria-current="page" to="/">
              Home
            </Link>
            <Link
              to="/tv-shows"
              className={location.pathname === "/tv-show" ? "nav-link active" : "nav-link"}
              aria-current="page"
            >
              TV Shows
            </Link>
            <Link
              className={location.pathname === "/movie-details/:movieId" ? "nav-link active" : "nav-link"}
              to="/movie-details/:movieId"
            >
              Movie Details
            </Link>
            <Link className={location.pathname === "/recently-add" ? "nav-link active" : "nav-link"} to="/recently-add">
              Recently Added
            </Link>
            <Link className={location.pathname === "/my-list" ? "nav-link active" : "nav-link"} to="/my-list">
              My List
            </Link>
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
