import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./containers/home/home";
import DashResto from "./containers/dashResto/dashResto";
import DashFood from "./containers/dashFood/DashFood";
import Checkout from "./containers/checkut/Checkout";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/restos" exact component={DashResto} />
          <Route path="/chekout" exact component={Checkout} />
          <Route path="/restos/:id" component={DashFood} />
        </Switch>
      </div>
    );
  }
}

export default App;
