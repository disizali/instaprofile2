import React from "react";
import Layout from "../components/Layout";
import Splash from "../components/Splash";
import Vision from "../components/Vision";
import Links from "../components/Links";

import "../styles/index.scss";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Layout>
        <Splash />
        <Vision />
        <Links />
      </Layout>
    );
  }
}

export default Index;
