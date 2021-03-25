import React, { Component } from "react";
import axios from "../utils/axios";
import Axios from "axios";

export default class Users extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res, "data");
      })
      .catch((err) => console.log(err));
    // fetch("users")
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res, "data");
    //   })
    //   .catch((err) => console.log(err));
  }
  render() {
    return <div>users</div>;
  }
}
