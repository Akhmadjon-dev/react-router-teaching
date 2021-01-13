import React, { Component } from "react";

export default class Delete extends Component {
  componentDidMount() {
    console.log("del did mount");
  }
  render() {
    const { deleteHandler, item } = this.props;
    console.log("delete render");
    return (
      <div
        onClick={() => {
          deleteHandler(item.id);
        }}
      >
        {this.props.title}
      </div>
    );
  }
}
