import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setUser } from '../redux/actions/user';
import { Link } from 'react-router-dom';


class NavBar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu inverted>
        <Menu.Item
          as={Link}
          to="/profile"
          name="profile"
          active={activeItem === 'profile'}
          onClick={this.handleItemClick}
        >
          User Profile
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/items"
          name="items"
          active={activeItem === 'items'}
          onClick={this.handleItemClick}
        >
          Group Items
        </Menu.Item>

        <Menu.Item
          name="unknown"
          active={activeItem === 'unknown'}
          onClick={this.handleItemClick}
        >
          Unknown
        </Menu.Item>

        <Menu.Menu position='right'>
        <Menu.Item
          name='logout'
          active={activeItem === 'logout'}
          onClick={ () => {
            const user = {}
            localStorage.clear()
            this.props.clearUser(user)
          }}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    clearUser: (user) => {
      dispatch(setUser(user))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(NavBar);
