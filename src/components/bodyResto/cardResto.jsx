import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./cardResto.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
export default class cardResto extends Component {
  render() {
    const { image, lokasi, name, id } = this.props.item;
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
          style={{ maxWidth: 350, maxHeight: 500, borderRadius: 5 }}
        >
          <CardImg
            style={{ height: 200, width: 350 }}
            src={image}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle style={{ fontWeight: "bold" }}>{name}</CardTitle>
            <CardSubtitle>{lokasi}</CardSubtitle>

            <Link
              style={{ marginTop: 20, textDecoration: "none" }}
              variant="extendedFab"
              color="secondary"
              tag={Link}
              to={`/restos/${id}`}
              onClick={this.props.choice}
            >
              Choice
            </Link>
          </CardBody>
        </Card>
      </div>
    );
  }
}
