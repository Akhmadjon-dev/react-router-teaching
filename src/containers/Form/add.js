import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
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

  //   inputHandler = (e) => {
  //     const { name, value } = e.target;
  //     this.setState((prevState) => ({
  //       ...prevState,
  //       account: { ...prevState.account, [name]: value },
  //     }));
  //     console.log(this.state, "onchange");
  //   };

  inputHandler = ({ target: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;

    this.setState({ account });
    console.log(this.state, "onchange");
  };

  validate = () => {
    const errors = {};
    const { account } = this.state;

    if (account.username.trim() === "") {
      errors.username = "Username is required!!!";
    }
    if (account.password.trim() === "") {
      errors.password = "Password is required!!!";
    }
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
