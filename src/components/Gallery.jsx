import { Component } from "react";
import Row from "react-bootstrap/Row";
import ImageComponent from "./ImageComponent";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";

class Gallery extends Component {
  // settiamo lo stato ad array vuoto, il loading a true e l'errore in false
  state = {
    sagas: [],
    isLoading: true,
    isError: false,
  };

  // d148c825 key for fetch

  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=d148c825&s=" + this.props.saga)
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        }
      })
      .then(obj => {
        const sagasAPI = obj.Search;
        console.log(sagasAPI);
        this.setState({ sagas: sagasAPI, isLoading: false }); // qua ridefiniamo lo stato assegnandogli l'array,
        // e siccome la fetch a sto punto è già stata caricata, isLoading lo settiamo a false
      })
      .catch(error => {
        console.log("Errore", error);
        this.setState({ isLoading: false, isError: true }); // qua omettiamo l'array che ovviamente non è arrivato, e ci inseriamo un messaggio di errore personalizzato
      });
  }

  render() {
    return (
      <>
        {this.state.isLoading === true && (
          <div>
            <Spinner animation="grow" variant="danger"></Spinner>
          </div>
        )}

        {this.state.isError === true && (
          <div>
            <Alert variant="danger" className="w-50 mx-auto">
              Ops! Qualcosa è andato storto durante il reperimenti dati. Riprovi più tardi
            </Alert>
          </div>
        )}

        <Row>
          {this.state.sagas.map(movie => {
            return <ImageComponent key={movie.imdbID} poster={movie.Poster} title={movie.Title} />;
          })}
        </Row>
      </>
    );
  }
}

export default Gallery;
