import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginPage from '../components/LoginPage';
import Profile from './Profile';
import GroupItems from '../containers/GroupItems';
import UserItems from '../containers/UserItems';
import Rentals from '../containers/Rentals';
import CreateUser from '../components/CreateUser';
import ListItem from '../components/ListItem';
import NavBar from '../components/NavBar';
import MapModal from '../components/MapModal';
import { fetchingUsers } from '../redux/actions/users';
import { fetchingGroups } from '../redux/actions/groups';
import { fetchingRentals } from '../redux/actions/rentals';
import { fetchLoggedInUser } from '../redux/actions/user';
import { isEmpty } from 'lodash';

class Moocher extends Component {
  componentDidMount() {
    //where we fetch dispatch
    this.props.fetchingUsers();
    this.props.fetchingGroups();
    this.props.fetchingRentals();
    let token = localStorage.getItem('token');
    if (token) {
      this.props.fetchLoggedInUser(token);
    }
  }

  render() {
    return (
      <div>
        <MapModal/>
        <NavBar />

        <Switch>
          <Route exact path="/" render={() => <Redirect to="/rent_items" />} />
          <Route
            exact
            path="/profile"
            render={() => {
              return isEmpty(this.props.user) ? (
                <Redirect to="/login" />
              ) : (
                <Profile />
              );
            }}
          />

          <Route
            exact
            path="/login"
            render={() => {
              return isEmpty(this.props.user) ? (
                <LoginPage />
              ) : (
                <Redirect to="/rent_items" />
              );
            }}
          />
          <Route
            exact
            path="/rent_items"
            render={() => {
              return isEmpty(this.props.user) ? (
                <Redirect to="/login" />
              ) : (
                <GroupItems />
              );
            }}
          />
          <Route
            exact
            path="/user_items"
            render={() => {
              return isEmpty(this.props.user) ? (
                <Redirect to="/login" />
              ) : (
                <UserItems />
              );
            }}
          />
          <Route
            exact
            path="/rentals"
            render={() => {
              return isEmpty(this.props.user) ? (
                <Redirect to="/login" />
              ) : (
                <Rentals />
              );
            }}
          />

          <Route
            exact
            path="/list_item"
            render={() => {
              return isEmpty(this.props.user) ? (
                <Redirect to="/login" />
              ) : (
                <ListItem />
              );
            }}
          />

          <Route exact path="/create_account" component={CreateUser} />
        </Switch>
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
    fetchingUsers: () => {
      dispatch(fetchingUsers());
    },
    fetchLoggedInUser: token => {
      dispatch(fetchLoggedInUser(token));
    },
    fetchingGroups: () => {
      dispatch(fetchingGroups());
    },
    fetchingRentals: () => {
      dispatch(fetchingRentals());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Moocher);
