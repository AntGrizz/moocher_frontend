import React, { Component, Fragment } from 'react';
import { Header } from 'semantic-ui-react';
import LoginPage from '../components/LoginPage';
import CreateUser from '../components/CreateUser';
import NavBar from '../components/NavBar';

class Moocher extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <LoginPage />
        <CreateUser />
      </Fragment>
    );
  }
}

export default Moocher;
