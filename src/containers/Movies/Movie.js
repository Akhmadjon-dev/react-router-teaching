import React, { Component } from "react";
import Delete from "../../components/delete";
import Like from "../../components/like";

export default class Movie extends Component {
  componentDidMount() {}

  render() {
    const { item, likeHandler, deleteHandler, infoHandler } = this.props;
    return (
      <tr>
        <td onClick={() => infoHandler(item.id)}>{item.title}</td>
        <td>{item.genre}</td>
        <td>{item.stock}</td>
        <td>{item.rate}</td>
        <td>
          <Like item={item} likeHandler={likeHandler} />
        </td>
        <td>
          <Delete title="del" item={item} deleteHandler={deleteHandler} />
        </td>
      </tr>
    );
  }
}
