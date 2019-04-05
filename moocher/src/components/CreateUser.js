import React, { Component } from 'react';
import { Button, Form, Header, Container } from 'semantic-ui-react';
import StateDropdown from './StateDropdown';

class CreateUser extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      userName: '',
      password: '',
      street: "",
      city: "",
      state: "",
      zipCode: null 
    };
  }
  render() {
    return (
      <Container className="ui attached segment" id="create-area">
        <Header as="h3">Create User</Header>
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input placeholder="First Name" />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder="Last Name" />
          </Form.Field>
          <Form.Field>
            <label>Username</label>
            <input placeholder="Username" />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder="Password" />
          </Form.Field>
          <Form.Field>
            <label>Street</label>
            <input placeholder="Street" />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input placeholder="City" />
          </Form.Field>
          <Form.Field>
            <label>State</label>
            <StateDropdown />
          </Form.Field>
          <Form.Field>
            <label>Zip Code</label>
            <input placeholder="Zip Code" />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default CreateUser;
