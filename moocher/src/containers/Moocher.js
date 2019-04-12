import React, { Component} from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginPage from '../components/LoginPage';
import Profile from './Profile';
import { GroupItems } from '../containers/GroupItems';
import CreateUser from '../components/CreateUser';
import NavBar from '../components/NavBar';
import { fetchingUsers} from '../redux/actions/users';
import { fetchLoggedInUser } from '../redux/actions/user';
import { isEmpty } from 'lodash'

class Moocher extends Component {


  componentDidMount() {
    //where we fetch dispatch
    this.props.fetchingUsers();
    let token = localStorage.getItem('token')
    if (token){
      this.props.fetchLoggedInUser(token)
    }
  }


  render() {
    
    return (
      <div>
        <NavBar />
        
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/profile" />} />
          <Route exact path="/profile" render={() => {
            return isEmpty(this.props.user) ? <Redirect to="/login" /> :
            <Profile />
          }}
          />
          <Route exact path="/login" render={() => {
            return isEmpty(this.props.user) ? <LoginPage/> :
              <Redirect to="/profile" />
          }}
          />

          <Route exact path="/items" render={() => {
            return isEmpty(this.props.user) ? <Redirect to="/login" /> :
              <GroupItems />
          }}
          />
          <Route exact path="/create_account" component={CreateUser}/>
        </Switch>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingUsers: () => {
      dispatch(fetchingUsers());
    },
    fetchLoggedInUser: (token) => {
      dispatch(fetchLoggedInUser(token))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Moocher);
