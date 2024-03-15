import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import Container from "react-bootstrap/Container";
import Gallery from "./components/Gallery";
import TVShowComponent from "./components/TVShowComponent";

function App() {
  return (
    <Container fluid className="bg-dark text-white">
      <Container fluid data-bs-theme="dark">
        <NavbarComponent />
        <Container fluid>
          <TVShowComponent />
          <Container fluid className="my-5 cp">
            <h4 className="me-auto mb-3">Trending Now</h4>
            <Gallery saga="harry%20potter" />
          </Container>
          <Container fluid className="my-5 cp">
            <h4 className="me-auto mb-3">Watch It Again</h4>
            <Gallery saga="star%20wars" />
          </Container>
          <Container fluid className="my-5 cp">
            <h4 className="me-auto mb-3">New Releases</h4>
            <Gallery saga="pokemon" />
          </Container>
          <FooterComponent />
        </Container>
      </Container>
    </Container>
  );
}

export default App;
