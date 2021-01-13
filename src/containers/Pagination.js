import React, { Component } from "react";
import _ from "lodash";
import Types from "prop-types";

export default class Pagination extends Component {
  render() {
    const { onTakeCurrentPage, count, pageSize, currentPage } = this.props;
    const countPages = Math.ceil(count / pageSize);
    const pages = _.range(1, countPages + 1);
    console.log(pages);
    return (
      <nav style={{ marginTop: "30px" }} aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map((item) => (
            <li
              key={item}
              onClick={() => onTakeCurrentPage(item)}
              className={
                item === currentPage ? "page-item active " : "page-item"
              }
            >
              <button className="page-link">{item}</button>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
Pagination.defaultProps = {
  count: 50,
  pageSize: 10,
};
Pagination.propTypes = {
  onTakeCurrentPage: Types.func.isRequired,
  count: Types.number.isRequired,
  pageSize: Types.number.isRequired,
  currentPage: Types.number.isRequired,
};
