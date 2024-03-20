import Row from "react-bootstrap/Row";
import ImageComponent from "./ImageComponent";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import { useEffect, useState } from "react";

const Gallery = props => {
  // settiamo lo stato ad array vuoto, il loading a true e l'errore in false
  // state = {
  //   sagas: [],
  //   isLoading: true,
  //   isError: false,
  // };

  const [sagas, setSagas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // d148c825 key for fetch

  const fetchFun = () => {
    fetch("http://www.omdbapi.com/?apikey=d148c825&s=" + props.saga)
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        }
      })
      .then(obj => {
        const sagasAPI = obj.Search;
        console.log(sagasAPI);
        // this.setState({ sagas: sagasAPI, isLoading: false });
        setSagas(sagasAPI);
        setIsLoading(false);
        // qua ridefiniamo lo stato assegnandogli l'array,
        // e siccome la fetch a sto punto è già stata caricata, isLoading lo settiamo a false
      })
      .catch(error => {
        console.log("Errore", error);
        setIsLoading(false);
        setIsError(true);
        // this.setState({ isLoading: false, isError: true });
        // qua omettiamo l'array che ovviamente non è arrivato, e ci inseriamo un messaggio di errore personalizzato
      });
  };

  useEffect(() => {
    fetchFun();
  }, [props.saga]);

  return (
    <>
      {isLoading === true && (
        <div>
          <Spinner animation="grow" variant="danger"></Spinner>
        </div>
      )}

      {isError === true && (
        <div>
          <Alert variant="danger" className="w-50 mx-auto">
            Ops! Qualcosa è andato storto durante il reperimenti dati. Riprovi più tardi
          </Alert>
        </div>
      )}

      <Row>
        {sagas.map(movie => {
          return <ImageComponent key={movie.imdbID} poster={movie.Poster} title={movie.Title} />;
        })}
      </Row>
    </>
  );
};

export default Gallery;
