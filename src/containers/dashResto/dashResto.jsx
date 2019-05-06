import React, { Component } from "react";
import Header from "../../components/header/header";
import { Row, Col } from "reactstrap";
import restorant from "../../utils/restorants";
import CardResto from "../../components/bodyResto/cardResto";
export default class DashResto extends Component {
  choice = id => {
    var orresto = restorant.find(item => item.id === id);
    sessionStorage.setItem("resto", JSON.stringify([orresto]));
  };
  render() {
    return (
      <div>
        <Header name="restorant" />
        <div style={{ marginTop: 100 }}>
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
                  <CardResto item={item} choice={() => this.choice(item.id)} />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    );
  }
}
