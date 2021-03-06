import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Nav from "./Navbar/nav.js";
import routes from "./routes.js";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <Switch>
          {routes.map((item) => (
            <Route
              exact={item.exact}
              path={item.path}
              component={item.component}
            />
          ))}
        </Switch>
      </div>
    );
  }
}
