import React, { Component } from "react";
import CardResto from "./cardResto";
import { Col, Row } from "reactstrap";
import restorant from "../../utils/restorants";
export default class BodyResto extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Row
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: 10,
            alignItems: "center"
          }}
        >
          {restorant.map(item => {
            return (
              <Col style={{ marginTop: 20 }} sm="6" xm="12" xl="4">
                <CardResto item={item} />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}
