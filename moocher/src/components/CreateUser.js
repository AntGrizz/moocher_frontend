import React, { Component } from 'react';
import { Button, Form, Header, Container } from 'semantic-ui-react';
import StateDropdown from './StateDropdown';
import { connect } from 'react-redux';
import {setUser, newUser}  from '../redux/actions/user';


class CreateUser extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      street: '',
      city: '',
      state: '',
      zipCode: ''
    };
  }

  handleDropDown = val => {
    this.setState({ state: val });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.username !== '') {
      this.props.newUser(
        this.state.firstName,
        this.state.lastName,
        this.state.username,
        this.state.password,
        this.state.street,
        this.state.city,
        this.state.state,
        this.state.zipCode
      );
      this.props.setUser(this.state.username, this.state.password)
      this.resetForm();
    }
  };

  resetForm = () => {
    this.setState({
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      street: '',
      city: '',
      state: '',
      zipCode: ''
    });
  };

  render() {
    return (
      <Container className="ui attached segment" id="create-area">
        <Header as="h3">Create User</Header>
        <Form onSubmit={ e => this.handleSubmit(e)}>
          <Form.Field>
            <label>First Name</label>
            <input
              placeholder="First Name"
              value={this.state.firstName}
              onChange={e => {
                this.setState({ firstName: e.target.value });
              }}
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input
              placeholder="Last Name"
              value={this.state.lastName}
              onChange={e => {
                this.setState({ lastName: e.target.value });
              }}
            />
          </Form.Field>
          <Form.Field>
            <label>Username</label>
            <input
              placeholder="Username"
              value={this.state.username}
              onChange={e => {
                this.setState({ username: e.target.value });
              }}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              placeholder="Password"
              value={this.state.password}
              onChange={e => {
                this.setState({ password: e.target.value });
              }}
            />
          </Form.Field>
          <Form.Field>
            <label>Street</label>
            <input
              placeholder="Street"
              value={this.state.street}
              onChange={e => {
                this.setState({ street: e.target.value });
              }}
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              placeholder="City"
              value={this.state.city}
              onChange={e => {
                this.setState({ city: e.target.value });
              }}
            />
          </Form.Field>
          <Form.Field>
            <label>State</label>
            <StateDropdown
              state={this.state.state}
              handleDropDown={this.handleDropDown}
            />
          </Form.Field>
          <Form.Field>
            <label>Zip Code</label>
            <input
              placeholder="Zip Code"
              value={this.state.zipCode}
              onChange={e => {
                this.setState({ zipCode: e.target.value });
              }}
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     newUser: state.newUser,
//     user: state.user
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    newUser: (firstName, lastName, userName, password, street, city, state, zipCode) => {
      dispatch(newUser(firstName, lastName, userName, password, street, city, state, zipCode))
    },
    setUser: (userName, password) => {
      dispatch(setUser(userName, password))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CreateUser);