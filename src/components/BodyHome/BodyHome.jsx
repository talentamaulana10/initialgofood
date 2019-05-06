import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Card from "./cardHome";
import Car from "../../asset/car.svg";
import Payment from "../../asset/pay.svg";
import Ride from "../../asset/ride.svg";
import Food from "../../asset/food.svg";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 50
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center"
  }
});

function AutoGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid
        style={{ display: "flex", justifyContent: "center" }}
        container
        spacing={0}
      >
        <div className={classes.paper}>
          {" "}
          <Link tag={Link} to="/restos" style={{ textDecoration: "none" }}>
            <Card No="1" title="Go-Food" Image={Food} />{" "}
          </Link>
        </div>
        <div className={classes.paper}>
          {" "}
          <Link tag={Link} to="/restos" style={{ textDecoration: "none" }}>
            <Card No="2" title="Go-Pay" Image={Payment} />{" "}
          </Link>
        </div>
        <div className={classes.paper}>
          {" "}
          <Link tag={Link} to="/restos" style={{ textDecoration: "none" }}>
            <Card No="3" title="Go-Car" Image={Car} />{" "}
          </Link>
        </div>
        <div className={classes.paper}>
          {" "}
          <Link tag={Link} to="/restos" style={{ textDecoration: "none" }}>
            <Card No="4" title="Go-Ride" Image={Ride} />{" "}
          </Link>
        </div>
      </Grid>
    </div>
  );
}

AutoGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AutoGrid);
