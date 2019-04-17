import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';



class LoanCard extends React.Component {
  render() {
    return (
      <Card centered className="card">
        <Card.Header>
          <Image
            centered
            spaced
            src={this.props.rental.item.image}
            alt={this.props.rental.item.id}
            className=" ui image style"
          />
          <br />
          {this.props.rental.item.name}
        </Card.Header>
        <Card.Meta>
          <span className="date">{`Owner: ${
            this.props.rental.item.owner.first_name
          } ${this.props.rental.item.owner.last_name}`}</span>
        </Card.Meta>
        <Card.Description>{`Rental Period: ${this.props.rental.start_date} - ${
          this.props.rental.end_date
        }`}</Card.Description>
      </Card>
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



export default connect(
  mapStateToProps
)(LoanCard);
