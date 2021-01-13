import React, { Component } from "react";

export default class Like extends Component {
  render() {
    const { likeHandler, item } = this.props;
    return (
      <div
        onClick={() => {
          likeHandler(item);
        }}
      >
        {item.like ? "like" : "dislike"}
      </div>
    );
  }
}
