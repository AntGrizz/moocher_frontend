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
          to="/rent_items"
          name="rent_items"
          active={activeItem === 'rent_items'}
          onClick={this.handleItemClick}
        >
          Mooch
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/profile"
          name="profile"
          active={activeItem === 'profile'}
          onClick={this.handleItemClick}
        >
          Requests/Loans
        </Menu.Item>

        <Menu.Item
          as={Link}
          name="user_items"
          to="/user_items"
          active={activeItem === 'user_items'}
          onClick={this.handleItemClick}
        >
          Your Items
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/rentals"
          name="rentals"
          active={activeItem === 'rentals'}
          onClick={this.handleItemClick}
        >
          Rentals
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/list_item"
          name="list_item"
          active={activeItem === 'list_item'}
          onClick={this.handleItemClick}
        >
          List Item
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item
            name="logout"
            active={activeItem === 'logout'}
            onClick={() => {
              const user = {};
              localStorage.clear();
              this.props.clearUser(user);
            }}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clearUser: user => {
      dispatch(setUser(user));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NavBar);
