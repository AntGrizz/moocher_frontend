import React from 'react';
import { Card, Button, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { deleteItem } from '../redux/actions/item';

class UserItemsCard extends React.Component {
  render() {
    return (
      <Card centered className="card">
        <Card.Header>
          <Image
            centered
            spaced
            size="medium"
            className=" ui image style"
            src={this.props.item.image}
            alt={this.props.item.id}
          />
          <br />
          {this.props.item.name}
        </Card.Header>
        <Card.Meta>
          <span>{`Owner: ${this.props.user.first_name} ${
            this.props.user.last_name
          }`}</span>
        </Card.Meta>
        <Card.Description>
          {`Condition: ${this.props.item.condition}`}
        </Card.Description>
        <Card.Content extra>
          <div>
            <Button
              basic
              color="red"
              onClick={() => this.props.deleteItem(this.props.item)}
            >
              Delete Item
            </Button>
          </div>
        </Card.Content>
      </Card>
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
    deleteItem: item => {
      dispatch(deleteItem(item));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserItemsCard);
