import { Component } from "react";
import Col from "react-bootstrap/Col";

class ImageComponent extends Component {
  state = {
    showText: false,
  };

  render() {
    return (
      <Col className="p-1">
        <img
          className="object-fit-cover w-100 h-100 img-hover"
          src={this.props.poster}
          alt={this.props.title}
          onClick={() => {
            this.setState({ showText: !this.state.showText });
          }}
        />
      </Col>
    );
  }
}
//className="col-6 col-md-4 col-lg-3 col-xl-2 col-2"

export default ImageComponent;
