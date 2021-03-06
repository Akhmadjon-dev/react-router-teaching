import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Movie from "./Movies/index.jsx";
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
              key={item.key}
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
