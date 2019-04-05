import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class NavBar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item
          name="Items"
          active={activeItem === 'Items'}
          onClick={this.handleItemClick}
        >
          Items
        </Menu.Item>

        <Menu.Item
          name="user"
          active={activeItem === 'user'}
          onClick={this.handleItemClick}
        >
          User
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
          onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}

export default NavBar
