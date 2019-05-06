import React, { Component } from "react";
import Header from "../../components/header/header";
import CardChekout from "../../components/CardCheckout/card";
import { Row, Col } from "reactstrap";
export default class Checkout extends Component {
  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    const get = sessionStorage.getItem("order");
    const getTotal = sessionStorage.getItem("total");
    const convert = JSON.parse(get);
    const convertTotal = JSON.parse(getTotal);
    console.log(convert);
    this.setState({
      order: convert,
      total: convertTotal
    });
  }
  state = {
    order: [],
    total: 0
  };

  render() {
    return (
      <div>
        <Header name="Checkout" />
        <div style={{ marginTop: 100 }}>
          <Row>
            {this.state.order.map(item => {
              return (
                <Col sm="6" xm="12" xl="4">
                  <CardChekout
                    gambar={item.gambar}
                    name={item.nama}
                    harga={item.price}
                    qty={item.qty}
                  />
                </Col>
              );
            })}
          </Row>
        </div>
        <h1>Total Belanjaan Kamu : Rp {this.state.total}</h1>
      </div>
    );
  }
}
