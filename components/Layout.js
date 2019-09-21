import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "../styles/index.scss";
import { Row, Col } from "reactstrap";

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.props = this.props == undefined ? "home" : "article";
  }

  render() {
    //
    return (
      <div>
        <Navbar />
        {this.props.children}
        <Footer page={this.props.page} />
      </div>
    );
  }
}

export default Splash;
