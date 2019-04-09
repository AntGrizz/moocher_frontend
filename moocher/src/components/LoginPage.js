import React from 'react';
import { Button, Form, Header, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchingUser } from '../redux/actions/user';

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      redirect: false
    };
  }

  handleUserLogin = e => {
    if (this.state.username !== '') {
      this.props.setUserLogin(this.state.username, this.state.password)
      this.resetForm();
    }
  };

  resetForm = () => {
    this.setState({ username: '', password: '', redirect: !this.state.redirect});
  };

  render() {
   
    return (
      <div>
        <Header id='header' as="h1">Moocher</Header>
        <Header as="h1">Because what are friends for?</Header>
        <Container className="ui attached segment" id="login-area">
          <Header as="h3">Login</Header>
          <Form onSubmit={e => this.handleUserLogin(e)}>
            <Form.Field>
              <label>Username</label>
              <input
                value={this.state.username}
                onChange={e => {
                  this.setState({ username: e.target.value });
                }}
                placeholder="Username"
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input
                type='password'
                value={this.state.password}
                onChange={e => {
                  this.setState({ password: e.target.value });
                }}
                placeholder="Password"
              />
            </Form.Field>
            <Button type="submit">Submit</Button>
          </Form>
          <br />
          <br />
          <Link to="/create_account" className="fluid ui button">
            New user? Create an account
          </Link>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUserLogin: (username, password) => {
      dispatch(fetchingUser(username, password));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
