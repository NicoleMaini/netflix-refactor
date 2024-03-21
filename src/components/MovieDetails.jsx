import { useEffect, useState } from "react";
import { Card, Col, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = function () {
  // intanto settiamo uno stato a null
  const [movie, setMovie] = useState("");
  const [comments, setComments] = useState("");

  // recuperiamo il parametro che ci siamo passati dalla route parametrica
  const params = useParams(); // qui cì+ il valore del movieId
  console.log(params.movieId);

  const urlOmdb = `http://www.omdbapi.com/?apikey=d148c825&i=${params.movieId}`;

  const urlStruive = `https://striveschool-api.herokuapp.com/api/comments/${params.movieId}`;
  const authorization = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY4NWRhOWFiYWQyODAwMTliZDUyZTEiLCJpYXQiOjE3MTA3NzU3MjIsImV4cCI6MTcxMTk4NTMyMn0.jx4VoW-lw4C_9Ipk-C6pWWjmhEX9pWzgP1_BCsXeiqM",
      "Content-Type": "application/json",
    },
  };
  const fetchFun = (urlOmdb, func, authorization) => {
    fetch(urlOmdb, authorization)
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        }
      })
      .then(info => {
        console.log(info);
        func(info);
      })
      .catch(error => {
        console.log("Errore", error);
      });
  };

  useEffect(() => {
    fetchFun(urlOmdb, setMovie);
    fetchFun(urlStruive, setComments, authorization);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.movieId]);

  console.log(movie);
  console.log(comments);

  return (
    <>
      {movie === null && <Spinner />}
      {movie.imdbID === params.movieId && (
        <Col className="p-2 w-75 mx-auto my-5">
          <Card className="flex-row 1px solid gray">
            <div style={{ width: "11rem", height: "14rem", overflow: "hidden" }}>
              <Card.Img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderTopRightRadius: 0,
                  borderBottomLeftRadius: 5,
                }}
                variant="top"
                src={movie.Poster}
              />
            </div>
            <Card.Body className="col-8 d-flex flex-column">
              <Card.Title className="display-5">{movie.Title}</Card.Title>
              <div>
                <Card.Text>
                  {} | {}
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
      )}
    </>
  );
};

export default MovieDetails;
