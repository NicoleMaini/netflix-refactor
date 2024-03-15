import { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Gallery extends Component {
  state = {
    sagas: [],
  };

  // d148c825 key for fetch

  render() {
    return (
      <Row className="g-1">
        <Col className="col-6 col-md-4 col-lg-3 col-xl-2 col-2">
          <img className="object-fit-cover w-100" src="" alt="" />
        </Col>
        <Col className="col-6 col-md-4 col-lg-3 col-xl-2 col-2">
          <img className="object-fit-cover w-100" src="" alt="" />
        </Col>
        <Col className="col-6 col-md-4 col-lg-3 col-xl-2 col-2">
          <img className="object-fit-cover w-100" src="" alt="" />
        </Col>
        <Col className="col-6 col-md-4 col-lg-3 col-xl-2 col-2">
          <img className="object-fit-cover w-100" src="" alt="" />
        </Col>
        <Col className="col-6 col-md-4 d-lg-none col-lg-3 d-xl-flex col-xl-2 col-2">
          <img className="object-fit-cover w-100" src="" alt="" />
        </Col>
        <Col className="col-6 col-md-4 d-lg-none col-lg-3 d-xl-flex col-xl-2 col-2">
          <img className="object-fit-cover w-100" src="" alt="" />
        </Col>
      </Row>
    );
  }
}

export default Gallery;
