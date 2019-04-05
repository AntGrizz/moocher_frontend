import React, { Component } from 'react';
import { Button, Form, Header, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class LoginPage extends Component {
  render() {
    return (
      <div>
        <Container className="ui attached segment" id="login-area">
          <Header as="h3">Login</Header>
          <Form>
            <Form.Field>
              <label>Username</label>
              <input placeholder="Username" />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input placeholder="Password" />
            </Form.Field>
            <Button type="submit">Submit</Button>
          </Form>
          {/* <br />
          <br />
          <Link to="/create_account" className="fluid ui button">
            New user? Create an account
          </Link> */}
        </Container>
      </div>
    );
  }
}

export default LoginPage;
