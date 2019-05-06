import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./cardFood.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
export default class CardFood extends Component {
  render() {
    return (
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center"
        }}
      >
        <Card
          className="cardR"
          style={{ maxWidth: 300, maxHeight: 500, borderRadius: 5 }}
        >
          <CardImg
            style={{ height: 200, width: 300 }}
            src={this.props.gambar}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle style={{ fontWeight: "bold" }}>
              {this.props.name}
            </CardTitle>
            <CardSubtitle>Price : {this.props.harga}</CardSubtitle>
            <CardTitle style={{ fontWeight: "bold" }}>
              <h1>{this.props.qty}</h1>
            </CardTitle>
            <Button
              style={{
                fontWeight: "bold",
                color: "#fff",
                backgroundColor: "#cf2a42ff",
                outline: "none",
                marginTop: 30,
                marginRight: 10
              }}
              onClick={this.props.minus}
              variant="fab"
            >
              -
            </Button>

            <Button
              style={{
                fontWeight: "bold",
                backgroundColor: "#2b4782ff",
                color: "white",
                outline: "none",
                marginTop: 30,
                marginLeft: 10
              }}
              onClick={this.props.plus}
              variant="fab"
            >
              +
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}
