import React, { Component } from "react";
import Header from "../../components/header/header";
import BodyHome from "../../components/BodyHome/BodyHome";
export default class home extends Component {
  render() {
    return (
      <div>
        <Header name="Go-Life" />
        <div style={{ marginTop: 100 }}>
          <BodyHome />
        </div>
      </div>
    );
  }
}
