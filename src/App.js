import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import Container from "react-bootstrap/Container";
import Gallery from "./components/Gallery";
import TVShowComponent from "./components/TVShowComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TVShowPage from "./components/TVShowPage";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    // aggiungo l'elemento container per le route
    <BrowserRouter>
      <Container fluid className="bg-dark text-white">
        <Container fluid data-bs-theme="dark">
          <NavbarComponent />

          <Container fluid>
            {/* di routes può essercene una sola e deve contenere esclusivamente altre route, ovvero il body della pagina che viene hreffata */}
            <Routes>
              <Route></Route>
              <Route
                path="/" // molto importante è praticamente come quando si inserisce l'href nel componenete
                element={
                  <>
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
                  </>
                }
              />
              <Route path="/tv-shows" element={<TVShowPage />}></Route>
              <Route path="/movie-details/:movieId" element={<MovieDetails />}></Route>
            </Routes>
            <FooterComponent />
          </Container>
        </Container>
      </Container>
    </BrowserRouter>
  );
}

export default App;
