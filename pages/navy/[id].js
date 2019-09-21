import React from "react";
import Layout from "../../components/Layout";

import { Container, Row, Col } from "reactstrap";
import naviesFile from "../../static/data/navies.json";
const navies = Object.values(naviesFile);
class Navy extends React.Component {
  static async getInitialProps(context) {
    let {
      query: { id }
    } = context;
    return { id: --id };
  }

  constructor(props) {
    super(props);
    this.state = { selected: navies[props.id] };
  }

  changeAirPlane(e) {
    const selected = navies[e.target.id.replace("navy-", "") - 1];
    const image = document.getElementById("navy-image");
    image.style.transform = "translateX(-2%)";
    image.style.opacity = 0;
    setTimeout(() => {
      this.setState({ selected });
      image.style.transform = "translateX(2%)";
      image.style.opacity = 1;
    }, 600);
  }

  render() {
    const { selected } = this.state;
    return (
      <Layout page="full">
        <Container>
          <Row>
            <Col sm="12">
              <Row className="rtl">
                <Col sm="8">
                  <img
                    src={`/static/images/${selected.name.toLowerCase()}${
                      selected.number
                    }.png`}
                    className="navy-image"
                    id="navy-image"
                  />
                  <div className="air">
                    <div className="wind one"></div>
                    <div className="wind two"></div>
                    <div className="wind three"></div>
                    <div className="wind four"></div>
                  </div>
                </Col>
                <Col sm="4" className="text-right rtl">
                  <h5>{selected.persianName}</h5>
                  <p>{selected.body}</p>
                </Col>
              </Row>
            </Col>
            <Col sm="12">
              <div className="changer">
                <Row className="justify-content-center">
                  <Col sm="2">
                    <button
                      className={selected.id == 1 ? "active" : "deactive"}
                      id="navy-1"
                      onClick={this.changeAirPlane.bind(this)}
                    >
                      1
                    </button>
                  </Col>
                  <Col sm="2">
                    <button
                      className={selected.id == 2 ? "active" : "deactive"}
                      id="navy-2"
                      onClick={this.changeAirPlane.bind(this)}
                    >
                      2
                    </button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

export default Navy;
