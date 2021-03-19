import React, { Component } from "react";
import Delete from "../../components/delete";
import Like from "../../components/like";
import fakeMovies from "../../db/fakeMovies";
import queryString from "query-string";

export default class Movie extends Component {
  state = {
    data: {},
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    const { search } = this.props.location;
    const data = fakeMovies.filter((movie) => movie.id == id);

    this.setState({ data: data[0] });
  }

  render() {
    const { data } = this.state;
    console.log(this.props.match.params, data);
    return (
      <ul>
        <li>{data.title}</li>
      </ul>
    );
  }
}
