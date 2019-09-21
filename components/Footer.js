import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Link from "next/link";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer
        className={
          this.props.page == "article"
            ? "article-footer"
            : this.props.page == "full"
            ? "article-full"
            : ""
        }
      >
        <Container className="footer">
          <Row>
            <Col sm="12" md="6">
              <h3>دسترسی سریع</h3>
              <ul className="access-list">
                <li>
                  <Link href="/">
                    <a href="/">
                      <i className="fas fa-home"></i>
                      <span>صفحه اصلی</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/navy/1">
                    <a>
                      <i className="fas fa-plane"></i>
                      <span>ناوگان هوایی</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/about/3">
                    <a href="/about/3">
                      <i className="fas fa-check"></i>
                      <span>منشور اخلاقی</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/about/1">
                    <a href="/about/1">
                      <i className="fas fa-eye"></i>
                      <span>چشم انداز</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </Col>
            <Col sm="12" md="6">
              <h3> تماس با ما</h3>
              <ul className="contact-list">
                <li>
                  <i className="fas fa-map-marker"></i>
                  <span>نلسون ماندلا، بالاتر از ظفر، کوچه نور، پلاک 6</span>
                </li>
                <li>
                  <i className="fas fa-phone"></i>
                  <span>021-88878583</span>
                </li>
                <li>
                  <Row>
                    <Col>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="نام"
                        id="name"
                      />
                    </Col>
                    <Col>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="ایمیل"
                        id="email"
                      />
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      <textarea
                        className="form-control"
                        placeholder="متن"
                        id="email"
                      />
                    </Col>
                    <Col>
                      <Button className="form-control">ارسال</Button>
                    </Col>
                  </Row>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
