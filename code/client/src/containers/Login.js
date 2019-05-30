import React, { Component } from "react";
import "./Login.css";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Bootstrap from "react-bootstrap";

import { userService } from '../util/_services';

class Login extends Component {
  // in this constructor, we create a state object where we'll store what the user enters in the form
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      submitted: false,
      loading: false,
      error: '',
      greetings: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //  we link up our submit button with our state by using this validate function. This checks our fields are non-empty, byt can easily do more.
  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  // to update the state when the user types something into these fields, this handleChange function grabs the id (set as controlId for the <FormGroup>) of the field being change and updates its state with the value the user is typing in. Using this keyword inside handleChange, we store the reference to an anonymous function like: handleChange = (event) => {}
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });

    const { name, value } = event.target;
        this.setState({ [name]: value });
  }

  // finally, we trigger our callback handleSubmit when the form is submitted. For now we are simply supressing the browsers default behaviour on submit but we'll do more later
  handleSubmit = event => {
    event.preventDefault();

    this.setState({ submitted: true });
        const { username, password, returnUrl } = this.state;

        this.setState({ loading: true });
        console.log("inside handle submit");
        userService.login(username, password)
            .then(
                user => {
                    localStorage.setItem('useremail', user.email);
                    const { from } = this.props.location.state || { from: { pathname: "/" } };
                    this.props.history.push(from);
                },
                error => this.setState({ error, loading: false })
            );
  }

  // we connect the state to our two fields in the form by setting this.state.email and this.state.password as the value in our input fields
  // this means when the state changes, React will re-render these components with the updated value

  // we set the autoFocus flag to our email field, so that when our form loads, it will set it's focus to that field
  render() {
    return (
      <div className="Login">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="email" bsSize="large">
            <Form.Control
              autoFocus
              // type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="password" bsSize="large">
            <Form.Control
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </Form.Group>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;
