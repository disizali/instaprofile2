import React from "react";
import Layout from "../components/Layout";
import axios from "axios";

import { Container, Row, Col } from "reactstrap";

class News extends React.Component {
  static async getInitialProps() {
    const { data } = await axios.get("http://localhost:3000/api/news");
    return { data };
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout page="article">
        <Container>
          {this.props.data.map((item, index) => {
            return (
              <div className="shadow-lg bg-white rounded mt-4 mb-4" key={index}>
                <Row>
                  <Col className="text-right" sm="9">
                    <h5 className="p-3 rtl"> {item.title}</h5>
                    <p className="text-secondary pl-4 pr-4 article-body">
                      {item.body}
                    </p>
                  </Col>
                  <Col sm="3">
                    <img
                      src={item.image}
                      className="img-thumbnail shadow news-image mr-4 rounded"
                    />
                  </Col>
                </Row>
              </div>
            );
          })}
        </Container>
      </Layout>
    );
  }
}

export default News;
