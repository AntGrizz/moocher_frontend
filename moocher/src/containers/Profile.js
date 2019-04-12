import React from 'react';
import { connect } from 'react-redux';
import { Header} from 'semantic-ui-react';
import LoanCard from '../components/LoanCard'
import RequestCard from '../components/RequestCard'
import {AvailableCard} from '../components/AvailableCard'


class Profile extends React.Component{

  render(){
    return (
      <div className="ui three column grid" id='profile'>
        <Header id='profile-headers' as="h4">Rental Requests</Header>
        <div className="row">
          {!this.props.user ? null : this.props.user.requests.map(request => (<RequestCard request={request} key={request.id} user={this.props.user} users={this.props.users} />))}
        </div>

        {/* <Header id='profile-headers' as="h4">Available Items</Header>
      <div className="row">
        {!this.props.user ? null : this.props.user.items.filter(item => !this.props.user.requests.includes(item) && !this.props.user.rentals.includes(item))}
      </div> */}

        <Header id='profile-headers' as="h4">Loaned Items</Header>
        <div className="row">
          {!this.props.user ? null : this.props.user.rentals.map(rental => (<LoanCard rental={rental} key={rental.id} user={this.props.user} users={this.props.users} />))}
        </div>
      </div >
    )
    }
  }
  


const mapStateToProps = (state) => {
  return {
    user: state.user,
    users: state.users
  };
};


export default connect(mapStateToProps)(Profile);


// (<ItemCard item={item} key={item.id} user={this.props.user} />)