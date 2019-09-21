import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

class Links extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="links">
        <Container>
          <h3 className="text-center text-light">• نقشه سایت •</h3>
          <Row>
            <Col>
              <Link href="/news">
                <div className="map-item">
                  <img
                    src="/static/images/news.jpg"
                    alt="news"
                    className="map-image shadow"
                  />
                  <a className="map-link" href="/news">اخبار</a>
                </div>
              </Link>
            </Col>
            <Col>
            <Link href="/cooperation">
                <div className="map-item">
                  <img
                    src="/static/images/cooperation.jpg"
                    alt="cooperation"
                    className="map-image shadow"
                  />
                  <a className="map-link" href="/cooperation">همکاری با ما</a>
                </div>
              </Link>
            </Col>
            <Col>
            <Link href="/magazine">
                <div className="map-item">
                  <img
                    src="/static/images/magazine.jpg"
                    alt="magazine"
                    className="map-image shadow"
                  />
                  <a className="map-link" href="/magazine">مجله تفریحی</a>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Links;
