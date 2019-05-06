import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import "./cardHome.css";

const styles = {
  card: {},
  media: {
    height: 190
  }
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <div className="Hcard">
      <div className="HWadImgS">
        <img className="HImgS" src={props.Image} />
      </div>

      <div className="HWadTitleS">
        <h1 className="HTitleS">{props.title}</h1>
      </div>
    </div>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
