import { Component } from "react";
import Col from "react-bootstrap/Col";

class ImageComponent extends Component {
  state = {
    showText: false,
  };

  render() {
    return (
      // ho provato a rendere responsive le immagini ma non mi piaceva il risultato
      // xs={6} md={3} lg={2}
      <Col className="p-1">
        <img
          className="object-fit-cover w-100 h-100 img-hover"
          src={this.props.poster}
          alt={this.props.title}
          // stavo tentando di aggiungere un effetto al passaggio del mouse senza molto successo per far comparire il nome del film
          onMouseOver={() => {
            this.setState({ showText: !this.state.showText });
          }}
          onMouseOut={() => {
            this.setState({ showText: !this.state.showText });
          }}
        />
        {this.state.showText === true ? <h6 className="small mt-3">{this.props.title}</h6> : <></>}
      </Col>
    );
  }
}
export default ImageComponent;
