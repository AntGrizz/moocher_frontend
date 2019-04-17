import React from 'react';
import { Card, Button, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import RentModal from './RentModal';

class GroupCard extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  openModal = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    console.log(this.props.loading);
    console.log(this.props.item.owner)
    return (
      <Card centered className="card">
        <Card.Header>
          <Image
            centered
            spaced
            src={this.props.item.image}
            alt={this.props.item.id}
            className=" ui image style"
          />
          <br />
          {this.props.item.name}
        </Card.Header>
        <Card.Meta>
          <span className="date">
            {!this.props.item
              ? null
              : `Owner: ${this.props.item.owner.first_name} ${
                  this.props.item.owner.last_name
                }`}
          </span>
        </Card.Meta>
        <Card.Content extra>
          <RentModal item={this.props.item} openModal={this.openModal} />
        </Card.Content>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.loading,
    user: state.user
  };
}

export default connect(mapStateToProps)(GroupCard);
