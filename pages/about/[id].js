import React from "react";
import axios from "axios";
import Layout from "../../components/Layout";
import { Container } from "reactstrap";

class About extends React.Component {
  static async getInitialProps(context) {
    const {
      query: { id }
    } = context;
    const { data } = await axios.get(`http://localhost:3000/api/about/${id}`);
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
          <h3 className="text-right pb-2"><b>{this.props.data.title}</b></h3>
          <div
            className="article-body post-body text-right pt-4 pb-4"
            dangerouslySetInnerHTML={{ __html: this.props.data.body }}
          ></div>
        </Container>
      </Layout>
    );
  }
}

export default About;
