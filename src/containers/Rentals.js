import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react';
import CurrRentalCard from '../components/CurrRentalCard';
import MapModal from '../components/MapModal';

class Rentals extends React.Component {
  filterRentals = () => {
    return this.props.rentals.filter(
      rental => rental.renter.id === this.props.user.id
    );
  };

  render() {
    console.log(this.props.user);
    return this.props.loading ? (
      <div>Loading... Hang Tight!</div>
    ) : (
      <React.Fragment>
        {/* <MapModal rental={this.props.rental} /> */}
        <div className="page-div">
          <div>
            <h1>{this.props.user.first_name}'s Mooching On...</h1>
          </div>
          <br />
          {this.filterRentals > 1 ? (
            <h1>You aren't mooching off anyone!</h1>
          ) : (
            <Card.Group itemsPerRow={4}>
              {this.filterRentals().map(rental => (
                <CurrRentalCard key={rental.id} rental={rental} />
              ))}
            </Card.Group>
          )}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    users: state.users,
    rentals: state.rentals,
    loading: state.loading
  };
};

export default connect(mapStateToProps)(Rentals);

{
  /* {!this.props.user
            ? null
            : this.filterRentals().map(item => (
                <CurrRentalCard key={item.id} item={item} />
              ))} */
}
