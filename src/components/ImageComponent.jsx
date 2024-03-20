import { useState } from "react";
import Col from "react-bootstrap/Col";

const ImageComponent = props => {
  const [showText, setShowText] = useState(false);

  return (
    // ho provato a rendere responsive le immagini ma non mi piaceva il risultato
    // xs={6} md={3} lg={2}
    <Col className="p-1">
      <img
        className="object-fit-cover w-100 h-100 img-hover"
        src={props.poster}
        alt={props.title}
        // stavo tentando di aggiungere un effetto al passaggio del mouse senza molto successo per far comparire il nome del film
        onMouseOver={() => {
          setShowText(!showText);
        }}
        onMouseOut={() => {
          setShowText(!showText);
        }}
      />
      {showText === true ? <h6 className="small mt-3">{props.title}</h6> : <></>}
    </Col>
  );
};

export default ImageComponent;
