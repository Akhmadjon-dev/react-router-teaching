import React, { Component } from "react";
import Button from "./button";

import "./style.css";
export default class App extends Component {
  state = {
    id: 1,
    name: "Asadbek",
  };
  clickHandler = () => {
    const { id } = this.state;
    this.setState({ id: id + 1 });
    console.log("btn clicked");
  };
  render() {
    console.log(this.state.id);
    const { id, name } = this.state;
    return (
      <div onClick={this.clickHandler} className={id > 0 ? "app" : "noapp"}>
        <ul>
          <li>
            <p> slaoom</p>
            <Button />
          </li>
        </ul>
      </div>
    );
  }
}
