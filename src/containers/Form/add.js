import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import Joi from "joi-browser";
import Input from "./input";

export default class Add extends Component {
  state = {
    account: {
      password: "",
      username: "",
    },
    errors: {
      // password: 'Password is reuqired',
      // username: 'Password is reuqired'
    },
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  //   inputHandler = (e) => {
  //     const { name, value } = e.target;
  //     this.setState((prevState) => ({
  //       ...prevState,
  //       account: { ...prevState.account, [name]: value },
  //     }));
  //     console.log(this.state, "onchange");
  //   };

  validateProperty = ({ name, value }) => {
    if (name === "username") {
      if (value.trim() === "") return "Username is required!";
    }
    if (name === "password") {
      if (value.trim() === "") return "Password is required!";
    }
  };

  inputHandler = ({ target: input }) => {
    const errors = { ...this.state.errors };
    const errorMsg = this.validateProperty(input);

    if (errorMsg) errors[input.name] = errorMsg;
    else delete errors[input.name];

    console.log(errors, "input on change error handling");

    const account = { ...this.state.account };
    account[input.name] = input.value;

    this.setState({ account, errors });
    console.log(this.state, "onchange");
  };

  validate = () => {
    const errors = {};

    const { error } = Joi.validate(this.state.account, this.schema, {
      abortEarly: false,
    });
    if (!error) return null;
    for (let item of error.details) errors[item.path[0]] = item.message;

    return errors;
  };

  submitHandler = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors });
    console.log(errors, "validate");
    console.log("form submitted");
  };

  render() {
    const { password, username } = this.state.account;
    const { errors, account } = this.state;
    console.log(this.state, "render");
    return (
      <div>
        <Form onSubmit={this.submitHandler}>
          <Input
            name="password"
            type="password"
            label="Password:"
            value={password}
            handler={this.inputHandler}
            error={errors.password}
          />
          <Input
            name="username"
            type="text"
            label="Username:"
            value={username}
            handler={this.inputHandler}
            error={errors.username}
          />

          <Button variant="primary" type="submit">
            Send
          </Button>
        </Form>
      </div>
    );
  }
}
