import React, { Component } from "react";

export default class Index extends Component {
  render() {
    const { data, onGenreChange, genre } = this.props;
    return (
      <ul className="list-group">
        <li
          onClick={() => onGenreChange("all")}
          className={
            "all" === genre ? "list-group-item active" : "list-group-item "
          }
          aria-current="true"
          key="all"
        >
          All types
        </li>
        {data.map((item) => (
          <li
            onClick={() => onGenreChange(item.title)}
            className={
              item.title === genre
                ? "list-group-item active"
                : "list-group-item "
            }
            aria-current="true"
            key={item.id}
          >
            {item.title}
          </li>
        ))}
      </ul>
    );
  }
}
