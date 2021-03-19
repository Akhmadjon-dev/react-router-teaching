import React, { Component } from "react";
import { Form } from "react-bootstrap";

export default class Input extends Component {
  render() {
    const { name, type, value, handler, error, label } = this.props;
    return (
      <div className="form-group">
        <Form.Label>{label}</Form.Label>
        <input
          className="form-control"
          name={name}
          type={type}
          onChange={handler}
          value={value}
        />
        {error && <div className="alert alert-danger"> {error} </div>}
      </div>
    );
  }
}
