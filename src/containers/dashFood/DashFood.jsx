import React, { Component } from "react";
import Header from "../../components/header/header";
import BodyFood from "../../components/BodyFood/BodyFood";
import restorants from "../../utils/restorants";
import { Col, Row, Table } from "reactstrap";
import CardFood from "../../components/BodyFood/cardFood";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
export default class DashFood extends Component {
  componentWillMount() {
    const data = restorants.find(
      item => item.id === this.props.match.params.id
    );
    const dataFood = data.food;
    this.setState({
      fillfood: dataFood
    });
    console.log(dataFood);
    const addQty = dataFood.forEach(o => {
      o.qty = 0;
    });
    console.log(addQty);

    console.log(this.state.fillfood);
  }

  componentDidMount() {
    // console.log(this.state.fillfood);
  }

  plus = id => {
    const { orderan, fillfood } = this.state;
    const fillFoods = fillfood.find(item => item.id === id);
    const fillOrder = orderan.find(item => item.id === id);
    this.addPrice(fillFoods.harga);
    fillfood.map(o => {
      if (o.id === fillFoods.id) {
        const updateIntern = (o.qty = fillFoods.qty + 1);
      }
    });
    if (fillOrder === undefined) {
      const update = {
        ...fillFoods,
        qty: 1,
        price: fillFoods.harga
      };
      this.setState({
        orderan: [...orderan, update]
      });

      return;
    }
    if (fillFoods.id === fillOrder.id) {
      const update = {
        ...fillOrder,
        qty: fillOrder.qty + 1,
        price: fillOrder.price + fillOrder.harga
      };
      this.setState({
        orderan: orderan.map(o => (o.id === fillOrder.id ? update : o))
      });
      return;
    }
  };
  minus = id => {
    const { orderan, fillfood } = this.state;
    const fillOrder = orderan.find(item => item.id === id);
    const fillFods = fillfood.find(item => item.id === id);
    if (fillFods.qty === 0) {
      return;
    } else {
      if (fillOrder.qty === 1) {
        const updateFoods = { ...fillFods, qty: fillFods.qty - 1 };
        this.setState({
          fillfood: fillfood.map(o => (o.id === fillFods.id ? updateFoods : o))
        });
        const filterOrder = orderan.filter(item => item.id !== id);
        this.setState({
          orderan: filterOrder
        });
      } else {
        const updateOrders = {
          ...fillOrder,
          qty: fillOrder.qty - 1,
          price: fillOrder.price - fillOrder.harga
        };
        const updateFoods = { ...fillFods, qty: fillFods.qty - 1 };
        this.setState({
          fillfood: fillfood.map(o => (o.id === fillFods.id ? updateFoods : o)),
          orderan: orderan.map(o => (o.id === fillOrder.id ? updateOrders : o))
        });
      }
    }
    this.minusPrice(fillFods.harga);
  };

  addPrice = harga => {
    this.setState({
      total: this.state.total + harga
    });
  };

  pay = () => {
    const { orderan, total } = this.state;
    sessionStorage.setItem("order", JSON.stringify(orderan));
    sessionStorage.setItem("total", JSON.parse(total));
  };

  minusPrice = harga => {
    this.setState({
      total: this.state.total - harga
    });
  };

  state = {
    fillfood: [],
    orderan: [],
    total: 0
  };
  render() {
    return (
      <div>
        <Header name="Food" />
        <div className="content" style={{ marginTop: 100 }}>
          <Row>
            {this.state.fillfood.map(foods => {
              return (
                <Col style={{ marginTop: 20 }}>
                  <CardFood
                    name={foods.nama}
                    gambar={foods.gambar}
                    harga={foods.harga}
                    qty={foods.qty}
                    minus={() => this.minus(foods.id)}
                    plus={() => this.plus(foods.id)}
                  />
                </Col>
              );
            })}
          </Row>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f5f5f5",
            flexDirection: "column",
            marginTop: 30,
            minHeight: 300
          }}
        >
          {/* <h4>Orderan Kamu Boss:</h4> */}
          <div style={{ width: "90%" }}>
            <Table>
              <thead>
                <tr>
                  <th>Order Name</th>
                  <th>Quantity</th>
                  <th>Price Total / Food</th>
                </tr>
              </thead>
              <tbody>
                {this.state.orderan.map(orders => (
                  <tr>
                    <td>{orders.nama}</td>
                    <td>{orders.qty} X</td>
                    <td>Rp {orders.price}</td>
                  </tr>
                ))}
              </tbody>
              <thead>
                <tr>
                  <th />
                  <th />
                  <th />
                  <th>SubTotal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td />
                  <td />
                  <td />
                  <td style={{ color: "#cf2a42ff", fontWeight: "bold" }}>
                    Rp {this.state.total}
                  </td>
                </tr>
              </tbody>
            </Table>
            <Button
              style={{
                fontWeight: "bold",
                backgroundColor: "#cf2a42ff",
                color: "white",
                outline: "none"
              }}
              variant="contained"
              component={Link}
              to="/chekout"
              onClick={this.pay}
            >
              Pay Right Now
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
