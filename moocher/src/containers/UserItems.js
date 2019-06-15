import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react';
import UserItemsCard from '../components/UserItemsCard';

class UserItems extends React.Component {
  handleDropDown = val => {
    this.setState({ category: val });
  };

  render() {
    console.log(this.props.user);
    return this.props.loading ? (
      <div>Loading... Hang Tight!</div>
    ) : (
      <div className="page-div">
        <div>
          <h1>{this.props.user.first_name}'s Items</h1>
        </div>
        <br />
        <Card.Group itemsPerRow={4}>
          {!this.props.user
            ? null
            : this.props.user.items.map(item => (
                <UserItemsCard key={item.id} item={item} />
              ))}
        </Card.Group>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    users: state.users,
    groups: state.groups,
    loading: state.loading
  };
};

export default connect(mapStateToProps)(UserItems);


//waredaca brookville 