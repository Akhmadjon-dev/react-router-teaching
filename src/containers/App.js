import React, { Component } from "react";
import MoviesList from "./Movies/index.jsx";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Nav from "./Navbar/nav.js";
import Users from "./user.js";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact path="/users">
              <Users />
            </Route>
            <Route exact path="/">
              <MoviesList />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
