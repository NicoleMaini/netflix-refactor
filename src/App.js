import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import Container from "react-bootstrap/Container";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="bg-dark text-white">
      <Container fluid data-bs-theme="dark">
        <NavbarComponent />
        <div class="my-5 img-hover">
          <h4 class="me-auto mb-3">Trending Now</h4>
          <Gallery />
        </div>
        <div class="my-5 img-hover">
          <h4 class="me-auto mb-3">Watch It Again</h4>
          <Gallery />
        </div>
        <div class="my-5 img-hover">
          <h4 class="me-auto mb-3">New Releases</h4>
          <Gallery />
        </div>
        <FooterComponent />
      </Container>
    </div>
  );
}

export default App;
